(function () {
  "use strict";
  const data = window.BABY_DISCOVERY_DATA;
  if (!data) return;
  // Media ownership is supplied by reviewed exact-file evidence, never by date alone.
  data.scenes.forEach(scene => { scene.media = []; delete scene.galleryMedia; delete scene.mediaFiles; });
  data.scenes.filter(scene => scene.type === "chapter").forEach(scene => {
    scene.date = (2021 + scene.month / 12) + "-04-04";
  });
  Object.assign(data.scenes.find(s => s.id === "nguu-00m-birth"), {
    date: "2021-04-04", sourceRole: "user-confirmed", mediaPolicy: "explicit",
    description: "Thúy Yên chào đời lúc 16:00 ngày 04/04/2021. Từ ngày ấy, hành trình lớn lên của bé bắt đầu."
  });
  data.scenes.push(
    { id: "nguu-03m-photos-2021-07-07", month: 3, order: 20, date: "2021-07-07",
      type: "memory", importance: 3, layout: "center-media", align: "center", sourceRole: "user-confirmed",
      title: "3 tháng tuổi", eyebrow: "07 · 07 · 2021", description: "Hai hình ảnh của Thúy Yên ở giai đoạn khoảng 3 tháng tuổi, được đặt đúng vào trục thời gian đầu đời.", media: [] },
    { id: "nguu-11m-thoi-noi-2022", month: 12, order: 40, date: "2022-04-04",
      type: "family-event", importance: 5, layout: "family-event", align: "center", sourceRole: "user-confirmed",
      title: "Lễ thôi nôi", subtitle: "Một ngày đặc biệt của gia đình", eyebrow: "04 · 04 · 2022",
      description: "Gia đình tổ chức lễ thôi nôi cho Thúy Yên vào ngày 04/04/2022, khi bé tròn 1 tuổi.", media: [] },
    { id: "nguu-health-constipation-2022", month: 12, order: 80, date: "2022-04-22",
      type: "health-story", layout: "health-story", align: "center", sensitive: true, sourceRole: "user-confirmed",
      title: "Nhật ký táo bón", subtitle: "Những lần gia đình theo dõi tình trạng phân cứng",
      description: "Gia đình đã ghi lại nhật ký táo bón của Thúy Yên từ ngày 22/04/2022. Mốc đã xác nhận này được giữ lại; bộ theo dõi tiêu hóa hiện tại có album riêng theo ngày.", media: [] },
    { id: "nguu-10m-constipation-story", month: 10, order: 30, type: "health-story", layout: "health-story", align: "left",
      sensitive: true, title: "Những ngày bị táo bón", eyebrow: "Một đoạn trong hành trình chăm con",
      description: "Có một giai đoạn Thúy Yên bị táo bón, phân khô và cứng, mỗi lần đi ngoài bé phải rặn nhiều và rất khó chịu. Ảnh và video gia đình lưu để theo dõi nằm trong nhật ký tiêu hóa riêng.", media: [] },
    { id: "nguu-10m-bloody-stool-story", month: 10, order: 31, type: "health-story", layout: "health-story", align: "right",
      sensitive: true, title: "Có lần bé đi ngoài ra máu", sourceRole: "user-confirmed",
      description: "Có lần tình trạng nặng hơn, Thúy Yên đi ngoài ra máu và rất đau. Ký ức này được giữ riêng. Có thể mở nhật ký tiêu hóa để xem các ảnh và video theo dõi của gia đình.", media: [] }
  );
})();
