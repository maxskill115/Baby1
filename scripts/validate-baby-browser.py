"""Run against a local HTTP server: python validate-baby-browser.py [base-url] [output-dir]."""
import json,re,sys
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
base=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8765/Baby1/'
out=Path(sys.argv[2]) if len(sys.argv)>2 else Path.cwd()/'baby-browser-report'
out.mkdir(parents=True,exist_ok=True)
s=(ROOT/'js/access-gate.js').read_text(encoding='utf-8-sig')
k=int(re.search(r'var _k = (\d+)',s)[1]); nums=json.loads(re.search(r'var _p = (\[[^;]+)',s)[1]); password=''.join(chr(n^k) for n in nums)
reports=[]
with sync_playwright() as p:
 browser=p.chromium.launch()
 for width,height in [(1440,900),(390,844),(320,740)]:
  context=browser.new_context(viewport={'width':width,'height':height})
  page=context.new_page(); errors=[]; bad=[]; videos=[]; images=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.on('response',lambda r:bad.append(r.url) if r.status>=400 and 'favicon' not in r.url else None)
  def request(r):
   if '.mp4' in r.url: videos.append(r.url)
   if '.webp' in r.url: images.append(r.url)
  page.on('request',request)
  page.goto(base)
  page.locator('#babyAccessInput').fill(password);page.locator('#babyAccessSubmit').click()
  page.wait_for_selector('[data-open-gallery]')
  page.wait_for_timeout(500)
  initial=len(images)
  assert initial<50,(width,initial)
  assert not videos,'Video downloaded on entry'
  page.screenshot(path=str(out/f'hero-{width}.png'))
  # Timeline contents: hover on desktop, tap on mobile, navigate and dismiss.
  if width > 900:
   assert page.locator('.age-rail__track').bounding_box()['height'] >= 400
   page.locator('.age-rail__label').hover()
  else:
   page.locator('#mobileAge').click()
  page.wait_for_selector('#journeyContents:visible')
  assert page.locator('.journey-contents__item').count()==page.locator('.scene[data-month]').count()
  assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
  page.screenshot(path=str(out/f'contents-{width}.png'))
  page.locator('[data-target-scene="thuy-yen-head-injury-2024-02-13"]').click()
  assert page.locator('#journeyContents').is_hidden()
  page.wait_for_timeout(100)
  page.wait_for_timeout(1100)
  assert abs(page.locator('[data-scene-id="thuy-yen-head-injury-2024-02-13"]').bounding_box()['y']-70)<10
  if width > 900:
   slider=page.locator('.age-rail__track')
   slider.focus();slider.press('End');page.wait_for_timeout(100)
   assert int(slider.get_attribute('aria-valuenow'))>=64
   slider.press('Home');page.wait_for_timeout(100)
   assert int(slider.get_attribute('aria-valuenow'))==0
   page.locator('.age-rail__label').focus();page.keyboard.press('Enter')
  else:
   page.locator('#mobileAge').click()
  page.wait_for_selector('#journeyContents:visible')
  page.keyboard.press('Escape')
  assert page.locator('#journeyContents').is_hidden()
  scenes=page.locator('[data-scene-id]')
  for n in range(scenes.count()):
   scenes.nth(n).scroll_into_view_if_needed()
   page.wait_for_timeout(45)
   assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),f'Horizontal overflow scene {n} at {width}'
  assert not videos,'Video downloaded during scrolling'
  assert page.locator('[data-scene-id="thuy-yen-head-injury-2024-02-13"] [data-open-media]').count()==2
  page.locator('[data-open-gallery="thuy-yen-head-injury-2024-02-13"]').click()
  assert page.locator('.gallery-thumb').count()==4
  assert page.locator('.gallery-thumb--video').count()==2
  assert not videos
  page.locator('.media-viewer__close').click()
  assert page.locator('[data-scene-id="thuy-yen-health-digestion-library"] [data-open-media]').count()==0
  page.locator('[data-scene-id="nguu-10m-constipation-story"] [data-open-gallery]').click()
  assert page.locator('.gallery-thumb').count()==69
  assert not videos
  page.locator('.media-viewer__close').click()
  assert page.locator('[data-scene-id="thuy-yen-cut-hand-2024-10-26"] [data-open-media]').count()==4
  page.locator('[data-open-gallery="thuy-yen-cut-hand-2024-10-26"]').click()
  assert page.locator('.gallery-thumb').count()==14
  assert page.locator('.gallery-thumb--video').count()==6
  page.locator('.media-viewer__close').click()
  scene='nguu-09m-media-diary-v2' 
  page.locator(f'[data-open-gallery="{scene}"]').click()
  page.wait_for_selector('.gallery-view')
  page.wait_for_timeout(200)
  assert page.locator('.gallery-view img[data-lazy-src]').count()>0,'Full gallery eagerly loaded'
  assert not videos,'Video downloaded opening album'
  assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
  page.screenshot(path=str(out/f'gallery-{width}.png'))
  page.locator('[data-gallery-filter="image"]').click()
  assert page.locator('.gallery-thumb--video:visible').count()==0
  page.locator('.gallery-thumb--image:visible').first.click()
  page.wait_for_function('document.querySelector(".b3-viewer__stage img")?.naturalWidth > 0')
  if page.locator('[data-b3-nav="next"]:enabled').count():
   page.locator('[data-b3-nav="next"]').click()
   assert page.locator('[data-b3-nav="prev"]').is_enabled()
  page.locator('.media-viewer__close').click()
  page.locator(f'[data-open-gallery="{scene}"]').click()
  page.locator('[data-gallery-filter="video"]').click()
  assert page.locator('.gallery-thumb--image:visible').count()==0
  page.locator('.gallery-thumb--video:visible').first.click()
  page.wait_for_selector('#mediaViewer video')
  page.locator('#mediaViewer video').evaluate('(v)=>{v.muted=true; return v.play()}')
  page.wait_for_function('document.querySelector("#mediaViewer video")?.currentTime > 0',timeout=30000)
  assert videos
  page.screenshot(path=str(out/f'video-{width}.png'))
  page.locator('.media-viewer__close').click()
  assert page.locator('#mediaViewer video').count()==0
  assert not errors,errors
  assert not bad,bad
  reports.append(dict(width=width,scenes=scenes.count(),entryImageRequests=initial,videoBeforeClick=0,videoPlayback=True,overflow=False,errors=errors,missing=bad))
  print(json.dumps(reports[-1]),flush=True)
  context.close()
 browser.close()
(out/'browser-report.json').write_text(json.dumps(reports,indent=2),encoding='utf-8')
