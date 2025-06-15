<template>
  <div class="card" @click="$router.push('/product/' + product.id)">
    <img :src="product.image" :alt="product.name" class="product-img" />
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }}₫</p>
    <button>Mua ngay</button>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  padding: 1rem;
  text-align: center;
  transition: box-shadow 0.2s;
  cursor: pointer;
  width: 210px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.product-img {
  width: 100%;
  max-width: 180px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
}
.price {
  color: #ff6600;
  font-weight: bold;
  font-size: 1.1rem;
}
button {
  margin-top: 1rem;
  background: #ff6600;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 24px;
  cursor: pointer;
}
button:hover {
  background: #e65c00;
}

/* Tablet */
@media (max-width: 900px) {
  .card {
    width: 140px;
    padding: 0.7rem;
  }
  .product-img {
    max-width: 120px;
    height: 120px;
  }
  h3 {
    font-size: 1rem;
  }
  .price {
    font-size: 1rem;
  }
  button {
    padding: 7px 18px;
    font-size: 0.97rem;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .card {
    width: 100%;
    padding: 0.55rem;
    margin-bottom: 10px;
  }
  .product-img {
    max-width: 90vw;
    height: 90vw;
    max-height: 112px;
  }
  h3 {
    font-size: 0.97rem;
  }
  .price {
    font-size: 0.97rem;
  }
  button {
    padding: 6px 0;
    width: 100%;
    font-size: 0.97rem;
  }
}
</style>