# Baby1 — Handoff hiện hành

Cập nhật 06/09/2026. Phạm vi: Baby1 / Tsàn Thuý Yên, bản local. Tài liệu này thay thế checkpoint dùng bộ thử nghiệm 343 ảnh / 199 video. Đã đổi tên thư mục từ `Baby` thành `Baby1`; chưa commit, push hoặc publish.

## Đổi tên Baby → Baby1 · 06/09/2026

- Đã đổi tên thư mục chính và cập nhật launcher, workflow, validator browser, audit và đường dẫn 24 ảnh đã tách sang Baby2.
- Validator dữ liệu PASS: 3.554 ownership duy nhất, 93 scene. Browser PASS ở 1440×900, 390×844 và 320×740; không lỗi JS/404/tràn ngang, video vẫn chỉ tải sau click.
- Bổ sung hồ sơ tên: **Tsàn Thuý Yên — 秦邃嫣** và ý nghĩa tên do gia đình xác nhận; hero đọc dữ liệu profile thay vì hardcode để Baby2 dùng chung khung.
- Không thay đổi media/câu chuyện Yên trong lượt đổi tên. Local only, chưa publish.

## Checkpoint để phiên sau tiếp tục

### Thanh tuổi và mục lục — 06/09/2026

- Ghi chú dọn QA: smoke test tạo thư mục rỗng `../baby-browser-report`. Bộ duyệt tự động chặn lệnh xóa thư mục (`blocked by policy`); để nguyên, không phải dependency runtime và không ảnh hưởng bản triển khai.

- Đã tăng thanh tuổi bên phải từ 252px lên chiều cao theo màn hình (52vh, giới hạn 280–560px), nhãn tuổi 13px và số đầu/cuối 12px. Giữ màu và vị trí phù hợp giao diện cũ.
- Rê chuột vào thanh mở mục lục bên trái theo nhóm tuổi, đủ 93 scene với tuổi và tiêu đề; đánh dấu mốc đang xem. Có thể chọn mốc, đóng bằng nút / Escape / click ngoài. Điện thoại chạm badge tuổi để mở mục lục vừa màn hình.
- Thanh hỗ trợ click/kéo và bàn phím mũi tên, Home/End; có ARIA slider và trạng thái mở/đóng. Khi chọn mục lục giữ đúng vị trí trong lúc ảnh lazy-load làm thay đổi chiều cao; thao tác cuộn/chạm của người dùng hủy bước giữ vị trí.
- File sửa: `js/access-gate.js` markup, `js/main.js` tương tác, `css/hero-refresh.css` style. Validator browser thêm mở mục lục, số mục, nhảy đúng mốc, Home/End, Escape ở desktop/mobile.
- Static PASS 3.554 media/93 scene. QA browser PASS 1440×900, 390×844, 320×740: mở/chọn/đóng mục lục, album ảnh/video, không lỗi JS/404/tràn ngang hoặc tải video sớm. Đã xem ảnh mục lục desktop/mobile. Kiểm thử thêm bằng đường dẫn `file:///.../Baby/index.html` như người dùng đang mở: mũi tên qua tháng trống và kéo thanh đều đạt. Không thay đổi media hay câu chuyện; không còn việc thực thi đang dở, chưa publish.

### Phản hồi mới nhất — hiện ảnh ngay trên hai mốc tai nạn

- Người dùng yêu cầu hiển thị ảnh trực tiếp, không chỉ nút album. Quy tắc này thay thế thiết lập “hai tai nạn không preview” ở checkpoint trước.
- Đã bật 2 ảnh trên mốc bể đầu và 4 ảnh trên mốc đứt tay; mỗi mốc vẫn có nút album đầy đủ (4 và 14 media). Chỉ mở quyền preview cho đúng 6 ảnh được chọn, không đưa nhóm tiêu hóa vào preview. Video vẫn chỉ tải khi mở.
- Đã build lại observations và báo cáo cột mốc, static PASS 3.554 ownership/93 scene. QA browser PASS desktop 1440 và mobile 390/320: đúng 2/4 ảnh preview, album đầy đủ, không lỗi JS/404/tràn ngang; video không tải trước click. Đã chụp cả hai mốc ở desktop/mobile và xem ảnh kết quả. Không thay đổi file nguồn hoặc số lượng media; không cần chạy lại checksum vì chỉ sửa mapping preview. Không còn việc đang chạy dở ở checkpoint này.

### Cập nhật mới nhất — tách Baby 2 và hai tai nạn, 06/09/2026

- Đã chuyển 24 ảnh người dùng xác nhận sang `../Baby2/assets/baby2/images/YYYY/MM/`, chỉ ảnh, không video. Gồm 22 ảnh 31/01/2023 (có biến thể `_1_1` cùng nhóm đã xem) và 2 ảnh 01/02/2023 không hậu tố / `_1`. SHA-256 trước/sau khớp. Audit `data/media-transfers.json`; index review giữ nguyên số cũ, compiler bỏ đúng các nguồn đã chuyển.
- Tổng hiện tại của Yên: **2.650 ảnh + 904 video = 3.554 media**, 904 poster; tiêu hóa vẫn 67 ảnh + 2 video. Baby 2 giữ 24 ảnh; tổng tài sản nhập ban đầu vẫn 3.578 file.
- Sự kiện bể đầu `thuy-yen-head-injury-2024-02-13`: ngày 13/02/2024, tuổi 2 tuổi 10 tháng 9 ngày; 2 ảnh `2024-02-12.webp`, `_1.webp` và 2 video 13/02/2024. Đã xem ảnh riêng và nhiều frame video; ảnh lân cận chụp đi chơi không ghép. Ngày ảnh lệch một ngày được ghi rõ bằng mediaContext, chưa đổi tên/ngày file. Nguyên nhân trượt chân, té bật ngửa vào bậc thềm nhà vệ sinh và đi khâu là thông tin gia đình xác nhận.
- Sự kiện đứt tay 26/10/2024 giữ 8 ảnh + 6 video, bổ sung nguyên nhân té ghế, bám cạnh bàn sắt theo người dùng. Cả hai tai nạn importance=5, album riêng không preview vết thương.
- Runtime hiện **93 scene**; validator/CI cập nhật phân chia Yên/Baby 2. Các số 2.674/3.578/92 ở phần checkpoint trước bên dưới là lịch sử, không phải số hiện tại.
- Đã kiểm thử: static PASS 3.554 ownership duy nhất, không còn file Baby 2 trong manifest/preview của Yên; album bể đầu 2 ảnh/2 video, đứt tay 8 ảnh/6 video. Browser PASS toàn bộ 93 scene ở 1440×900, 390×844, 320×740; không JS error/404/tràn ngang, không request MP4 trước click, phát video được. Đã xem thêm ảnh chụp mốc bể đầu trên mobile.
- Kiểm tra toàn bộ đã PASS: SHA-256 của đủ 3.578 file nguồn ở cả hai kho; giải mã mọi ảnh và poster; inventory Yên đúng 2.650 ảnh/904 video, Baby 2 đúng 24 ảnh. Không mất hoặc nhân bản file khi chuyển.
- Đang làm: không còn hạng mục chạy dở ở checkpoint này; yêu cầu tách ảnh và cập nhật hai tai nạn đã hoàn tất local. Chưa commit/publish; Baby 2 chỉ tổ chức asset, chưa triển khai trang.
- Chưa làm / cần đối chiếu sau: ngày file của hai ảnh vết thương đầu 12/02 lệch ngày sự kiện 13/02. Đã mapping theo nội dung và ghi chú, không tự đổi tên. Các ảnh sơ sinh mà phiên trước nghi vấn nay đã tách sang Baby 2 theo xác nhận người dùng.

### Checkpoint trước khi tách Baby 2 (lịch sử)

- **Trạng thái hiện tại:** hoàn tất triển khai bộ thật, các phản hồi sửa ngày/mapping và lượt rà toàn bộ 92 scene. Bản local đã qua kiểm tra dữ liệu và browser. Không có bước triển khai đang chạy dở cần chờ.
- **Đã làm:** chuyển 3.578 media, tạo 904 poster, review toàn bộ contact sheet, viết chuyện theo tháng; sửa thôi nôi, chào đời, ảnh 3 tháng; nối album tiêu hóa và đứt tay; bổ sung media minh họa cho 3 mốc kỹ năng/sinh hoạt. Chi tiết từng cột mốc ở [MILESTONE_REVIEW.md](MILESTONE_REVIEW.md).
- **Đang làm:** không còn hạng mục thực thi dở tại checkpoint này. Yêu cầu tiếp tục cập nhật handoff của người dùng đã được áp dụng vào quy tắc bên dưới.
- **Chưa làm / thiếu căn cứ:** chưa xem hết thời lượng 904 video; chưa tìm được media chứng minh biết lật, tự ngủ, đi vững, cai ti giả, tự mặc đồ, tiết kiệm, toán có nhớ/tìm x, bảng cửu chương hoặc xe đạp hai bánh. Nội dung mốc gia đình xác nhận vẫn giữ. Một số ảnh sơ sinh đầu 2023 chưa rõ ngày/danh tính; không tự sửa.
- **Hướng tiếp theo khi có yêu cầu hoặc dữ liệu mới:** ưu tiên xem kỹ video ứng viên cho các kỹ năng còn thiếu; chỉ nối khi hoạt động phù hợp. Xác minh nhóm sơ sinh còn nghi vấn trước khi đổi ngày. Thêm batch mới theo kiểm kê và review thực tế. Publish, Baby 2 và Family là phạm vi tương lai, chưa được thực hiện.
- **Điểm bắt đầu phiên sau:** đọc file này và báo cáo cột mốc; kiểm tra thay đổi local trước khi sửa. Không mặc định server hoặc process ID từ phiên cũ còn sống; khởi động lại server bằng lệnh bên dưới nếu cần.
- **Quy tắc cập nhật liên tục:** sau mỗi nhóm thay đổi và trước khi kết thúc phiên, cập nhật ngày, đã làm, đang làm, chưa làm, bước kế tiếp, kết quả kiểm thử và blocker thực tế. Khi bị gián đoạn ghi chính xác file đang sửa/lệnh đang chạy; khi hoàn tất bỏ trạng thái chờ cũ. Không ghi kế hoạch tương lai thành việc đã hoàn thành.

## Trạng thái và danh tính

- Hành trình cuộn liên tục, giữ nguyên hero, gate, bố cục và phong cách hiện tại.
- Profile `thuy-yen`; technical ID `nguu` để tương thích; tên Thúy Yên, tên Hán **秦邃嫣**.
- Sinh **04/04/2021 lúc 16:00**. Âm lịch đang hiển thị 23/02/2021, năm Tân Sửu, là dữ kiện UI đã chốt; không suy ra từ ngày thôi nôi.
- `Bé Ngưu` chỉ là nhãn cũ, không hiển thị như tên gọi ở nhà. Tuổi hiện tại tính động, tuổi media tính theo ngày file và mốc sinh bằng UTC.
- Gate giữ badge TY, DISCOVERY, Hành Trình Lớn Khôn, nút Open. Đây vẫn là gate client như trước, không phải cơ chế phân quyền máy chủ.
- Repo `maxskill115/Discovery`, nhánh main. Đã đối chiếu HEAD với origin/main trước khi thực hiện; lượt này chỉ sửa local theo yêu cầu.

## Bộ media chính thức

Nguồn người dùng giao: `Baby/Yên`. Đã chuyển nguyên nội dung và tên file vào:

```text
Baby/assets/thuy-yen/
  images/YYYY/MM/<tên-nguyên-gốc>.webp
  videos/YYYY/MM/<tên-nguyên-gốc>.mp4
  posters/YYYY/MM/<tên-video-nguyên-gốc>.webp
  health/digestion/
    images/YYYY/MM/<tên-nguyên-gốc>.webp
    videos/YYYY/MM/<tên-nguyên-gốc>.mp4
    posters/YYYY/MM/<tên-video-nguyên-gốc>.webp
  ui/journey-background.webp
```

| Nhóm | Ảnh | Video | Poster |
|---|---:|---:|---:|
| Hành trình | 2.607 | 902 | 902 |
| Theo dõi tiêu hóa riêng | 67 | 2 | 2 |
| Tổng bộ thật | **2.674** | **904** | **904** |

- 3.578 file nguồn, tổng 9.283.503.136 byte. Ngày từ 04/04/2021 tới 18/08/2026, có media ở 56 tháng lịch.
- Mỗi đường dẫn nguồn được giữ đúng một lần trong gallery của một scene; preview chỉ là tham chiếu tới các file ấy.
- Có một cặp **file khác tên nhưng giống SHA-256**: `images/2024/04/2024-04-21_2.webp` và `2024-04-21_52_1.webp`. Cả hai giữ nguyên theo bộ giao; 3.577 nội dung hash khác nhau. Không xóa một file hay đổi hậu tố để che trùng.
- Tất cả ngày hợp lệ, không xung đột đường dẫn không phân biệt hoa/thường; giữ nguyên `_01`, `_1`, `_2`, phần tên Unicode và mọi hậu tố khác.
- Đối chiếu SHA-256 video cũ với video mới: **0 poster cũ đủ điều kiện tái sử dụng**. Đã tạo đủ 904 WebP bằng FFmpeg, kiểm tra giải mã từng poster.
- File video rất ngắn `2024-06-23_1.mp4` cần lấy frame ở 0 giây thay cho 0,15 giây; generator có fallback này.
- `ui/journey-background.webp` là bản giữ lại của asset giao diện cũ, dùng cho nền gate/hành trình và card Baby ở root. Không tính vào 2.674 ảnh album.

## Dọn nguồn và bộ thử nghiệm

Sau khi đối chiếu đủ số lượng, size, checksum và cập nhật đường dẫn:

- `Baby/Yên` và `Baby/tempimg` không còn trong dự án.
- Bộ kiểm duyệt tự động chặn lệnh xóa với thông báo `blocked by policy`. Đã dùng phương án có thể khôi phục: chuyển ra ngoài repository tại `F:/0.Tools/fingermath/Discovery-media-archive/baby-tempimg-20260905` và `baby-Yên-20260905` (thư mục nhập đã rỗng).
- Không có runtime hoặc workflow nào đọc kho lưu tạm này. Đây không phải nguồn chính thức mới.
- Kiểm tra lại 06/09/2026 theo câu hỏi người dùng: `Discovery-media-archive` chỉ có `baby-tempimg-20260905` và `baby-Yên-20260905`; không có tham chiếu từ JS/data/scripts/workflow đang dùng. Đã thông báo người dùng có thể tự xóa toàn bộ thư mục archive nếu không cần giữ bản thử nghiệm; agent chưa xóa. Bộ thật vẫn nằm trong `Baby/assets/thuy-yen/`.
- Script import giữ tên `Yên` chỉ để audit/rerun chuyển nguồn; tùy chọn `--reuse-legacy` của poster builder chỉ phục vụ kiểm chứng lịch sử, không phải dependency runtime.

## Câu chuyện và chứng cứ

Đã xem **42 contact sheet chứa toàn bộ 2.674 ảnh**, **15 sheet chứa khung hình đại diện của toàn bộ 904 video**. Không khẳng định đã xem hết thời lượng mọi video. Có 60 ghi chép nội dung ảnh/video, được biên tập thành chuyện theo tháng tuổi; tháng ít căn cứ dùng lời kể ngày và tuổi trung tính.

- `data/visual-review-notes.json`: nội dung quan sát và số tham chiếu khi review.
- `data/visual-review-index.json`: ánh xạ cố định số tham chiếu → đường dẫn thật. Generator dùng thứ tự index cố định và kiểm tra tập đường dẫn; đổi ngày không được đánh lại số review.
- `data/story-observations.js`: chứng cứ bằng đường dẫn chính xác, lời kể, mapping sự kiện, danh sách preview đã xem.
- 325 ứng viên preview; mỗi scene tối đa 4. Không có fallback chọn ảnh bất kỳ trong kho.
- 6 mapping sự kiện bằng ảnh đã xem: chào đời 04/04/2021; 3 tháng tuổi 07/07/2021; bên bánh và chụp chung 25/03/2022; hồ nước/xe trưng bày 15/06/2022; phao hồng 29/06/2024; đứt tay 26/10/2024 (8 ảnh, 6 video, album riêng không preview).
- Ngày có nhiều hoạt động chỉ nối các file đã đối chiếu nội dung vào sự kiện, phần còn lại ở nhật ký tháng. Cùng ngày không chứng minh cùng sự kiện.
- Người dùng sửa ngày lễ thôi nôi thành **04/04/2022**, lúc bé **tròn 1 tuổi**. Technical ID cũ giữ để tương thích; tháng hiển thị đã đổi thành 12. Nhóm ảnh bên bánh 25/03/2022 vẫn giữ ngày riêng, không tự đổi toàn bộ media cùng ngày khi chưa có xác nhận.
- Giữ các mốc đã xác nhận. Mốc 3 tháng 07/07/2021 đã có 2 ảnh thật đối chiếu khớp; nhật ký táo bón 22/04/2022 mở album tiêu hóa chung bằng galleryTarget. Không tạo lại ảnh thử để lấp chỗ trống.
- Các sự kiện kỹ năng/sinh nhật đã có trong `baby-data.js` giữ nội dung; media placeholder cũ được xóa ở bước canonical trước khi engine chạy.
- Nhật ký tiêu hóa mới: scene `thuy-yen-health-digestion-library`, đủ 69 file theo nhóm người dùng xác nhận, **không có preview**. Các ký ức táo bón/ra máu cũ giữ riêng, không gắn ảnh chỉ vì cùng nhóm.
- Một số ảnh cận cảnh sức khỏe nằm ngoài nhánh tiêu hóa do cách phân nhóm nguồn; giữ đúng nhóm nguồn, không chọn preview. Nhóm sơ sinh 05/06/2022 đã được người dùng xác nhận là ngày chào đời: chuyển 8 ảnh và 7 video về 04/04/2021. Một ảnh và một video khác trong ngày 05/06/2022 giữ nguyên vì không cùng nhóm sơ sinh. Các ảnh sơ sinh khác đầu 2023 vẫn chưa rõ ngày/danh tính.
- Không bịa “lần đầu”, người thân cụ thể, địa điểm, cảm xúc hoặc chẩn đoán từ ảnh. Các lời kể y tế cũ là ký ức gia đình đã xác nhận, không phải chẩn đoán mới.

## Runtime

Thứ tự tải từ `js/access-gate.js`:

```text
baby-data.js → canonical-events.js → media-manifest.js → story-observations.js
→ story-enrichment-v2.js → story-bridges.js → media-ux-prep.js → main.js
→ product-copy-polish.js → media-ux.js → gallery-enhancer.js
```

- Manifest lấy từ danh sách file thật, gồm id, src, originalFilename, date, type, group, poster; không tạo tên từ số lượng/suffix.
- Engine chia theo tháng tuổi bắt đầu ngày 04 mỗi tháng. Mỗi ghi chép chỉ chọn một tháng tuổi chính để không lặp đoạn chuyện qua ranh giới tháng.
- Hiện 92 scene gồm các mốc cũ, nhật ký tháng và dịp nổi bật. Sau khi chuyển media vào mốc phù hợp, một nhật ký tháng không còn file riêng được bỏ; không mất media.
- Ảnh preview dùng lazy loading; gallery chỉ hydrate ảnh gần vùng nhìn bằng IntersectionObserver. Không tải cả album lúc vào trang.
- Video chỉ có poster trước khi mở; đã bỏ toàn bộ chức năng trích frame bằng canvas/video trong browser. Mở video mới gắn src, đóng viewer gỡ video.
- Gallery đủ file, lọc ảnh/video, chuyển trước/sau trong cùng ngày, metadata ngày và tuổi.
- Đã bỏ map và script thử nghiệm `tempimg-map`, `tempvideo-map`, `preview-curator`, `month-narrative`, `video-poster-map`, `story-enrichment.js` cũ cùng CI đổi tên/build map cũ.

## Công cụ, CI và kiểm thử

```text
python Baby/scripts/build-media-manifest.py --posters
python Baby/scripts/build-story-observations.py
node Baby/scripts/validate-baby-static.js
node Baby/scripts/audit-milestones.js
python Baby/scripts/validate-real-media.py
python -m http.server 8765 --bind 127.0.0.1
python Baby/scripts/validate-baby-browser.py http://127.0.0.1:8765/Baby/ <thư-mục-báo-cáo>
```

Python 3.12 + Pillow cho kiểm tra ảnh, FFmpeg để tạo poster; Playwright Chromium để QA browser. `import-real-media.py` là audit/chuyển nguồn một lần, không phải script thêm batch mới tùy ý.

Đã kiểm tra local:

- 3.578 file đối chiếu size/SHA-256 trước/sau chuyển; giải mã toàn bộ 2.674 ảnh và 904 poster; không thiếu/thừa asset ngoài UI.
- Runtime đủ 3.578 ownership duy nhất, nhóm tiêu hóa 67/2, mọi video có poster, đường dẫn/hậu tố chính xác.
- Ngày sinh, tuổi trước/sau sinh nhật, mốc thôi nôi/3 tháng/nhật ký tiêu hóa, cú pháp JS, giới hạn preview và việc video chưa có src.
- Desktop 1440×900, mobile 390×844 và 320×740: cuộn qua mọi scene/năm, mở album, lọc ảnh/video, chuyển media, phát video, đóng player, không lỗi JS/404 hoặc tràn ngang.
- Lượt browser mới nhất: khi vào trang có 8–10 request WebP và 0 request MP4; cuộn toàn hành trình và mở album chưa tải video. Video phát sau click.

`validate-baby-timeline.yml` dùng cấu trúc assets mới, kiểm tra manifest tái tạo, ownership, toàn bộ checksum/decoder và QA Chromium desktop/mobile. `generate-baby-video-posters.yml` chạy thủ công, xuất artifact để review, không tự commit/publish. Không còn workflow ghi đè map cũ.

Ảnh QA và báo cáo local nằm ngoài repository: `C:/Users/ADMIN/.codex/visualizations/2026/09/05/01a0712f-9225-77b3-975d-b28609acfd25/baby-review/`.

## Khi tiếp tục

Đọc handoff này trước. Bộ Yên là nguồn chính thức. Thêm batch bằng kiểm kê file thật, kiểm tra ngày/hash/collision, review ảnh/video và bổ sung chứng cứ chính xác; không tự tăng số đếm hay đổi index review cũ. Giữ hero hiện tại. Không tự publish hoặc mở rộng Baby 2 / Family khi chưa được yêu cầu.

## Rà toàn bộ cột mốc — checkpoint 06/09/2026

- Đã rà đủ 92 scene; báo cáo sinh bằng `node Baby/scripts/audit-milestones.js` tại `MILESTONE_REVIEW.md` ghi số media, preview và nhận xét từng mốc.
- Bổ sung 3 mốc từ file đã review: `nguu-32m-food` có 1 video bên chiếc cốc ngày 08/12/2023; `nguu-48m-learning` có 3 ảnh que tính/thẻ số và tập viết tháng 7/2025; `nguu-61m-tech-language` có 3 video máy tính/bàn phím tháng 4 và 6/2026. Các file chuyển quyền sở hữu từ nhật ký tháng, không nhân bản. Chú thích `mediaContext` nói rõ thời gian chụp, không coi ngày chụp là ngày đạt kỹ năng.
- `visual-review-notes.json` thêm `milestones`; compiler xuất mapping/chứng cứ vào `story-observations.js`; engine xử lý mapping này cùng các sự kiện. Giữ tháng tuổi và lời kể mốc gốc.
- 5 chapter sinh nhật có ngày 04/04 đúng năm; 13 bản ghi chiều cao/cân nặng hiển thị ngày đo thật trong renderer. Hero và giao diện tổng thể giữ nguyên.
- Kiểm thử dữ liệu mới nhất PASS: 3.578 quyền sở hữu duy nhất, 92 scene, mốc ngày/tuổi, mapping hỗ trợ có chú thích, preview đã review, video trì hoãn tải và cú pháp JS.
- Báo cáo browser đã hoàn tất với 92 scene ở 1440×900, 390×844, 320×740: không JS error/404/tràn ngang, video phát được sau click, album tiêu hóa và đứt tay đủ file. Báo cáo lưu `baby-review/browser-report.json` trong thư mục QA nêu trên. Process của phiên trước không còn truy vấn được, nhưng báo cáo cuối đủ cả 3 viewport đã được đọc xác nhận.
- Lượt rà này không đổi file media nguồn nên không chạy lại hash/giải mã toàn bộ 9 GB; kiểm tra toàn bộ hash/decoder ở lượt chuyển và sửa ngày trước đó đã đạt. Chỉnh chú thích cuối cùng chỉ đổi “bảng số” thành “thẻ số và que tính” đúng ảnh thực tế; đã build lại dữ liệu và chạy static validator.

## Sửa theo phản hồi sau kiểm thử

- Ngày lễ thôi nôi: 04/04/2022, không còn 25/03/2022 trong mốc lễ.
- Ba mốc táo bón/ra máu/nhật ký cũ có `galleryTarget` trỏ tới album tiêu hóa 69 media. Nút mở album xuất hiện ngay trên từng mốc, không nhân đôi ownership và không đưa ảnh nhạy cảm lên preview.
- Sự kiện `thuy-yen-cut-hand-2024-10-26`: 8 ảnh đối chiếu nội dung chăm sóc bàn tay + 6 video có hậu tố ĐứtTay, tuổi 3 tuổi 6 tháng 22 ngày; toàn bộ chỉ nằm trong album sự kiện.
- Chào đời có 32 ảnh và 7 video. 15 file sửa ngày đều kiểm tra SHA-256 trước/sau; poster được chuyển theo video. Khi trùng tên ảnh đã tồn tại, giữ hậu tố cũ rồi thêm `_chao-doi`, không ghi đè file.
- `data/media-date-corrections.json` ghi đường dẫn trước/sau. Audit giữ nguyên nguồn giao trong trường `source`, thêm `previousPath`, cập nhật `path` và `date`; checksum không đổi. Review index thay đường dẫn đúng vị trí cũ.

## Rà ảnh mốc 3 tháng tuổi

Đã tìm đúng hai ảnh cũ được xác nhận ngày 07/07/2021 trong bộ WebP chính thức: `2022-03-07_1.webp` và `2022-03-07_1_1.webp`. Đối chiếu trực quan từng ảnh với bản tham chiếu cũ, sau bước tìm tương đồng toàn kho. Chỉ dùng file WebP bộ thật, không nhập lại JPG thử nghiệm.

Đã đổi sang `images/2021/07/2021-07-07_1.webp` và `2021-07-07_1_1.webp`, checksum nội dung không đổi; audit/index/manifest cập nhật cùng nhau. Hai file thuộc duy nhất scene `nguu-03m-photos-2021-07-07`, đều lên preview, tuổi 3 tháng 3 ngày. Không gắn vào mốc Biết lật vì nội dung chỉ ghi cảnh được bế. Tổng số file vẫn 2.674 ảnh / 904 video.

### Auto-sync media (watcher) — yêu cầu "copy/xóa ảnh tự hiển thị"
- Trước đây KHÔNG tự: trang đọc `data/media-manifest.js` tĩnh, copy/xóa file phải chạy lại script build manifest.
- **Đã làm auto:** `Baby2/scripts/watch-media.py` + `Baby1/scripts/watch-media.py` — poll 4 giây, khi thấy copy/thêm/sửa/xóa trong thư mục display sẽ tự tạo poster cho video mới rồi tự rebuild manifest. Người dùng chỉ cần **refresh trình duyệt** để thấy.
- Khởi động cả 2 watcher bằng 1 cú double-click: `start-media-watch.bat` ở gốc repo (mở 2 cửa sổ cmd thu nhỏ).
- Quy tắc bắt buộc cho người dùng: **tên file phải bắt đầu bằng ngày `YYYY-MM-DD...`**; file sai tên bị bỏ qua (builder + watcher đều báo, không crash — đã vá cả 2 builder từ `fromisoformat` crash thành skip + cảnh báo).
- Xóa file an toàn: `story-enrichment-v2.js` của cả Baby1 và Baby2 đã được vá bỏ `throw` khi media đã review bị xóa (chuyển thành `console.warn` + `.filter(Boolean)`), trang không còn trắng nếu file bị xóa nhầm.
- Đã kiểm thử end-to-end: copy ảnh thử vào Baby2 → manifest 1603→1604 tự động; xóa → về 1603 tự động. Watcher cần đang chạy mới auto; tắt máy/đóng cửa sổ watcher thì phải chạy lại .bat.
- Lưu ý Baby1: file bị xóa mà nằm trong story evidence (đã review) sẽ bị bỏ qua có cảnh báo, nhưng `validate-baby-static.js` sẽ báo thiếu evidence — nên tránh xóa file đã nối chuyện; thêm ảnh mới thì tự vào nhật ký tháng tương ứng ngày.
- Deploy lên GitHub vẫn phải commit/push như cũ; watcher chỉ auto ở bản local.

### Hiển thị tên file khi mở media (cả Baby1 + Baby2)
- Mở ảnh/video trong viewer giờ có pill đáy-trái panel: **tên file gốc · dd/mm/yyyy · Ảnh/Video** (VD `2022-08-25_1_sieuam.mp4 · 25/08/2022 · Video`).
- File mới `js/media-filename.js` (giống nhau ở cả 2 bé), nạp cuối chuỗi load trong `js/access-gate.js`; MutationObserver trên `#mediaViewerContent` nên bắt được mọi đường mở (album, card, prev/next).
- Tên lấy trực tiếp từ file đang hiển thị → **tự đồng bộ khi thêm/xóa qua watcher**, không cần làm gì thêm.
- Đã test Playwright cả 2 bé: caption đúng cho ảnh và video, 0 JS error. Screenshot `review/filename-tag2.png`, `review/filename-tag-video.png`.

- Sửa lặp thời gian (phản hồi người dùng): tên file đã chứa ngày nên pill không còn thêm `dd/mm/yyyy`; ngày riêng chỉ hiện khi tên file KHÔNG bắt đầu bằng `YYYY-MM-DD`. Caption chuẩn: `2022-08-15_1.webp · Ảnh`. Đã test lại cả 2 bé.

- Click-to-copy (phản hồi người dùng): bấm vào pill tên file → copy tên file gốc vào clipboard, pill đổi nền xanh + hiện "Đã copy: <tên> ✓" 1,2 giây rồi trả về như cũ. Dùng `navigator.clipboard` có fallback `execCommand` cho môi trường file://. Đã test clipboard thật trên Chromium: clipboard nhận đúng `2022-08-15_1.webp`.

## Nâng cấp chuyện theo tiêu chuẩn mới — 26 chương Yên (DONE 06/09/2026)
- Review toàn bộ 98 contact sheets (2.583 ảnh + 902 poster) qua **6 agent (2 wave)**, báo cáo chi tiết từng cụm khoảnh khắc trong `review/contact-sheets/`.
- `scripts/build-story-chapters.py` (mới) là **augmentation script**: đọc `data/story-observations.js` hiện có, thêm 26 chương mới (idempotent — bỏ qua sceneId đã tồn tại), **tự lọc media đã claim** bởi 10 events/milestones cũ (tránh "Duplicate event ownership"), tự verify đường dẫn, thêm ảnh chương phi-sensitive vào `previewCandidates` (540 tổng), sensitive (trán bầm 23-24/10/2023) chỉ vào `excludePreview`.
- **Quan trọng về pipeline:** `story-observations.js` vẫn được sinh từ `visual-review-notes.json` bởi `build-story-observations.py` — nếu chạy lại compiler đó, PHẢI chạy lại `build-story-chapters.py` ngay sau để phục hồi 26 chương.
- 26 chương: nụ cười đầu tiên (05/2021) → hoa son (01/2022) → Tết đầu tiên SUV vàng (02/2022) → sân thượng cành lan → kỷ niệm 1 tuổi rừng hoa (04/2022) → chiến sĩ chữa cháy (16/05) → xe mô tô ba (22/05) → xe đạp hồng (25/05) → bóng bay trắng (04/06) → vác can nước (16/06) → khăn sừng hươu (08/07) → cầm đũa (04/08) → về quê xem cá (26/08) → nét vẽ đầu tiên (06/09) → selfie bố con (22/11/2022) → xe máy điện mũ Mickey (02/2023) → tiệc 2 tuổi vương miện (15/03/2023) → nàng thơ kính lệch + hươu vàng (04-05/2023) → răng sữa (08/2023) → trán bầm lần đầu (10/2023, SENSITIVE) → ông nội và Yên (11/2023) → Noel sớm TTTM (15/12/2023) → súng nước (18/12/2023) → khách hàng tí hon (01/2024) → ngai vàng + váy Elsa (05-06/2024) → sinh nhật 5 tuổi (04/2026).
- Sự kiện cũ giữ nguyên không đụng: chào đời, 3 tháng, thôi nôi (cake 25/03/2022), outing 15/06/2022, phao hồng 29/06/2024, đứt tay 26/10/2024, head-injury 13/02/2024, 3 milestone kỹ năng.
- Smoke 1440: **235 scene** render (tăng từ 93+), 26 chương đều có preview (95 ảnh), 0 JS error/404. Screenshot `review/chapter-cuu-hoa.png`.
- Lưu ý: vài tên file agent báo cáo sai đã được script/disk kiểm tra bắt và sửa; ALWAYS giữ bước verify trong script.
