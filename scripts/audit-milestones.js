const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..'), ctx={window:{},console};vm.createContext(ctx);
for(const f of ['data/baby-data.js','data/canonical-events.js','data/media-manifest.js','data/story-observations.js','js/story-enrichment-v2.js','js/story-bridges.js']) vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const notes={
'nguu-03m-flip':'Chưa có ảnh/video chứng minh động tác lật; hai ảnh 3 tháng là cảnh được bế.',
'nguu-08m-sleep':'Không có media tháng 12/2021; ảnh ngủ không chứng minh bé tự ngủ không cần dỗ.',
'nguu-12m-first-steps':'Các frame quanh 04/04/2022 có cảnh ngồi/chơi, chưa đủ xác định đi vững hoặc thay đổi sinh hoạt.',
'nguu-24m-pacifier':'Chưa có media xác nhận việc cai ti; không suy ra từ một ảnh không có ti giả.',
'nguu-36m-dress':'Chưa có media rõ hành động tự mặc/cởi; không ghép ảnh chỉ vì mặc váy.',
'nguu-40m-money':'Chưa có media chứng minh thưởng tiền hoặc tiết kiệm.',
'nguu-52m-advanced-math':'Video 27/08/2025 có bảng số, chưa chứng minh cộng trừ có nhớ/tìm x; giữ ở nhật ký tháng.',
'nguu-58m-times-table':'Chưa có căn cứ đọc được/nghe được bảng cửu chương 1–9; không dùng ảnh đàn phím thay thế.',
'nguu-61m-bike':'Chưa thấy media xe đạp hai bánh đúng giai đoạn; không lấy xe đồ chơi lúc nhỏ.',
'nguu-62m-growth':'Giữ số đo và ký ức đã xác nhận; chưa ghép ảnh vào hành động tự tắm gội.',
'nguu-11m-thoi-noi-2022':'Ngày 04/04/2022 đã sửa theo người dùng; không tự dùng ảnh bên bánh 25/03 làm chứng cứ nghi lễ.'
};
const scenes=ctx.window.BABY_DISCOVERY_DATA.scenes.slice().sort((a,b)=>a.month-b.month||(a.order||0)-(b.order||0));
const rows=scenes.map(s=>`| ${s.month} | ${s.title} | ${s.date||'Theo tháng tuổi'} | ${(s.galleryMedia||[]).length} | ${(s.media||[]).length} | ${notes[s.id]||s.mediaContext||(s.galleryTarget?'Có nút mở album tiêu hóa, không nhân bản file.':s.sensitive?'Album riêng; không preview.':s.type==='chapter'?'Ngày sinh nhật chính xác 04/04.':s.healthMonth!=null||s.healthMonths?'Hiển thị ngày đo thật.':s.storyEvidence?.length?'Có căn cứ media đã xem.':'Giữ nội dung mốc đã xác nhận / lời kể ngày và tuổi.')} |`);
fs.writeFileSync(path.join(root,'MILESTONE_REVIEW.md'),'# Rà soát cột mốc · 06/09/2026\n\nĐã rà '+scenes.length+' scene hiện hành. Giữ nội dung mốc gia đình xác nhận; chỉ bổ sung media dựa trên hoạt động quan sát được. Mốc kỹ năng không có ngày chính xác vẫn theo tháng tuổi; media minh họa có chú thích thời gian riêng, không đổi ngày đạt kỹ năng.\n\nNâng cấp: 3 mốc có thêm 3 ảnh và 4 video; 5 sinh nhật có ngày chuẩn; 13 bản ghi đo có ngày hiển thị. Cập nhật sau đó: chuyển 24 ảnh sang Baby 2; bổ sung mốc bể đầu (2 ảnh, 2 video) và nguyên nhân tai nạn đứt tay (8 ảnh, 6 video). Theo phản hồi mới: mốc bể đầu hiển thị 2 ảnh, đứt tay hiển thị 4 ảnh; vẫn giữ nút album đầy đủ.\n\n| Tháng tuổi | Mốc | Ngày | Media sở hữu | Preview | Kết quả rà soát |\n|---:|---|---|---:|---:|---|\n'+rows.join('\n')+'\n');
console.log('Reviewed '+scenes.length+' scenes; Baby1/MILESTONE_REVIEW.md');
