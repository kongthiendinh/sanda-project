<template>
  <section class="feature-products">
    <h2>Sản phẩm nổi bật</h2>
    <div class="fp-list">
      <ProductCard v-for="p in visibleProducts" :key="p.name" :product="p" />
    </div>
    <button
      v-if="products.length > limit"
      class="show-more-btn"
      @click="toggleShowAll"
    >
      {{ showAll ? 'Thu gọn' : 'Xem thêm sản phẩm' }}
    </button>
  </section>
</template>
<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  data() {
    return {
      showAll: false,
      limit: 4,
      products: [
        { name: 'Laptop Asus Vivobook', image: require('@/assets/images/fproduct1.jpg'), price: 11990000, oldPrice: 13990000 },
        { name: 'Máy lọc không khí Sharp', image: require('@/assets/images/fproduct2.jpg'), price: 2990000, oldPrice: 3990000},
        { name: 'Điện thoại iPhone 13', image: require('@/assets/images/fproduct3.jpg'), price: 18990000, oldPrice: 20990000},
        { name: 'Máy lọc nước Kangaroo', image: require('@/assets/images/fproduct4.jpg'), price: 3990000, oldPrice: 5790000},
       { name: 'Máy lọc không khí Sharp', image: require('@/assets/images/fproduct5.jpg'), price: 2990000, oldPrice: 3990000},
       { name: 'Điện thoại iPhone 13', image: require('@/assets/images/fproduct6.jpg'), price: 18990000, oldPrice: 20990000 },
       { name: 'Máy lọc nước Kangaroo', image: require('@/assets/images/fproduct7.jpg'), price: 3990000, oldPrice: 5790000}
      ]
    }
  },
  computed: {
    visibleProducts() {
      return this.showAll ? this.products : this.products.slice(0, this.limit)
    }
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll
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
.show-more-btn {
  margin: 20px auto 0 auto;
  display: block;
  background: rgba(220, 38, 38, 0.12);
  color: #d32f2f;
  border: 1px solid #d32f2f;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
}
.show-more-btn:hover {
  background: #d32f2f;
  color: #fff;
}
@media (max-width: 900px) {
  .feature-products {
    padding: 12px 8px;
    border-radius: 6px;
  }
  .fp-list {
    gap: 12px;
  }
}
@media (max-width: 600px) {
  .feature-products {
    padding: 7px 2px;
    border-radius: 5px;
  }
  .fp-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 7px;
    align-items: stretch;
    margin-top: 7px;
    justify-content: space-between;
  }
  .fp-list > * {
    width: 48%;
    min-width: 120px;
    box-sizing: border-box;
  }
  .show-more-btn {
    font-size: 14px;
    padding: 7px 10px;
    border-radius: 5px;
    margin: 12px auto 0 auto;
  }
}
</style>