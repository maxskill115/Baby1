"""One-time, verified migration from the user-approved Yen delivery. No deletion of legacy files."""
import datetime as dt
import hashlib
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'Yên'
DEST = ROOT / 'assets/thuy-yen'
AUDIT = ROOT / 'data/media-migration.json'

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def inside(path, parent):
    path.resolve().relative_to(parent.resolve())
    return path

def main():
    if AUDIT.exists():
        rows = json.loads(AUDIT.read_text(encoding='utf-8'))['files']
    else:
        rows, targets = [], set()
        for path in sorted(SOURCE.rglob('*')):
            if not path.is_file():
                continue
            assert path.suffix.lower() in ('.webp', '.mp4'), path
            match = re.match(r'^(\d{4}-\d{2}-\d{2})(?:_| |\.)', path.name)
            assert match, path
            date = dt.date.fromisoformat(match[1])
            assert dt.date(2021, 4, 4) <= date <= dt.date(2026, 9, 5), path
            health = any(p in ('0_consipation_IMG', 'shit') for p in path.parts)
            kind = 'image' if path.suffix.lower() == '.webp' else 'video'
            base = DEST / 'health/digestion' if health else DEST
            target = base / (kind + 's') / str(date.year) / f'{date.month:02}' / path.name
            inside(target, DEST)
            assert str(target).lower() not in targets, target
            targets.add(str(target).lower())
            assert not target.exists(), target
            rows.append(dict(source=path.relative_to(ROOT).as_posix(),
                             path=target.relative_to(ROOT).as_posix(), date=date.isoformat(),
                             type=kind, group='digestion' if health else 'diary',
                             bytes=path.stat().st_size, sha256=digest(path)))
        assert sum(r['type'] == 'image' for r in rows) == 2674
        assert sum(r['type'] == 'video' for r in rows) == 904
        assert sum(r['group'] == 'digestion' for r in rows) == 69
        AUDIT.write_text(json.dumps(dict(version=1, files=rows), ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    for row in rows:
        source, target = ROOT / row['source'], ROOT / row['path']
        inside(source, SOURCE)
        inside(target, DEST)
        if not target.exists():
            assert digest(source) == row['sha256'], source
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(source), str(target))
        assert target.stat().st_size == row['bytes'] and digest(target) == row['sha256'], target
    print(f'Verified {len(rows)} moved files and SHA-256 checksums.', flush=True)

if __name__ == '__main__':
    main()
