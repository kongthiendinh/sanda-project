<template>
  <section class="flash-sale">
    <div class="fs-header">
      <h2>Flash Sale <span>🔥</span></h2>
      <FlashSaleCountdown />
    </div>
    <div class="fs-products">
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
import FlashSaleCountdown from './FlashSaleCountdown.vue'
export default {
  components: { ProductCard, FlashSaleCountdown },
  data() {
    return {
      showAll: false,
      limit: 8,
      products: [
        { name: 'Sàn đá công nghệ SPC chất lượng cao MS2-401', image: require('@/assets/images/product1.jpg'), price: 12000000, oldPrice: 16000000, sale: 25 },
        { name: 'Sàn đá công nghệ SPC chất lượng kém MS2-402', image: require('@/assets/images/product2.jpg'), price: 1250000, oldPrice: 1850000, sale: 32 },
        { name: 'Sàn đá bền MS2-403', image: require('@/assets/images/product3.jpg'), price: 5990000, oldPrice: 6990000, sale: 15 },
        { name: 'Sàn đá trơn MS2-404', image: require('@/assets/images/product4.jpg'), price: 2490000, oldPrice: 3490000, sale: 29 },
        { name: 'Sàn đá trượt MS2-405', image: require('@/assets/images/product5.jpg'), price: 15990000, oldPrice: 18990000, sale: 16 },
        { name: 'Sàn đá bóng MS2-406', image: require('@/assets/images/product6.jpg'), price: 2990000, oldPrice: 3790000, sale: 21 },
        { name: 'Sàn đá không có công nghệ MS2-407', image: require('@/assets/images/product7.jpg'), price: 850000, oldPrice: 1200000, sale: 29 },
        { name: 'Sàn đá rẻ MS2-408', image: require('@/assets/images/product8.jpg'), price: 1290000, oldPrice: 1690000, sale: 24 },
        { name: 'Sàn đá đắt MS2-409', image: require('@/assets/images/product9.jpg'), price: 1790000, oldPrice: 2190000, sale: 18 }
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
.flash-sale {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  padding: 20px 24px;
}
.fs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fs-products {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
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
  .flash-sale {
    padding: 12px 8px;
    border-radius: 6px;
  }
  .fs-products {
    gap: 12px;
  }
}

@media (max-width: 600px) {
  .flash-sale {
    padding: 7px 2px;
    border-radius: 5px;
  }
  .fs-header {
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .fs-products {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 7px;
    align-items: stretch;
    justify-content: space-between;
    margin-top: 7px;
  }
  .fs-products > * {
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