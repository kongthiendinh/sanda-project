import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home }
    // Có thể thêm các route khác cho trang sản phẩm, tin tức, ...
  ]
})