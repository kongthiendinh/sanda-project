<template>
  <footer class="footer">
    <div class="container">
      <div>
        <strong>Meta.vn Clone</strong> &copy; 2025. All rights reserved.
      </div>
      <div>
        <a href="#">Chính sách bảo mật</a> | <a href="#">Điều khoản sử dụng</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: rgba(0,0,0,0.63); /* đen trong suốt, nhìn xuống nền */
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  margin-top: auto;
}
.footer .container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}
.footer a {
  color: #ff6600;
  text-decoration: none;
}

/* Tablet */
@media (max-width: 900px) {
  .footer {
    padding: 1.2rem 0;
  }
  .footer .container {
    max-width: 98vw;
    font-size: 0.98rem;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .footer {
    padding: 0.7rem 0;
    font-size: 0.97rem;
  }
  .footer .container {
    max-width: 100vw;
    padding: 0 8px;
    gap: 0.3rem;
  }
  .footer a {
    display: inline-block;
    margin: 0 2px;
    font-size: 0.99em;
  }
}
</style>