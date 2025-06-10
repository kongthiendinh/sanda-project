<template>
  <header class="header">
    <div class="container">
      <img src="@/assets/images/logo.png" alt="Meta.vn" class="logo" />
      <input class="search" type="text" placeholder="Tìm kiếm sản phẩm, danh mục..." />
      <div class="hotline">Hotline: <a href="tel:19001919">1900 1919</a></div>
 <div class="account">
      <!-- <a href="#"><i class="fa fa-user"></i> Tài khoản</a>
        <a href="#"><i class="fa fa-shopping-cart"></i> Giỏ hàng</a> -->
      </div> 
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  background: #d50000; /* Đỏ */
  box-shadow: 0 2px 8px #e0e0e0;
}
.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}
.logo {
  height: 48px;
  margin-right: 2rem;
}
.search {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-right: 2rem;
}
.hotline {
  color: #fff;
  font-weight: bold;
  margin-right: 2rem;
}
.account a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}
.account a:hover {
  color: #ffd6cc;
}
</style>