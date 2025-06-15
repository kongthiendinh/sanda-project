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
  height: 544px;
  min-height: 525px;
  max-height: 550px;
  overflow: hidden;
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

/* Tablet */
@media (max-width: 900px) {
  .side-menu {
    height: auto;
    min-height: unset;
    max-height: unset;
    margin-bottom: 24px;
  }
  .menu-title {
    padding: 14px 12px 6px 12px;
    font-size: 15px;
  }
  .main-link {
    font-size: 14px;
    padding: 10px 12px;
  }
  .icon {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }
  .submenu {
    min-width: 130px;
    padding: 5px 0;
  }
  .submenu-item a {
    font-size: 13.5px;
    padding: 7px 12px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .side-menu {
    border-radius: 6px;
    margin-bottom: 14px;
    box-shadow: 0 1px 4px #eee;
  }
  .menu-title {
    padding: 10px 6px 4px 10px;
    font-size: 14px;
    gap: 5px;
  }
  .main-link {
    font-size: 13px;
    padding: 8px 8px;
  }
  .icon {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  .submenu {
    min-width: 90px;
    padding: 2px 0;
    border-radius: 5px;
  }
  .submenu-item a {
    font-size: 12px;
    padding: 5px 8px;
  }
}
</style>