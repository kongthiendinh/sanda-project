<template>
  <div class="category-card">
    <img :src="category.img" :alt="category.name" />
    <div class="name">{{ category.name }}</div>
  </div>
</template>
<script>
export default {
  props: ['category']
}
</script>
<style scoped>
.category-card {
  text-align: center;
  cursor: pointer;
  transition: transform .2s;
  padding: 8px 0;
}
.category-card:hover {
  transform: translateY(-6px) scale(1.04);
}
.category-card img {
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin-bottom: 8px;
}
.name {
  font-weight: bold;
  color: #e05c04;
  font-size: 16px;
  line-height: 1.25;
  word-break: break-word;
}

/* Tablet */
@media (max-width: 900px) {
  .category-card img {
    width: 54px;
    height: 54px;
  }
  .name {
    font-size: 14px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .category-card img {
    width: 40px;
    height: 40px;
    margin-bottom: 4px;
  }
  .name {
    font-size: 13px;
  }
}
</style>