function openShopee(url) {
  // Để giải quyết vấn đề của bạn, chúng ta sẽ ưu tiên dùng Deep-link.
  // Nếu link đã là deep-link (qua dịch vụ như Urlgeni), nó sẽ tự động mở app.

  // Thêm hiệu ứng feedback khi click
  console.log("Đang điều hướng tới Shopee...");

  // Mở liên kết trong một tab mới
  window.open(url, "_blank");
}

// Hiệu ứng hover nhẹ nhàng bằng JS nếu cần thêm logic
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Có thể thêm haptic feedback ở đây cho mobile
  });
});
