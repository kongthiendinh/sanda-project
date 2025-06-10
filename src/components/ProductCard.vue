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
</style>