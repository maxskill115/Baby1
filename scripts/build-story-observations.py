"""Compile human-reviewed exact-file evidence; does not generate stories from filenames."""
import json
from collections import Counter
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
notes = json.loads((ROOT / 'data/visual-review-notes.json').read_text(encoding='utf-8-sig'))
manifest = json.loads((ROOT / 'data/media-manifest.js').read_text(encoding='utf-8-sig').split(' = ', 1)[1].rstrip(';\n'))
images, videos = [sorted((i for i in manifest['items'] if i['type'] == kind), key=lambda i: (i['date'], i['src'])) for kind in ('image', 'video')]
review_index = {kind:[i['src'] for i in rows] for kind,rows in [('image',images),('video',videos)]}
index_path = ROOT / 'data/visual-review-index.json'
if index_path.exists():
    review_index = json.loads(index_path.read_text(encoding='utf-8-sig'))
    by_path = {i['src']:i for i in manifest['items']}
    transfers = json.loads((ROOT / 'data/media-transfers.json').read_text(encoding='utf-8'))['files']
    transferred = {i['from'] for i in transfers}
    assert set(review_index['image'] + review_index['video']) - transferred == set(by_path), 'Review every new file explicitly'
    assert not transferred.intersection(by_path), 'Transferred media remains in Yen manifest'
    images, videos = [[by_path.get(src) for src in review_index[kind]] for kind in ('image','video')]
def refs(row, key='refs', vkey='vrefs'):
    return list(dict.fromkeys([images[n]['src'] for n in row.get(key, []) if images[n]] + [videos[n]['src'] for n in row.get(vkey, []) if videos[n]]))
months = [dict(title=o['title'], story=o['story'], evidence=refs(o)) for o in notes['obs']]
months = [o for o in months if o['evidence']]
by_src = {i['src']:i for i in manifest['items']}
def age_month(src):
    y,m,d = map(int, by_src[src]['date'].split('-'))
    return (y-2021)*12+m-4-(d<4)
for row in months:
    row['ageMonth'] = Counter(age_month(s) for s in row['evidence']).most_common(1)[0][0]
events = [dict(sceneId=o['sceneId'], date=o['date'], title=o.get('title'), story=o.get('story'), media=refs(o), evidence=refs(o, 'evidenceRefs'), featured=refs(o, 'featuredRefs')) for o in notes['events']]
excluded = refs(dict(refs=notes['unsafe'], vrefs=notes['unsafeV']))
milestones = [dict(sceneId=o['sceneId'], media=refs(o), evidence=refs(o), featured=refs(o), context=o['context']) for o in notes.get('milestones', [])]
for event, note in zip(events, notes['events']):
    event['sensitive'] = note.get('sensitive', False)
    event['importance'] = note.get('importance', 3)
    if note.get('context'): event['context'] = note['context']
candidates = sorted(set(src for o in months for src in o['evidence']) | set(src for e in events for src in e['featured']) | set(videos[n]['src'] for n in notes['safeV']))
candidates = sorted(set(candidates) | {src for m in milestones for src in m['featured']})
review = dict(version=1, reviewed=dict(images=manifest['counts']['images'], videos=manifest['counts']['videos'], originalImages=2674, imageSheets=42, videoSheets=15, method='all-image-contact-sheets + representative-video-frames'), months=months, events=events, excludePreview=excluded, previewCandidates=[s for s in candidates if s not in excluded])
review['milestones'] = milestones
(ROOT / 'data/story-observations.js').write_text('window.BABY_STORY_OBSERVATIONS = ' + json.dumps(review, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
# Freeze the mapping between review numbers and exact source filenames for later audits.
index_path.write_text(json.dumps(review_index, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
print(f'{len(months)} observations; {len(events)} reviewed events; {len(candidates)} preview candidates')
