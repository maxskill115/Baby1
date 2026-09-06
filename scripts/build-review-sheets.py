"""Local review contact sheets; originals stay unchanged."""
import json
import math
import sys
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
out = Path(sys.argv[1])
out.mkdir(parents=True, exist_ok=True)
manifest = json.loads((ROOT / 'data/media-manifest.js').read_text(encoding='utf-8').split(' = ', 1)[1].rstrip(';\n'))
font = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 14)
index = []
for kind in (sys.argv[2],) if len(sys.argv) > 2 else ('image', 'video'):
    frozen = ROOT / 'data/visual-review-index.json'
    by_src = {i['src']:i for i in manifest['items']}
    rows = [by_src[src] for src in json.loads(frozen.read_text(encoding='utf-8-sig'))[kind]] if frozen.exists() else sorted([i for i in manifest['items'] if i['type'] == kind], key=lambda i: (i['date'], i['src']))
    for start in range(0, len(rows), 64):
        batch = rows[start:start + 64]
        sheet = Image.new('RGB', (8 * 220, math.ceil(len(batch) / 8) * 190), '#eeeeee')
        draw = ImageDraw.Draw(sheet)
        for n, item in enumerate(batch):
            path = ROOT / (item['poster'] if kind == 'video' else item['src'])
            with Image.open(path) as original:
                tile = ImageOps.contain(ImageOps.exif_transpose(original).convert('RGB'), (216, 162))
            x, y = (n % 8) * 220, (n // 8) * 190
            sheet.paste(tile, (x + (220 - tile.width) // 2, y))
            label = f'{start+n:04} {item["originalFilename"]}'
            draw.text((x + 2, y + 163), label, font=font, fill='#111111')
            if item['group'] == 'digestion':
                draw.rectangle((x, y, x + 219, y + 189), outline='red', width=3)
            index.append(dict(kind=kind, index=start+n, src=item['src'], date=item['date'], group=item['group']))
        sheet.save(out / f'{kind}-{start//64:02}.jpg', quality=88)
(out / ('index-' + (sys.argv[2] if len(sys.argv) > 2 else 'all') + '.json')).write_text(json.dumps(index, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Review sheets: {out}')
