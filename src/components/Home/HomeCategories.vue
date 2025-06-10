<template>
  <section class="categories">
    <h2>Danh mục nổi bật</h2>
    <div class="category-list">
      <CategoryCard
        v-for="cat in visibleCategories"
        :key="cat.name"
        :category="cat"
      />
    </div>
    <button
      v-if="categories.length > limit"
      class="show-more-btn"
      @click="toggleShowAll"
    >
      {{ showAll ? 'Thu gọn' : 'Xem thêm chuyên mục' }}
    </button>
  </section>
</template>

<script>
import CategoryCard from './CategoryCard.vue'
export default {
  components: { CategoryCard },
  data() {
    return {
      showAll: false,
      limit: 8,
      categories: [
        { name: 'Điện máy', img: require('@/assets/images/category1.png') },
        { name: 'Gia dụng', img: require('@/assets/images/category2.png') },
        { name: 'Công nghệ', img: require('@/assets/images/category3.png') },
        { name: 'Thời trang', img: require('@/assets/images/category4.png') },
        { name: 'Sức khỏe', img: require('@/assets/images/category5.png') },
        { name: 'Thể thao', img: require('@/assets/images/category6.png') },
        { name: 'Nhà cửa', img: require('@/assets/images/category7.png') },
        { name: 'Làm đẹp', img: require('@/assets/images/category8.png') },
        { name: 'Ô tô xe máy', img: require('@/assets/images/category9.png') },
        { name: 'Sách', img: require('@/assets/images/category10.png') }
      ]
    }
  },
  computed: {
    visibleCategories() {
      return this.showAll ? this.categories : this.categories.slice(0, this.limit)
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
.categories {
  width: 100%;
  max-width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;
  margin-top: 0;
  box-sizing: border-box;
}
.category-list {
  display: flex;
  flex-wrap: wrap;           /* Cho phép xuống dòng khi hết khung */
  gap: 32px;
  justify-content: flex-start; /* Items sẽ bám sát trái, không dàn đều */
  margin-top: 15px;
}
@media (max-width: 900px) {
  .category-list {
    flex-direction: row;      /* Đảm bảo luôn xếp ngang, không chuyển sang dọc */
    flex-wrap: wrap;
    gap: 18px;
  }
}
.show-more-btn {
  margin: 20px auto 0 auto;
  display: block;
  background: rgba(220, 38, 38, 0.12); /* đỏ nhạt, có thể tăng giảm opacity */
  color: #d32f2f; /* chữ đỏ đậm */
  border: 1px solid #d32f2f;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
}

.show-more-btn:hover {
  background: #d32f2f;    /* nền đỏ đậm khi hover */
  color: #fff;            /* chữ trắng khi hover */
}

@media (max-width: 900px) {
  .categories {
    padding: 12px 8px;
  }
  .category-list {
    flex-direction: column;
    gap: 18px;
  }
}
</style>