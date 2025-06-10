<template>
  <section class="feature-products">
    <h2>Sản phẩm nổi bật</h2>
    <div class="fp-list">
      <ProductCard v-for="p in products" :key="p.name" :product="p" />
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
        { name: 'Laptop Asus Vivobook', image: require('@/assets/images/product3.jpg'), price: 11990000, oldPrice: 13990000, sale: 15 },
        { name: 'Máy lọc không khí Sharp', image: require('@/assets/images/product2.jpg'), price: 2990000, oldPrice: 3990000, sale: 25 },
        { name: 'Điện thoại iPhone 13', image: require('@/assets/images/product1.jpg'), price: 18990000, oldPrice: 20990000, sale: 10 },
        { name: 'Máy lọc nước Kangaroo', image: require('@/assets/images/product4.jpg'), price: 3990000, oldPrice: 5790000, sale: 31 }
      ]
    }
  }
}
</script>
<style scoped>
.feature-products {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
    background: #fff;
  border-radius: 8px;
  padding: 20px 24px;
}
.fp-list {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 18px;
  justify-content: flex-start;
}
@media (max-width: 900px) {
  .fp-list { flex-direction: column; }
}
</style>