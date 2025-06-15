<template>
  <section class="home-news">
    <h2>Tin tức mới</h2>
    <div class="news-list">
      <NewsCard v-for="n in news" :key="n.title" :news="n" />
    </div>
  </section>
</template>
<script>
import NewsCard from './NewsCard.vue'
export default {
  components: { NewsCard },
  data() {
    return {
      news: [
        { title: '10 mẹo sử dụng tivi bền lâu', img: require('@/assets/images/news1.jpg'), short: 'Những bí quyết giúp tivi luôn sắc nét và bền lâu...', date: '2025-06-01' },
        { title: 'Cách vệ sinh máy lọc không khí', img: require('@/assets/images/news2.jpg'), short: 'Máy lọc hoạt động tốt nếu được vệ sinh đúng cách...', date: '2025-05-28' }
      ]
    }
  }
}
</script>
<style scoped>
.home-news {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  padding: 20px 24px;
}
.news-list {
  display: flex;
  gap: 24px;
  margin-top: 18px;
}
@media (max-width: 900px) {
  .home-news {
    padding: 12px 8px;
    border-radius: 6px;
  }
  .news-list {
    gap: 12px;
  }
}
@media (max-width: 600px) {
  .home-news {
    padding: 7px 2px;
    border-radius: 5px;
  }
  .news-list {
    flex-direction: column;
    gap: 7px;
    margin-top: 7px;
  }
}
</style>