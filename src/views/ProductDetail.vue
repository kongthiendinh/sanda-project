<template>
  <main class="product-detail">
    <div class="container">
      <img :src="product.image" class="detail-img" />
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }}₫</p>
        <p>Mô tả sản phẩm sẽ được cập nhật ở đây...</p>
        <button>Mua ngay</button>
      </div>
    </div>
  </main>
</template>

<script>
const dummyProducts = [
  { id: 1, name: 'Điện thoại Samsung', price: '5.990.000', image: 'https://via.placeholder.com/180?text=Samsung' },
  { id: 2, name: 'Laptop Asus', price: '12.990.000', image: 'https://via.placeholder.com/180?text=Asus' },
  { id: 3, name: 'Tivi LG 43 inch', price: '7.990.000', image: 'https://via.placeholder.com/180?text=LG+Tivi' },
  { id: 4, name: 'Máy giặt Electrolux', price: '6.490.000', image: 'https://via.placeholder.com/180?text=Electrolux' },
  { id: 5, name: 'Máy lạnh Daikin', price: '9.990.000', image: 'https://via.placeholder.com/180?text=Daikin' }
]

export default {
  data() {
    return {
      product: {}
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.product = dummyProducts.find(p => p.id === id) || dummyProducts[0]
  }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 2rem auto;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
}

/* Responsive Tablet */
@media (max-width: 900px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 1.5rem;
    max-width: 98vw;
  }
  .detail-img {
    width: 270px;
    height: 270px;
  }
}

/* Responsive Mobile */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 0.7rem;
    gap: 1rem;
    max-width: 100vw;
  }
  .detail-img {
    width: 180px;
    height: 180px;
  }
  .info h1 {
    font-size: 1.3rem;
  }
  .price {
    font-size: 1.1rem;
  }
  button {
    width: 100%;
    padding: 10px 0;
    font-size: 1rem;
  }
}

.detail-img {
  width: 340px;
  height: 340px;
  object-fit: contain;
  border-radius: 8px;
  background: #f3f3f3;
}
.info {
  flex: 1;
}
.price {
  color: #ff6600;
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}
button {
  background: #ff6600;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 32px;
  font-size: 1.1rem;
  cursor: pointer;
}
button:hover {
  background: #e65c00;
}
</style>