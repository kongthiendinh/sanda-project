import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProductDetail from './views/ProductDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetail }
  ]
})