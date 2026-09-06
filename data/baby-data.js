(function () {
  "use strict";

  window.BABY_DISCOVERY_DATA = {
    version: "1.0.0",
    technicalBabyId: "nguu",
    profile: {
      id: "thuy-yen",
      sourceId: "be-trung",
      sourceAlias: "Bé Ngưu",
      name: "Thúy Yên",
      hanzi: "秦邃嫣",
      birthDate: "2021-04-04",
      birthTime: "16:00",
      birthLunar: "23/02/2021",
      birthLunarLabel: "Âm lịch · năm Tân Sửu",
      nameMeaning: "Thuý gắn với trí tuệ và nghị lực: học sâu hiểu rộng, tinh thông, thâm sâu, sâu sắc. Yên gắn với đạo đức, vẻ đẹp và nét yên nhiên luôn tươi cười. Ý nghĩa gia đình: người con gái thông minh, xinh đẹp, học sâu hiểu rộng và luôn vui vẻ, tươi cười.",
      accent: "#8ec5fc",
      accentWarm: "#ff91b9",
      shortBio: "Lanh lợi, học nhanh, tập trung tốt và đặc biệt yêu thích những hoạt động cần tư duy như đọc chữ, đánh vần và toán.",
      personality: ["Lanh lợi", "Thông minh", "Học nhanh", "Tập trung tốt", "Tiết kiệm"],
      strengths: ["Đọc và đánh vần", "Tư duy logic", "Toán", "Khả năng tập trung"],
      interests: ["Vẽ", "Đọc sách", "Học chữ", "Làm toán"]
    },

    backgrounds: [
      { id: "birth", fromMonth: 0, toMonth: 3, label: "Chào đời", gradient: "radial-gradient(circle at 72% 12%, rgba(255,220,232,.9), transparent 34%), linear-gradient(180deg,#fff8f3 0%,#f8edf5 100%)", asset: null, expectedAsset: "baby-bg-00-03m.jpg" },
      { id: "discover", fromMonth: 3, toMonth: 12, label: "Khám phá đầu đời", gradient: "radial-gradient(circle at 18% 22%, rgba(187,224,255,.78), transparent 35%), linear-gradient(180deg,#eef8ff 0%,#f8f3ff 100%)", asset: null, expectedAsset: "baby-bg-03-12m.jpg" },
      { id: "first-steps", fromMonth: 12, toMonth: 24, label: "Những bước chân đầu tiên", gradient: "radial-gradient(circle at 80% 28%, rgba(255,226,154,.72), transparent 32%), linear-gradient(180deg,#f4fbff 0%,#fff7e8 100%)", asset: null, expectedAsset: "baby-bg-12-24m.jpg" },
      { id: "independence", fromMonth: 24, toMonth: 36, label: "Tự lập", gradient: "radial-gradient(circle at 20% 18%, rgba(183,238,206,.7), transparent 34%), linear-gradient(180deg,#f4fff8 0%,#edf8ff 100%)", asset: null, expectedAsset: "baby-bg-24-36m.jpg" },
      { id: "learning", fromMonth: 36, toMonth: 60, label: "Học và khám phá", gradient: "radial-gradient(circle at 80% 16%, rgba(203,190,255,.65), transparent 34%), linear-gradient(180deg,#f7f3ff 0%,#eef9ff 100%)", asset: null, expectedAsset: "baby-bg-36-60m.jpg" },
      { id: "growing", fromMonth: 60, toMonth: 120, label: "Growing Up", gradient: "radial-gradient(circle at 22% 18%, rgba(142,197,252,.58), transparent 34%), radial-gradient(circle at 80% 65%, rgba(255,145,185,.42), transparent 30%), linear-gradient(180deg,#eef6ff 0%,#fff5fa 100%)", asset: null, expectedAsset: "baby-bg-60m-plus.jpg" }
    ],

    health: [
      { id: "HLT-NGUU-001", month: 12, date: "2022-04-20", ageText: "1 tuổi", heightCm: 75, weightKg: 8.9, bmi: 15.82 },
      { id: "HLT-NGUU-002", month: 18, date: "2022-10-18", ageText: "1 tuổi 6 tháng", heightCm: 80, weightKg: 10, bmi: 15.62 },
      { id: "HLT-NGUU-003", month: 20, date: "2022-12-21", ageText: "1 tuổi 8 tháng", heightCm: 80, weightKg: 10.5, bmi: 16.41 },
      { id: "HLT-NGUU-004", month: 21, date: "2023-01-17", ageText: "1 tuổi 9 tháng", heightCm: 80, weightKg: 10.5, bmi: 16.41 },
      { id: "HLT-NGUU-005", month: 24, date: "2023-04-19", ageText: "2 tuổi", heightCm: 86, weightKg: 11.5, bmi: 15.55 },
      { id: "HLT-NGUU-006", month: 25, date: "2023-05-18", ageText: "2 tuổi 1 tháng", heightCm: 87, weightKg: 11, bmi: 14.53 },
      { id: "HLT-NGUU-007", month: 45, date: "2025-01-25", ageText: "3 tuổi 9 tháng", heightCm: 100, weightKg: 15.55, bmi: 15.55 },
      { id: "HLT-NGUU-008", month: 46, date: "2025-02-22", ageText: "3 tuổi 10 tháng", heightCm: 100, weightKg: 15.8, bmi: 15.8 },
      { id: "HLT-NGUU-009", month: 47, date: "2025-04-01", ageText: "3 tuổi 11 tháng", heightCm: 100, weightKg: 16.2, bmi: 16.2 },
      { id: "HLT-NGUU-010", month: 49, date: "2025-05-07", ageText: "4 tuổi 1 tháng", heightCm: 101, weightKg: 17.1, bmi: 16.76 },
      { id: "HLT-NGUU-011", month: 51, date: "2025-07-04", ageText: "4 tuổi 3 tháng", heightCm: 102.5, weightKg: 18.8, bmi: 17.89 },
      { id: "HLT-NGUU-012", month: 62, date: "2026-06-27", ageText: "5 tuổi 2 tháng", heightCm: 112, weightKg: 21, bmi: 16.74 },
      { id: "HLT-NGUU-013", month: 63, date: "2026-07-22", ageText: "5 tuổi 3 tháng", heightCm: 112, weightKg: 21.4, bmi: 17.06 }
    ],

    scenes: [
      {
        id: "nguu-00m-birth", month: 0, order: 0, type: "birth", importance: 5, layout: "hero", align: "center",
        eyebrow: "04 · 04 · 2021", title: "Thúy Yên chào đời", subtitle: "Khởi đầu của một hành trình lớn lên",
        description: "Chào đời lúc 16:00. Đây là điểm bắt đầu của hành trình được sắp xếp theo tháng tuổi.",
        sourceIds: ["EVT-0001"],
        media: [
          { id: "nguu-00m-chao-doi", role: "hero", prefer: "image", label: "Ảnh chào đời", expected: ["nguu-00m-chao-doi-01.jpg", "nguu-00m-chao-doi-01.mp4"] }
        ]
      },
      {
        id: "nguu-03m-flip", month: 3, order: 0, type: "milestone", importance: 4, layout: "left-media", align: "left",
        eyebrow: "3 tháng", title: "Biết lật", subtitle: "Cột mốc vận động đầu tiên",
        description: "Từ những lần nghiêng người tập tễnh, bé dần lật được cả người và bắt đầu chủ động khám phá không gian xung quanh.",
        sourceIds: ["EVT-0002"],
        media: [{ id: "nguu-03m-biet-lat", role: "hero", prefer: "image", label: "Biết lật", expected: ["nguu-03m-biet-lat-01.jpg", "nguu-03m-biet-lat-01.mp4"] }]
      },
      {
        id: "nguu-08m-sleep", month: 8, order: 0, type: "milestone", importance: 3, layout: "right-media", align: "right",
        eyebrow: "8 tháng", title: "Tự ngủ mà không cần dỗ", subtitle: "Bắt đầu tự đi vào giấc ngủ",
        description: "Một bước nhỏ trong sinh hoạt nhưng là dấu hiệu rõ của sự tự lập đang hình thành.",
        sourceIds: ["EVT-0003"],
        media: [{ id: "nguu-08m-tu-ngu", role: "featured", prefer: "image", label: "Giấc ngủ", expected: ["nguu-08m-tu-ngu-01.jpg", "nguu-08m-tu-ngu-01.mp4"] }]
      },
      {
        id: "nguu-12m-chapter", month: 12, order: 0, type: "chapter", importance: 5, layout: "chapter", align: "center",
        eyebrow: "12 tháng", title: "1 TUỔI", subtitle: "Một năm đầu tiên"
      },
      {
        id: "nguu-12m-first-steps", month: 12, order: 1, type: "cluster", importance: 5, layout: "hero-cluster", align: "center",
        eyebrow: "1 tuổi", title: "Những bước chân đầu tiên", subtitle: "Tự lập trong vận động và sinh hoạt",
        description: "Ở mốc 12 tháng, Thúy Yên đã đi vững bằng hai chân, ngủ xuyên đêm và không còn dùng tã.",
        bullets: ["Đi vững bằng hai chân", "Không còn đái dầm, ngủ xuyên đêm", "Không còn dùng tã"],
        sourceIds: ["EVT-0004", "EVT-0005", "EVT-0006"], healthMonth: 12,
        media: [{ id: "nguu-12m-biet-di", role: "hero", prefer: "video", label: "Những bước chân đầu tiên", expected: ["nguu-12m-biet-di-01.mp4", "nguu-12m-biet-di-01.jpg"] }]
      },
      {
        id: "nguu-18m-health", month: 18, order: 0, type: "health", importance: 2, layout: "health", align: "left", eyebrow: "18 tháng", title: "Lớn lên từng chút", healthMonth: 18
      },
      {
        id: "nguu-20-21m-health", month: 20, order: 0, type: "health-sequence", importance: 2, layout: "health", align: "right", eyebrow: "20–21 tháng", title: "Nhịp tăng trưởng", healthMonths: [20, 21]
      },
      {
        id: "nguu-24m-chapter", month: 24, order: 0, type: "chapter", importance: 5, layout: "chapter", align: "center", eyebrow: "24 tháng", title: "2 TUỔI", subtitle: "Tự lập hơn mỗi ngày"
      },
      {
        id: "nguu-24m-pacifier", month: 24, order: 1, type: "milestone", importance: 4, layout: "center-media", align: "center",
        eyebrow: "2 tuổi", title: "Cai ti giả", subtitle: "Tạm biệt một thói quen quen thuộc",
        description: "Bé học cách tự trấn an và không còn phụ thuộc vào ti giả khi đi ngủ hoặc lúc khó chịu.",
        sourceIds: ["EVT-0007"], healthMonth: 24,
        media: [{ id: "nguu-24m-cai-ti-gia", role: "hero", prefer: "image", label: "Cai ti giả", expected: ["nguu-24m-cai-ti-gia-01.jpg", "nguu-24m-cai-ti-gia-01.mp4"] }]
      },
      {
        id: "nguu-25m-health", month: 25, order: 0, type: "health", importance: 2, layout: "health", align: "left", eyebrow: "25 tháng", title: "2 tuổi 1 tháng", healthMonth: 25
      },
      {
        id: "nguu-32m-food", month: 32, order: 0, type: "blurb", importance: 1, layout: "minimal", align: "right",
        eyebrow: "Một nét tính cách", title: "Niềm vui với những món ngon", description: "Thúy Yên khá thích ăn và thường hào hứng với những món mình yêu thích.", sourceIds: ["EVT-0023"]
      },
      {
        id: "nguu-36m-chapter", month: 36, order: 0, type: "chapter", importance: 5, layout: "chapter", align: "center", eyebrow: "36 tháng", title: "3 TUỔI", subtitle: "Tự lập trong sinh hoạt"
      },
      {
        id: "nguu-36m-dress", month: 36, order: 1, type: "milestone", importance: 4, layout: "left-media", align: "left",
        eyebrow: "3 tuổi", title: "Tự lấy, mặc và cởi quần áo", subtitle: "Tự chăm sóc bản thân tốt hơn",
        description: "Một cột mốc cho thấy sự chủ động và khả năng tự phục vụ ngày càng rõ ràng.", sourceIds: ["EVT-0008"],
        media: [{ id: "nguu-36m-tu-mac-quan-ao", role: "hero", prefer: "image", label: "Tự mặc quần áo", expected: ["nguu-36m-tu-mac-quan-ao-01.jpg", "nguu-36m-tu-mac-quan-ao-01.mp4"] }]
      },
      {
        id: "nguu-40m-money", month: 40, order: 0, type: "cluster", importance: 3, layout: "split", align: "right",
        eyebrow: "Khoảng 3 tuổi 4 tháng", title: "Học về phần thưởng và tiết kiệm", subtitle: "Những bài học tài chính đầu tiên",
        bullets: ["Mỗi bài học hoặc nhiệm vụ hoàn thành được thưởng 1 đồng", "Thích để dành và trân trọng số tiền tích góp"], sourceIds: ["EVT-0021", "EVT-0022"]
      },
      {
        id: "nguu-45-47m-growth", month: 45, order: 0, type: "health-sequence", importance: 2, layout: "health", align: "left",
        eyebrow: "45–47 tháng", title: "Ba lần đo liên tiếp", healthMonths: [45, 46, 47]
      },
      {
        id: "nguu-48m-chapter", month: 48, order: 0, type: "chapter", importance: 5, layout: "chapter", align: "center", eyebrow: "48 tháng", title: "4 TUỔI", subtitle: "Thế giới học tập mở rộng"
      },
      {
        id: "nguu-48m-learning", month: 48, order: 1, type: "cluster", importance: 5, layout: "hero-cluster", align: "center",
        eyebrow: "4 tuổi", title: "Thế giới học tập", subtitle: "Đọc, chữ cái, ngôn ngữ và toán",
        bullets: ["Đọc rành", "Nhận diện khoảng 24 chữ cái tiếng Việt", "Hát được bài tiếng Anh", "Đếm tốt từ 50 đến 100", "Cộng trừ trong phạm vi 99"],
        sourceIds: ["EVT-0009", "EVT-0010", "EVT-0011", "EVT-0012", "EVT-0013"],
        media: [
          { id: "nguu-48m-hoc-tap-hero", role: "hero", prefer: "image", label: "Học tập", expected: ["nguu-48m-hoc-tap-hero-01.jpg", "nguu-48m-hoc-tap-hero-01.mp4"] },
          { id: "nguu-48m-doc-sach", role: "featured", prefer: "image", label: "Đọc sách", expected: ["nguu-48m-doc-sach-01.jpg", "nguu-48m-doc-sach-01.mp4"] },
          { id: "nguu-48m-hoc-toan", role: "featured", prefer: "image", label: "Học toán", expected: ["nguu-48m-hoc-toan-01.jpg", "nguu-48m-hoc-toan-01.mp4"] },
          { id: "nguu-48m-hat-tieng-anh", role: "featured", prefer: "video", label: "Tiếng Anh", expected: ["nguu-48m-hat-tieng-anh-01.mp4", "nguu-48m-hat-tieng-anh-01.jpg"] }
        ]
      },
      {
        id: "nguu-49m-health", month: 49, order: 0, type: "health", importance: 3, layout: "health", align: "right", eyebrow: "49 tháng", title: "4 tuổi 1 tháng", healthMonth: 49,
        media: [
          { id: "nguu-49m-health-front", role: "featured", prefer: "image", label: "Ảnh chính diện", expected: ["nguu-49m-health-front.jpg"] },
          { id: "nguu-49m-health-side", role: "featured", prefer: "image", label: "Ảnh nghiêng", expected: ["nguu-49m-health-side.jpg"] }
        ]
      },
      {
        id: "nguu-51m-health", month: 51, order: 0, type: "health", importance: 2, layout: "health", align: "left", eyebrow: "51 tháng", title: "4 tuổi 3 tháng", healthMonth: 51
      },
      {
        id: "nguu-52m-advanced-math", month: 52, order: 0, type: "learning", importance: 4, layout: "right-media", align: "right",
        eyebrow: "Khoảng 4 tuổi 4 tháng", title: "Cộng trừ có nhớ và tìm x", subtitle: "Bước tiếp theo trong tư duy toán",
        description: "Bắt đầu làm quen với cộng trừ có nhớ và bài toán tìm x, đồng thời duy trì thói quen viết bài và làm toán thường xuyên.", sourceIds: ["EVT-0014"],
        media: [{ id: "nguu-52m-cong-tru-co-nho", role: "hero", prefer: "video", label: "Làm toán", expected: ["nguu-52m-cong-tru-co-nho-01.mp4", "nguu-52m-cong-tru-co-nho-01.jpg"] }]
      },
      {
        id: "nguu-58m-times-table", month: 58, order: 0, type: "learning", importance: 5, layout: "center-media", align: "center",
        eyebrow: "Gần 5 tuổi", title: "Thuộc bảng cửu chương 1–9", subtitle: "Một bước tiến lớn trong toán học",
        description: "Có thể trả lời nhanh nhiều phép nhân nhờ quá trình học đều đặn.", sourceIds: ["EVT-0015"],
        media: [{ id: "nguu-58m-bang-cuu-chuong", role: "hero", prefer: "video", label: "Bảng cửu chương", expected: ["nguu-58m-bang-cuu-chuong-01.mp4", "nguu-58m-bang-cuu-chuong-01.jpg"] }]
      },
      {
        id: "nguu-60m-chapter", month: 60, order: 0, type: "chapter", importance: 5, layout: "chapter", align: "center", eyebrow: "60 tháng", title: "5 TUỔI", subtitle: "Tự tin hơn, độc lập hơn"
      },
      {
        id: "nguu-61m-bike", month: 61, order: 0, type: "activity", importance: 5, layout: "hero", align: "center",
        eyebrow: "5 tuổi 1 tháng", title: "Biết đi xe đạp 2 bánh", subtitle: "Vượt qua sự dè dặt với vận động",
        description: "Một cột mốc đáng nhớ: sau quá trình tập luyện, Thúy Yên đã tự tin đạp xe hai bánh.", sourceIds: ["EVT-0017"],
        media: [{ id: "nguu-61m-xe-dap-2-banh", role: "hero", prefer: "video", label: "Xe đạp 2 bánh", expected: ["nguu-61m-xe-dap-2-banh-01.mp4", "nguu-61m-xe-dap-2-banh-01.jpg"] }]
      },
      {
        id: "nguu-61m-tech-language", month: 61, order: 1, type: "cluster", importance: 3, layout: "split", align: "left",
        eyebrow: "Cùng giai đoạn", title: "Công nghệ & giao tiếp", subtitle: "Những kỹ năng mới",
        bullets: ["Làm quen với bàn phím máy tính", "Giao tiếp linh hoạt và rành rọt"], sourceIds: ["EVT-0016", "EVT-0018"],
        media: [
          { id: "nguu-61m-ban-phim", role: "featured", prefer: "image", label: "Bàn phím máy tính", expected: ["nguu-61m-ban-phim-01.jpg", "nguu-61m-ban-phim-01.mp4"] },
          { id: "nguu-61m-giao-tiep", role: "featured", prefer: "video", label: "Giao tiếp", expected: ["nguu-61m-giao-tiep-01.mp4", "nguu-61m-giao-tiep-01.jpg"] }
        ]
      },
      {
        id: "nguu-62m-growth", month: 62, order: 0, type: "cluster", importance: 4, layout: "hero-cluster", align: "right",
        eyebrow: "5 tuổi 2 tháng", title: "Tự chăm sóc và học nhanh", subtitle: "Một giai đoạn trưởng thành rõ rệt",
        bullets: ["Tự tắm gội bằng xà bông", "Trí nhớ tốt, học nhanh và chịu học"], sourceIds: ["EVT-0019", "EVT-0020"], healthMonth: 62,
        media: [
          { id: "nguu-62m-health-front", role: "featured", prefer: "image", label: "Ảnh chính diện", expected: ["nguu-62m-health-front.jpg"] },
          { id: "nguu-62m-health-full", role: "featured", prefer: "image", label: "Ảnh toàn thân", expected: ["nguu-62m-health-full.jpg"] },
          { id: "nguu-62m-health-side", role: "gallery", prefer: "image", label: "Ảnh nghiêng", expected: ["nguu-62m-health-side.jpg"] },
          { id: "nguu-62m-health-video", role: "hero", prefer: "video", label: "Video tháng 62", expected: ["nguu-62m-health-video.mp4", "nguu-62m-health-video-poster.jpg"] }
        ]
      },
      {
        id: "nguu-63m-health", month: 63, order: 0, type: "health", importance: 3, layout: "health", align: "left", eyebrow: "63 tháng", title: "5 tuổi 3 tháng", healthMonth: 63
      }
    ]
  };
})();
