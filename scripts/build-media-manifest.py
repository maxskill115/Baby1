"""Build exact-file manifest; generate missing static posters locally or in CI."""
import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
from pathlib import Path
import re
import shutil
import sys
import subprocess
import datetime as dt

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'assets/thuy-yen'

def sha(path):
    with path.open('rb') as f:
        return hashlib.file_digest(f, 'sha256').hexdigest()

def inventory():
    items = []
    for path in sorted(ASSETS.rglob('*')):
        if not path.is_file() or 'posters' in path.parts or 'ui' in path.parts:
            continue
        if path.suffix.lower() not in ('.webp', '.mp4'):
            continue
        try:
            date = dt.date.fromisoformat(path.name[:10]).isoformat()
        except ValueError:
            print(f"[manifest] skip (filename needs YYYY-MM-DD prefix): {path.name}", file=sys.stderr)
            continue
        kind = 'video' if path.suffix.lower() == '.mp4' else 'image'
        relative = path.relative_to(ROOT).as_posix()
        item = dict(id=relative, src='./' + relative, originalFilename=path.name,
                    date=date, type=kind, group='digestion' if 'digestion' in path.parts else 'diary')
        if kind == 'video':
            item['poster'] = './' + relative.replace('/videos/', '/posters/').rsplit('.', 1)[0] + '.webp'
        items.append(item)
    return items

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--posters', action='store_true')
    parser.add_argument('--reuse-legacy', action='store_true')
    args = parser.parse_args()
    items = inventory()
    reused = 0
    if args.reuse_legacy:
        legacy = {}
        for old in (ROOT / 'tempimg').rglob('*'):
            if not old.is_file() or old.suffix.lower() != '.mp4':
                continue
            relative = old.relative_to(ROOT / 'tempimg')
            if relative.parts[0] == 'video':
                poster = ROOT / 'tempimg/video-thumb' / relative.name
            else:
                poster = ROOT / 'tempimg/video-thumb-extra' / relative
            poster = poster.with_suffix('.webp')
            if poster.exists():
                legacy[sha(old)] = poster
        for item in items:
            if item['type'] != 'video':
                continue
            dest = ROOT / item['poster']
            old = legacy.get(sha(ROOT / item['src']))
            if old and not dest.exists():
                dest.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(old, dest)
                reused += 1
        print(f'Checksum-confirmed reused posters: {reused}', flush=True)
    if args.posters:
        def generate(item):
            path, poster = ROOT / item['src'], ROOT / item['poster']
            if poster.exists() and poster.stat().st_size > 32:
                return
            poster.parent.mkdir(parents=True, exist_ok=True)
            for seek in ('0.15', '0'):
                cmd = ['ffmpeg', '-hide_banner', '-loglevel', 'error', '-threads', '1', '-y', '-ss', seek,
                       '-i', str(path), '-frames:v', '1', '-vf', 'scale=640:-2:force_original_aspect_ratio=decrease',
                       '-c:v', 'libwebp', '-quality', '76', '-threads', '1', str(poster)]
                result = subprocess.run(cmd, capture_output=True, timeout=90)
                if result.returncode == 0 and poster.exists() and poster.stat().st_size > 32:
                    return
            raise RuntimeError(f'Poster failed: {path}: {result.stderr.decode(errors="replace")}')
        videos = [i for i in items if i['type'] == 'video']
        with ThreadPoolExecutor(max_workers=4) as pool:
            for n, _ in enumerate(pool.map(generate, videos), 1):
                if n % 100 == 0:
                    print(f'Posters checked/generated: {n}/{len(videos)}', flush=True)
    manifest = dict(version=1, profileId='thuy-yen', items=items,
                    counts=dict(images=sum(i['type'] == 'image' for i in items),
                                videos=sum(i['type'] == 'video' for i in items),
                                digestion=sum(i['group'] == 'digestion' for i in items)))
    (ROOT / 'data/media-manifest.js').write_text('window.BABY_MEDIA_MANIFEST = ' + json.dumps(manifest, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    print(manifest['counts'], flush=True)

if __name__ == '__main__':
    main()
