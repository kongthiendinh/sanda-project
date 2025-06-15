<template>
  <div class="banner">
    <img src="https://via.placeholder.com/1200x300?text=Banner+Meta.vn" alt="Banner" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner img {
  width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
  height: auto;
  max-height: 320px;
  object-fit: cover;
  display: block;
}

/* Tablet */
@media (max-width: 900px) {
  .banner img {
    max-height: 200px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .banner img {
    max-height: 60px;        /* Giảm từ 120px xuống 60px (1 nửa) */
    border-radius: 5px;
    margin: 0.5rem 0;
  }
}
</style>