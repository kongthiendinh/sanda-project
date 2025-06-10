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
}
</style>