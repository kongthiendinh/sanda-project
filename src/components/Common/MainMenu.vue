<template>
  <aside class="side-menu">
    <div class="menu-title">
      <i class="fa fa-bars"></i> DANH MỤC SẢN PHẨM
    </div>
    <ul class="menu-list">
      <li v-for="item in menu" :key="item.text" class="menu-item"
          @mouseenter="hover = item.text" @mouseleave="hover = ''">
        <div class="main-link">
          <img v-if="item.icon" :src="item.icon" class="icon" />
          <span>{{ item.text }}</span>
          <i v-if="item.sub" class="fa fa-angle-right sub-arrow"></i>
        </div>
        <ul v-if="item.sub && hover === item.text" class="submenu">
          <li v-for="sub in item.sub" :key="sub" class="submenu-item">
            <a href="#">{{ sub }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      hover: '',
      menu: [
        { text: 'Đá cứng', icon: require('@/assets/images/category1.png'), sub: ['Tivi', 'Loa', 'Amply'] },
        { text: 'Đá mềm', icon: require('@/assets/images/category2.png'), sub: ['Tủ lạnh', 'Điều hoà', 'Máy giặt'] },
        { text: 'Đá nóng', icon: require('@/assets/images/category3.png'), sub: ['Nồi cơm điện', 'Bếp từ', 'Máy xay sinh tố'] },
        { text: 'Đá lạnh', icon: require('@/assets/images/category1.png'), sub: ['Điện thoại', 'Tablet', 'Phụ kiện'] },
        { text: 'Đá bóng', icon: require('@/assets/images/category2.png'), sub: ['Laptop', 'PC', 'Màn hình'] },
        { text: 'Đá tự nhiên', icon: require('@/assets/images/category3.png'), sub: ['Máy lọc nước', 'Máy rửa bát'] },
        { text: 'Đá quý', icon: require('@/assets/images/category1.png'), sub: ['Máy massage', 'Máy lọc không khí'] },
        { text: 'Đá hiếm', icon: require('@/assets/images/category2.png'), sub: ['Sữa', 'Ghế ăn dặm'] }
      ]
    }
  }
}
</script>
<style scoped>
.side-menu {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #eee;
  padding: 0;
  /* Chiều cao cố định, menu luôn cùng kích thước */
  height: 510px; /* có thể điều chỉnh (ví dụ 450px, 500px, v.v.) */
  min-height: 525px;
  max-height: 530px;
}
.menu-title {
  padding: 18px 18px 10px 18px;
  font-weight: bold;
  color: #e05c04;
  font-size: 17px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 10px;
}
.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-item {
  position: relative;
}
.main-link {
  display: flex;
  align-items: center;
  padding: 13px 16px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
  transition: background 0.2s;
  background: #fff;
}
.menu-item:hover .main-link {
  background: #fbeee3;
  color: #e05c04;
}
.icon {
  width: 26px;
  height: 26px;
  margin-right: 14px;
  border-radius: 6px;
  background: #fafafa;
  object-fit: contain;
}
.sub-arrow {
  margin-left: auto;
  color: #aaa;
  font-size: 16px;
}
.submenu {
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 180px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 16px #eee;
  z-index: 99;
  padding: 10px 0;
}
.submenu-item a {
  display: block;
  color: #444;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 15px;
  transition: background 0.15s;
}
.submenu-item a:hover {
  background: #fbeee3;
  color: #e05c04;
}
</style>