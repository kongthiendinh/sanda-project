<template>
  <header class="header">
    <div class="container">
      <img src="@/assets/logo.png" alt="Meta.vn" class="logo" />
      <input type="text" class="search" placeholder="Tìm kiếm sản phẩm..." />
      <nav>
        <a href="/">Trang chủ</a>
        <a href="#">Khuyến mãi</a>
        <a href="#">Danh mục</a>
        <a href="#">Liên hệ</a>
      </nav>
      <div class="cart">
        🛒 <span>0</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0.5rem 0;
}
.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
}
.logo {
  height: 50px;
  margin-right: 2rem;
}
.search {
  flex: 1;
  padding: 8px;
  margin: 0 2rem 0 0;
  border-radius: 4px;
  border: 1px solid #ddd;
}
nav a {
  margin: 0 1rem;
  color: #333;
  text-decoration: none;
}
.cart {
  margin-left: 2rem;
  font-size: 1.2rem;
  color: #ff6600;
}
</style>