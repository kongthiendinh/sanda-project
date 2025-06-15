<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <div class="sale-label" v-if="product.sale">-{{ product.sale }}%</div>
    <div class="name">{{ product.name }}</div>
    <div class="price">
      <span class="sale">{{ formatPrice(product.price) }}₫</span>
      <span class="old" v-if="product.oldPrice">{{ formatPrice(product.oldPrice) }}₫</span>
    </div>
    <!-- Đã xoá button Mua ngay -->
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    formatPrice(p) {
      return p.toLocaleString('vi-VN')
    }
  }
}
</script>

<style scoped>
.product-card {
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 1px 5px #eee;
  width: 245px;
  padding: 18px 14px;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: box-shadow .2s, transform .2s;
}
.product-card:hover {
  box-shadow: 0 6px 18px #e0e0e0;
  transform: translateY(-6px) scale(1.02);
}
.product-card img {
  width: 100%;
  height: 170px;
  object-fit: contain;
  margin-bottom: 10px;
}
.sale-label {
  position: absolute;
  left: 0; top: 0;
  background: #e05c04;
  color: #fff;
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 8px 0 8px 0;
}
.name {
  font-weight: bold;
  color: #222;
  margin-bottom: 6px;
  font-size: 15px;
  min-height: 34px;
  line-height: 1.2;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.price {
  margin-bottom: 9px;
}
.sale {
  color: #e05c04;
  font-size: 17px;
  font-weight: bold;
}
.old {
  color: #999;
  text-decoration: line-through;
  font-size: 14px;
  margin-left: 8px;
}

@media (max-width: 900px) {
  .product-card {
    width: 180px;
    padding: 10px 5px;
    border-radius: 7px;
  }
  .product-card img {
    height: 110px;
    border-radius: 7px 7px 0 0;
  }
  .sale-label {
    font-size: 12px;
    padding: 3px 8px;
    border-radius: 7px 0 7px 0;
  }
  .name {
    font-size: 14px;
    min-height: 26px;
  }
  .sale {
    font-size: 15px;
  }
  .old {
    font-size: 12px;
    margin-left: 5px;
  }
}

@media (max-width: 600px) {
  .product-card {
    width: 95vw;
    min-width: 0;
    padding: 8px 3px;
    border-radius: 5px;
  }
  .product-card img {
    height: 70vw;
    min-height: 50px;
    max-height: 110px;
    border-radius: 5px 5px 0 0;
  }
  .sale-label {
    font-size: 11px;
    padding: 2px 7px;
    border-radius: 5px 0 5px 0;
  }
  .name {
    font-size: 13px;
    min-height: 22px;
  }
  .sale {
    font-size: 14px;
  }
  .old {
    font-size: 11px;
    margin-left: 4px;
  }
}
</style>