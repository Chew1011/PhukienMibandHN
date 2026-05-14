function openShopee(url) {
  if (url === "#") {
    alert("Sản phẩm này đang được cập nhật link!");
    return;
  }

  // Hiệu ứng phản hồi khi người dùng nhấn
  console.log("Đang kích hoạt mở App Shopee...");

  // Mở link Deep-link trong cửa sổ hiện tại để kích hoạt app tốt hơn trên mobile
  window.location.href = url;
}
