function openShopee(url) {
  if (url === "#" || url === "") {
    alert("Sản phẩm này đang được cập nhật link!");
    return;
  }

  console.log("Đang kích hoạt mở App Shopee...");

  // Tạo độ trễ ngắn để kịp thấy hiệu ứng nhấn (scale)
  setTimeout(function () {
    window.location.href = url;
  }, 150);
}
