"""Validate migration integrity, exact inventory and every image/poster decoder."""
import hashlib
import json
from pathlib import Path
from PIL import Image
ROOT = Path(__file__).resolve().parents[1]
audit = json.loads((ROOT/'data/media-migration.json').read_text(encoding='utf-8-sig'))['files']
manifest = json.loads((ROOT/'data/media-manifest.js').read_text(encoding='utf-8-sig').split(' = ',1)[1].rstrip(';\n'))
items = manifest['items']
active_audit = [i for i in audit if i.get('profileId') != 'baby2']
transferred = [i for i in audit if i.get('profileId') == 'baby2']
assert len(audit)==3578 and len(transferred)==24
assert len(items)==len(active_audit)==3554
assert sum(i['type']=='image' for i in items)==2650
assert sum(i['type']=='video' for i in items)==904
assert sum(i['group']=='digestion' and i['type']=='image' for i in items)==67
assert sum(i['group']=='digestion' and i['type']=='video' for i in items)==2
assert {i['src'][2:] for i in items}=={i['path'] for i in active_audit}
assert len({i['src'].casefold() for i in items})==3554
for row in audit:
    p=ROOT/row['path']
    assert p.stat().st_size==row['bytes'], p
    with p.open('rb') as f: assert hashlib.file_digest(f,'sha256').hexdigest()==row['sha256'], p
for row in transferred:
    assert row['type']=='image'
    with Image.open(ROOT/row['path']) as im: im.load()
for item in items:
    p=ROOT/(item['poster'] if item['type']=='video' else item['src'])
    with Image.open(p) as im:
        im.load()
        assert im.width>0 and im.height>0, p
    assert (ROOT/item['src']).name==item['originalFilename']
    assert item['date']==item['originalFilename'][:10]
asset_files={p.relative_to(ROOT).as_posix() for p in (ROOT/'assets/thuy-yen').rglob('*') if p.is_file() and 'ui' not in p.parts}
expected={i['src'][2:] for i in items}|{i['poster'][2:] for i in items if i['type']=='video'}
assert asset_files==expected, 'Unexpected or missing assets'
print('PASS: Yen 2650 images + 904 videos; Baby2 24 images; 69 digestion; all 3578 source checksums and image/poster decodes; exact asset inventory')
