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
        <a href="#">Tư vấn tình cảm </a>
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
  background: rgba(0, 0, 0, 0.63);
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
  text-align: left;
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

/* Tablet */
@media (max-width: 900px) {
  .footer {
    padding: 20px 0 10px 0;
  }
  .container {
    max-width: 98vw;
    padding: 0 12px;
  }
  .info {
    gap: 14px;
  }
  .logo {
    height: 38px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .footer {
    padding: 14px 0 5px 0;
    font-size: 0.97rem;
    margin-top: 18px;
  }
  .container {
    max-width: 100vw;
    padding: 0 4px;
  }
  .info {
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
    margin-bottom: 8px;
    text-align: left;
    width: 100%;
  }
  .logo {
    height: 32px;
    margin-bottom: 4px;
  }
  .links {
    margin-bottom: 6px;
  }
  .links a {
    margin: 0 4px;
    font-size: 0.98em;
  }
  .copyright {
    font-size: 13px;
    text-align: center;
    width: 100%;
  }
}
</style>