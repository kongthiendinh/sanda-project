<template>
  <section class="product-list">
    <h2>Sản phẩm nổi bật</h2>
    <div class="products">
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :product="p"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        { id: 1, name: 'Điện thoại Samsung', price: '5.990.000', image: 'https://via.placeholder.com/180?text=Samsung' },
        { id: 2, name: 'Laptop Asus', price: '12.990.000', image: 'https://via.placeholder.com/180?text=Asus' },
        { id: 3, name: 'Tivi LG 43 inch', price: '7.990.000', image: 'https://via.placeholder.com/180?text=LG+Tivi' },
        { id: 4, name: 'Máy giặt Electrolux', price: '6.490.000', image: 'https://via.placeholder.com/180?text=Electrolux' },
        { id: 5, name: 'Máy lạnh Daikin', price: '9.990.000', image: 'https://via.placeholder.com/180?text=Daikin' }
      ]
    }
  }
}
</script>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
}
</style>