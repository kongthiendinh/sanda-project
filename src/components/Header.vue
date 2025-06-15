<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
      </div>
      <nav class="navigation">
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Liên hệ</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #eee;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0.7rem 2rem;
  justify-content: space-between;
}
.logo img {
  height: 40px;
}
.navigation a {
  color: #333;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 900px) {
  .container {
    padding: 0.7rem 1rem;
  }
  .navigation a {
    margin-left: 12px;
  }
}
@media (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 0.7rem 0.5rem;
  }
  .navigation {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .navigation a {
    margin-left: 0;
    padding: 4px 0;
  }
}
</style>