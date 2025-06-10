<template>
  <footer class="footer">
    <div class="container">
      <div class="info">
        <img src="@/assets/images/logo1.png" alt="Meta.vn" class="logo" />
        <div>
          <p><strong>Công ty Cổ phần Sanda HTC</strong></p>
          <p>Địa chỉ: 56 Duy Tân, Cầu Giấy, Hà Nội</p>
          <p>Điện thoại: 1900 1919 | Email: hotro@sanda.vn</p>
        </div>
      </div>
      <div class="links">
        <a href="#">Giới thiệu</a>
        <a href="#">Chính sách bảo mật</a>
        <a href="#">Điều khoản sử dụng</a>
        <a href="#">Liên hệ</a>
      </div>
      <div class="copyright">
        &copy; 2025 sanda-htc.vn - All rights reserved.
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  /* Đỏ trong suốt, nhìn được xuống nền */
  background: rgba(0, 0, 0, 0.63); /* đỏ nhạt trong, có thể chỉnh opacity */
  color: #fff;
  margin-top: 32px;
  padding: 32px 0 12px 0;
}
.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
}
.logo {
  height: 46px;
}
.links {
  margin-bottom: 8px;
}
.links a {
  color: #ffba00;
  margin: 0 10px;
  text-decoration: none;
}
.links a:hover {
  text-decoration: underline;
}
.copyright {
  font-size: 14px;
  color: #bbb;
}
</style>