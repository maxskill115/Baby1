# Baby Asset Mapping — Thúy Yên / `nguu`

Baby dùng một trục thời gian chung theo **tuổi thật tính từ ngày sinh dương lịch 04/04/2021**.

## Nguồn dữ liệu và thứ tự ưu tiên

Ba lớp dữ liệu được giữ **độc lập**:

1. **Ảnh** — `Baby/tempimg`
2. **Video** — `Baby/tempimg/video`
3. **Nhật ký / mốc sự kiện** — `data/baby-data.js` và các sự kiện được xác nhận thêm trong `data/canonical-events.js`

`BabyDevelopment` chỉ là **nguồn tham khảo**, không phải nguồn chuẩn bắt buộc của câu chuyện Baby.

### Quy tắc quan trọng

- Media có ngày được đặt lên timeline bằng cách so ngày media với ngày sinh `2021-04-04`.
- Một mốc nhật ký có thể **không có ảnh/video**.
- Một ảnh/video có thể chỉ là một khoảnh khắc đời thường và **không phải mốc sự kiện**.
- **Trùng ngày không đồng nghĩa với cùng sự kiện.** Không được tự gắn media vào event chỉ vì ngày giống nhau.
- Chỉ khi có xác nhận rõ ràng mới khai báo `mediaFiles` cho event; lúc đó media mới được lấy khỏi album thường và gắn vào event.
- Không suy diễn nội dung ảnh/video từ filename nếu chưa xem hoặc chưa được xác nhận.
- File `IMG_*.webp` không có ngày vẫn để nguyên, không tự đoán tuổi.

## Trạng thái media hiện tại

### Ảnh
- `343` ảnh có ngày hợp lệ đang được map.
- `70` ngày chụp có ảnh đã được khai báo trong `tempimg-map.js`.
- Các file `IMG_*.webp` chưa xác định ngày tiếp tục nằm trong `unassigned` và không tham gia timeline.

### Video
- `192/192` video trong `Baby/tempimg/video` đã được manifest tự động nhận.
- `ignoredFiles = []` tại lần quét hiện tại.
- Video được nối vào cùng timeline bằng ngày trong filename.

Tổng media có ngày hiện tại: **535 file** (`343 ảnh + 192 video`).

## Ngoại lệ đã xác nhận: 25/03/2022

Ngày `25/03/2022` là **ngày gia đình tổ chức lễ thôi nôi cho Thúy Yên**.

- Đây là thông tin người dùng xác nhận trực tiếp.
- Không được gọi đây là ngày sinh âm lịch chính xác.
- Theo ngày sinh dương lịch 04/04/2021, hôm đó bé **11 tháng 21 ngày**.
- `7` video sau đã được xác nhận thuộc sự kiện này và được gắn trực tiếp vào scene `nguu-11m-thoi-noi-2022`:

```text
2022-03-25.mp4
2022-03-25_2.mp4
2022-03-25_3.mp4
2022-03-25_4.mp4
2022-03-25_5.mp4
2022-03-25_6.mp4
2022-03-25_7.mp4
```

Cùng ngày hiện còn **2 ảnh**:

```text
2022-03-25.webp
2022-03-25_2.webp
```

Hai ảnh này **chưa tự động gắn vào lễ thôi nôi** chỉ vì trùng ngày. Chúng vẫn ở nhật ký media thường cho đến khi nội dung được xác nhận.

## Video manifest tự động

Nguồn chuẩn là thư mục:

```text
Baby/tempimg/video/
```

Manifest được sinh vào:

```text
Baby/data/tempvideo-map.js
```

Script:

```text
Baby/scripts/build-tempvideo-map.js
```

Workflow:

```text
.github/workflows/update-baby-video-manifest.yml
```

Mỗi khi có video mới được push vào `Baby/tempimg/video/**`, GitHub Actions sẽ quét lại toàn bộ folder và cập nhật manifest theo ngày. Vì vậy không cần sửa tay danh sách video trong code.

Tên video hợp lệ:

```text
DD-MM-YYYY.mp4
DD-MM-YYYY_2.mp4
DD-MM-YYYY_3.mov
...
```

Renderer hỗ trợ `mp4`, `mov`, `webm`, `m4v`.

## Ảnh có ngày đã map

Ảnh có ngày hiện tập trung ở các tháng tuổi:

```text
00m  · 26/04/2021 → 30/04/2021
01m  · 03/05/2021 → 13/05/2021
09m  · 17/01/2022 → 31/01/2022
10m  · 05/02/2022 → 03/03/2022
11m  · 04/03/2022 → 03/04/2022
12m  · 04/04/2022 → 29/04/2022
13m  · 05/05/2022
```

Các ngoại lệ filename đã xác minh:

```text
2022-03-01_22.webp  = trùng nội dung với 2022-03-01_12.webp → bỏ bản dư
2022-04-28_2.webp    = trùng nội dung với 2022-04-28.webp → bỏ bản dư
23-01-2022_22.webp   = không tồn tại → skip
2022-05-05_4.webp    = đã xóa khỏi repo → không map
```

## Cách kể câu chuyện hiện tại

`story-enrichment-v2.js` thực hiện theo thứ tự:

1. Đọc toàn bộ ảnh có ngày.
2. Đọc toàn bộ video từ manifest tự sinh.
3. Tính tuổi chính xác của bé tại ngày từng media.
4. Xử lý event độc lập; chỉ event có `mediaFiles` mới nhận media.
5. Media chưa được gắn event được gom theo **tháng tuổi** cho hành trình chính.
6. Bên trong gallery, media tiếp tục được chia thành **từng ngày thật**.
7. Mỗi ngày hiển thị:
   - ngày dương lịch;
   - tuổi chính xác của bé ở ngày đó;
   - số ảnh / số video;
   - một đoạn nhật ký ngắn chỉ dựa trên ngày, tuổi và lượng media.
8. Journey chính chỉ hiển thị tối đa 4 media đại diện; gallery giữ toàn bộ.
9. Không suy diễn bé đang làm gì chỉ từ filename hoặc vì trùng ngày với một mốc nhật ký.

Ví dụ:

```text
25/03/2022 · 11 tháng 21 ngày
Ở 11 tháng 21 ngày, chỉ còn 10 ngày nữa là Thúy Yên tròn 1 tuổi.
Ngày này được giữ lại bằng ... ảnh / video.
```

Riêng event đã xác nhận như `Lễ thôi nôi` vẫn có title/description riêng và chỉ nhận media đã khai báo rõ.

Một video ngày `04/04/2022` sẽ nằm đúng tại mốc 12 tháng tuổi, nhưng **không tự động trở thành video “biết đi”** chỉ vì nhật ký cũng có mốc biết đi quanh thời điểm đó.

## Gallery theo ngày

Files:

```text
Baby/js/story-enrichment-v2.js
Baby/js/gallery-enhancer.js
Baby/css/gallery.css
```

Gallery không còn là một lưới media dẹt. Cấu trúc hiện tại:

```text
THÁNG TUỔI
└── Ngày A · tuổi chính xác
    ├── câu chuyện thời gian
    ├── ảnh
    └── video
└── Ngày B · tuổi chính xác
    ├── câu chuyện thời gian
    ├── ảnh
    └── video
```

Điều này giữ được sự đồng bộ **ảnh ↔ video ↔ tuổi thật**, nhưng không ép chúng thành mốc sự kiện.

## Hai ký ức sức khỏe đã xác nhận

Các scene sau vẫn được giữ như mốc chữ độc lập:

```text
nguu-10m-constipation-story
nguu-10m-bloody-stool-story
```

Chưa gán file `IMG_*` hoặc media cụ thể cho hai scene này khi chưa xác định chắc chắn.

## Không làm

- Không lấy `BabyDevelopment` làm chuẩn tuyệt đối.
- Không ép mỗi event phải có media.
- Không ép mỗi media phải trở thành event.
- Không tự nối event-media chỉ vì trùng ngày.
- Không tự đoán nội dung ảnh/video.
- Không đoán tuổi cho file không có ngày.
- Không hardcode từng media vào `index.html`.

## Việc tiếp theo

1. Rà các ngày có cả ảnh + video để chọn preview hợp lý, ưu tiên không lặp cùng một khoảnh khắc.
2. Rà đoạn `24/03/2022 → 04/04/2022` vì đây là chuỗi rất gần lễ thôi nôi và sinh nhật đầu tiên.
3. Khi xác nhận được nội dung media cụ thể, thêm `mediaFiles` vào đúng canonical event thay vì dựa trên ngày.
4. Sau khi Ngưu ổn định, tách profile/data để Bé Dần dùng lại cùng engine mà không hard-code ngày sinh hoặc tên file.
