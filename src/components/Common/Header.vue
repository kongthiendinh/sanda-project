<template>
  <header class="header">
    <div class="container">
      <img src="@/assets/images/logo.png" alt="Meta.vn" class="logo" />
      <!-- Search + Hotline wrap -->
      <div class="search-hotline-wrap">
        <!-- 3-line icon on mobile -->
        <div class="three-line-icon-wrap" v-if="isMobile" @click="toggleMenu">
          <img
            src="@/assets/images/3line.png"
            alt="Menu"
            class="three-line-icon"
          />
        </div>
        <input
          class="search"
          type="text"
          placeholder="Tìm kiếm sản phẩm, danh mục..."
        />
        <!-- Hotline icon on mobile, text on desktop -->
        <div class="hotline-icon-wrap" v-if="isMobile">
          <img
            src="@/assets/images/hotline.png"
            alt="Hotline"
            class="hotline-icon"
            @click="toggleHotline"
          />
          <transition name="fade">
            <div v-if="showHotline" class="hotline-popup" @click="showHotline=false">
              <div class="hotline-popup-content">
                <span>Hotline:</span>
                <a href="tel:19001919">1900 1919</a>
              </div>
            </div>
          </transition>
        </div>
        <div class="hotline-text" v-else>
          Hotline: <a href="tel:19001919">1900 1919</a>
        </div>
      </div>
      <div class="account"></div>
    </div>

    <!-- Mobile Side Menu -->
    <transition name="slide-menu">
      <nav v-if="isMobile && showMenu" class="mobile-side-menu">
        <!-- Header của menu -->
        <div class="mobile-menu-header">
          <div class="menu-title">
            <i class="fa fa-bars"></i> DANH MỤC SẢN PHẨM
          </div>
          <button class="close-menu-btn" @click="toggleMenu">
            <i class="fa fa-times"></i>
          </button>
        </div>

        <!-- Nội dung menu từ side menu -->
        <div class="mobile-menu-content">
          <ul class="menu-list">
            <li v-for="item in menu" :key="item.text" class="menu-item">
              <div class="main-link" @click="toggleSubmenu(item.text)">
                <img v-if="item.icon" :src="item.icon" class="icon" />
                <span>{{ item.text }}</span>
                <i v-if="item.sub" class="fa fa-angle-down sub-arrow"
                   :class="{ 'rotated': activeSubmenu === item.text }"></i>
              </div>
              <ul v-if="item.sub && activeSubmenu === item.text" class="submenu">
                <li v-for="sub in item.sub" :key="sub" class="submenu-item">
                  <a href="#" @click="handleMenuClick">{{ sub }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </transition>

    <!-- Lớp phủ khi menu mở -->
    <div v-if="isMobile && showMenu" class="menu-overlay" @click="toggleMenu"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showHotline: false,
      isMobile: false,
      showMenu: false,
      activeSubmenu: '',
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
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    toggleHotline() {
      this.showHotline = !this.showHotline
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
      if (!this.showMenu) {
        this.activeSubmenu = ''
      }
    },
    toggleSubmenu(itemText) {
      this.activeSubmenu = this.activeSubmenu === itemText ? '' : itemText
    },
    handleMenuClick() {
      // Xử lý khi click vào menu item
      this.toggleMenu() // Đóng menu sau khi chọn
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 600
      if (!this.isMobile) {
        this.showHotline = false
        this.showMenu = false
        this.activeSubmenu = ''
      }
    }
  }
}
</script>

<style scoped>
.header {
  background: #d50000;
  box-shadow: 0 2px 8px #e0e0e0;
  position: relative;
  z-index: 101;
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
.search-hotline-wrap {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 350px;
}
.three-line-icon-wrap {
  display: none;
}
.search {
  flex: 1 1 480px;
  min-width: 250px;
  max-width: 600px;
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-right: 1.2rem;
  font-size: 1.05rem;
  transition: max-width 0.2s, min-width 0.2s;
}
.hotline-text {
  color: #fff;
  font-weight: bold;
  white-space: nowrap;
  font-size: 1.12rem;
}
.hotline-text a {
  color: #ffd6cc;
  text-decoration: none;
  font-weight: bold;
  margin-left: 4px;
}
.hotline-icon-wrap {
  display: none;
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

/* Tablet */
@media (max-width: 900px) {
  .container {
    max-width: 98vw;
    padding: 0.5rem 1rem;
  }
  .logo {
    height: 38px;
    margin-right: 1rem;
  }
  .search {
    padding: 8px 10px;
    margin-right: 1rem;
    font-size: 0.97rem;
    min-width: 170px;
    max-width: 400px;
  }
  .hotline-text {
    font-size: 1rem;
    margin-left: 0;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 0.5rem 0.4rem;
  }
  .logo {
    height: 32px;
    margin: 0 auto 2px auto;
    display: block;
  }
  .search-hotline-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 350px;
    margin: 0 0 2px 0;
    position: relative;
    gap: 8px;
    justify-content: flex-start;
  }
  .three-line-icon-wrap {
    display: flex;
    align-items: center;
    margin-right: 6px;
    width: 38px;
    height: 38px;
    max-width: 38px;
    max-height: 38px;
    min-width: 38px;
    min-height: 38px;
    cursor: pointer;
    z-index: 103;
  }
  .three-line-icon {
    width: 100% !important;
    height: 100% !important;
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
    display: block;
  }
  .search {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    margin: 0;
    padding: 7px 8px;
    font-size: 0.95rem;
    display: block;
    text-align: left;
    height: 38px;
    box-sizing: border-box;
  }
  .hotline-icon-wrap {
    display: flex !important;
    align-items: center;
    height: 100%;
  }
  .hotline-icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: block;
  }
  .hotline-popup {
    position: absolute;
    top: 38px;
    right: 0;
    background: #fff;
    color: #d50000;
    border-radius: 7px;
    box-shadow: 0 2px 10px #e0e0e0;
    padding: 7px 18px;
    min-width: 120px;
    z-index: 110;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1rem;
    animation: hotline-popup-fadein 0.25s;
  }
  .hotline-popup-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
  }
  .hotline-popup-content a {
    color: #d50000;
    text-decoration: none;
    font-weight: bold;
  }
  .hotline-text {
    display: none !important;
  }

  /* Mobile Side Menu Styles */
  .mobile-side-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 85vw;
    max-width: 320px;
    height: 100vh;
    background: #fff;
    z-index: 120;
    box-shadow: 2px 0 12px rgba(0,0,0,0.15);
    animation: slideInLeft 0.3s ease-out;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 18px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .mobile-menu-header .menu-title {
    font-weight: bold;
    color: #e05c04;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .close-menu-btn {
    background: none;
    border: none;
    font-size: 20px;
    color: #666;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
  }

  .close-menu-btn:hover {
    background: #f5f5f5;
    color: #e05c04;
  }

  .mobile-menu-content {
    flex: 1;
    overflow-y: auto;
  }

  .menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .menu-item {
    border-bottom: 1px solid #f6f6f6;
  }

  .main-link {
    display: flex;
    align-items: center;
    padding: 12px 18px;
    font-size: 15px;
    color: #333;
    cursor: pointer;
    transition: background 0.2s;
    background: #fff;
  }

  .menu-item .main-link:hover {
    background: #fbeee3;
    color: #e05c04;
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border-radius: 4px;
    background: #fafafa;
    object-fit: contain;
  }

  .sub-arrow {
    margin-left: auto;
    color: #aaa;
    font-size: 14px;
    transition: transform 0.2s;
  }

  .sub-arrow.rotated {
    transform: rotate(180deg);
  }

  .submenu {
    background: #f9f9f9;
    list-style: none;
    margin: 0;
    padding: 0;
    animation: slideDown 0.2s ease-out;
  }

  .submenu-item a {
    display: block;
    color: #555;
    padding: 10px 18px 10px 50px;
    text-decoration: none;
    font-size: 14px;
    transition: background 0.15s;
    border-bottom: 1px solid #f0f0f0;
  }

  .submenu-item a:hover {
    background: #fbeee3;
    color: #e05c04;
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    z-index: 119;
    animation: fadeIn 0.3s;
  }

  @keyframes slideInLeft {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }

  @keyframes slideDown {
    0% { max-height: 0; opacity: 0; }
    100% { max-height: 300px; opacity: 1; }
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes hotline-popup-fadein {
    0% { opacity: 0; transform: translateY(-8px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-menu-enter-active, .slide-menu-leave-active {
    transition: all 0.3s ease;
  }
  .slide-menu-enter, .slide-menu-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>