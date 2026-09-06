const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const root = path.resolve(__dirname, '..');
const context = {window:{}, console}; vm.createContext(context);
const scripts=['data/baby-data.js','data/canonical-events.js','data/media-manifest.js','data/story-observations.js','js/story-enrichment-v2.js','js/story-bridges.js','js/media-ux-prep.js'];
for(const file of scripts) vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const data=context.window.BABY_DISCOVERY_DATA, manifest=context.window.BABY_MEDIA_MANIFEST, review=context.window.BABY_STORY_OBSERVATIONS;
assert.equal(data.profile.birthDate,'2021-04-04');
assert.equal(manifest.items.length,3554);
const transfers=JSON.parse(fs.readFileSync(path.join(root,'data/media-transfers.json'),'utf8')).files;
assert.equal(transfers.length,24);
for(const transfer of transfers) {
 assert(!manifest.items.some(i=>i.src===transfer.from));
 assert(!fs.existsSync(path.join(root,transfer.from)));
 assert(fs.existsSync(path.join(root,transfer.to)));
 assert(transfer.to.endsWith('.webp'));
}
const owners=new Map(), allowed=new Set(review.previewCandidates), entries=new Map(manifest.items.map(i=>[i.src,i]));
function ageMonth(date){const [y,m,d]=date.split('-').map(Number);return (y-2021)*12+m-4-(d<4);}
const ids=new Set();
for(const s of data.scenes){
 assert(!ids.has(s.id),'duplicate scene '+s.id); ids.add(s.id);
 assert((s.media||[]).length<=4,'too many previews');
 for(const item of s.galleryMedia||[]){
  assert(entries.has(item.src),'unknown mapping '+item.src);
  assert(!owners.has(item.src),'duplicate ownership '+item.src); owners.set(item.src,s.id);
  assert.equal(item.ageMonth,ageMonth(item.date));
  if(item.group==='digestion') assert(s.sensitive,'health isolation');
  assert(fs.existsSync(path.join(root,item.src)));
  if(item.type==='video') assert(fs.existsSync(path.join(root,item.poster)));
 }
 for(const item of s.media||[]){
  const src=item.deferredSrc||item.src;
  assert(allowed.has(src),'unreviewed preview '+src);
  assert(!s.sensitive && item.group!=='digestion');
  assert((s.galleryMedia||[]).some(i=>i.src===src));
  if(item.type==='video') assert(!item.src && item.b3DeferredVideo && item.poster);
 }
 for(const src of s.storyEvidence||[]) assert(entries.has(src),'missing evidence');
}
assert.equal(owners.size,3554);
for(const suffix of ['_01.webp','_1.webp','_2.webp']) assert(manifest.items.some(i=>i.src.endsWith(suffix)),suffix);
for(let year=2022;year<=2026;year++){
 const birthday=`${year}-04-04`;
 assert.equal(ageMonth(birthday),(year-2021)*12);
}
assert.equal(data.scenes.find(s=>s.id==='nguu-11m-thoi-noi-2022').date,'2022-04-04');
assert.equal(data.scenes.find(s=>s.id==='nguu-11m-thoi-noi-2022').ageAtEvent,'1 tuổi');
assert.equal(data.scenes.find(s=>s.id==='nguu-03m-photos-2021-07-07').date,'2021-07-07');
assert.equal(data.scenes.find(s=>s.id==='nguu-00m-birth').date,'2021-04-04');
assert.equal(data.scenes.find(s=>s.id==='nguu-health-constipation-2022').date,'2022-04-22');
assert.equal(data.scenes.find(s=>s.id==='thuy-yen-health-digestion-library').galleryMedia.length,69);
for(const dir of ['js','data']) for(const name of fs.readdirSync(path.join(root,dir)).filter(n=>n.endsWith('.js'))) new vm.Script(fs.readFileSync(path.join(root,dir,name),'utf8'),{filename:name});
for(const file of scripts) assert(!fs.readFileSync(path.join(root,file),'utf8').includes('./tempimg/'),file);

const injury=data.scenes.find(s=>s.id==='thuy-yen-cut-hand-2024-10-26');
assert.equal(injury.galleryMedia.length,14); assert(!injury.sensitive); assert.equal(injury.media.length,4);
assert.equal(injury.ageAtEvent,'3 tuổi 6 tháng 22 ngày');
assert.equal(injury.importance,5);
const headInjury=data.scenes.find(s=>s.id==='thuy-yen-head-injury-2024-02-13');
assert.equal(headInjury.date,'2024-02-13');
assert.equal(headInjury.ageAtEvent,'2 tuổi 10 tháng 9 ngày');
assert.equal(headInjury.galleryMedia.length,4);
assert.equal(headInjury.galleryMedia.filter(i=>i.type==='image').length,2);
assert.equal(headInjury.media.length,2);
assert(!headInjury.sensitive && headInjury.mediaContext);
assert.equal(headInjury.importance,5);
const birthScene=data.scenes.find(s=>s.id==='nguu-00m-birth');
assert.equal(birthScene.galleryMedia.length,39);
assert(birthScene.galleryMedia.every(i=>i.date==='2021-04-04'));
for(const id of ['nguu-10m-constipation-story','nguu-10m-bloody-stool-story','nguu-health-constipation-2022']) assert.equal(data.scenes.find(s=>s.id===id).galleryTarget,'thuy-yen-health-digestion-library');

const threeMonth=data.scenes.find(s=>s.id==='nguu-03m-photos-2021-07-07');
assert.equal(threeMonth.galleryMedia.length,2);
assert.equal(threeMonth.media.length,2);
assert(threeMonth.galleryMedia.every(i=>i.date==='2021-07-07' && i.ageText==='3 tháng 3 ngày'));

for(const [id,count] of [['nguu-32m-food',1],['nguu-48m-learning',3],['nguu-61m-tech-language',3]]) {
 const scene=data.scenes.find(s=>s.id===id);
 assert.equal(scene.galleryMedia.length,count);
 assert(scene.mediaContext,'Supporting media must explain its capture period: '+id);
}
for(const scene of data.scenes.filter(s=>s.type==='chapter')) {
 assert.equal(scene.date,`${2021+scene.month/12}-04-04`);
}
console.log(`PASS: ${owners.size} exact owners, ${ids.size} scenes, age boundaries, confirmed events, supporting media, reviewed previews, deferred videos, syntax`);
