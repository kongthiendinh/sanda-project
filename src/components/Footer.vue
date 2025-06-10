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
  background: #222;
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
</style>