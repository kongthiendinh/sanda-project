<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Common/Header.vue'
import MainMenu from './components/Common/MainMenu.vue'
import Footer from './components/Common/Footer.vue'

export default {
  components: { Header, MainMenu, Footer }
}
</script>

<style>
body {
  margin: 0;
  background: #C0C0C0;  /* Màu ghi sáng */
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #C0C0C0;  /* Đảm bảo nền ghi cho toàn bộ app */
}

.layout {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 28px;
}
.main-content {
  flex: 1;
}
</style>