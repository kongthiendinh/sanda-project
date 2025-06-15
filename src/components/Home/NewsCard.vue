<template>
  <div class="news-card">
    <img :src="news.img" :alt="news.title" />
    <div class="info">
      <div class="title">{{ news.title }}</div>
      <div class="short">{{ news.short }}</div>
      <div class="date">{{ formatDate(news.date) }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['news'],
  methods: {
    formatDate(d) {
      const date = new Date(d)
      return date.toLocaleDateString('vi-VN')
    }
  }
}
</script>
<style scoped>
.news-card {
  display: flex;
  gap: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 4px #eee;
  background: #fafafa;
  width: 400px;
  cursor: pointer;
  transition: box-shadow .2s, transform .2s;
}
.news-card:hover {
  box-shadow: 0 6px 18px #e0e0e0;
  transform: translateY(-5px) scale(1.02);
}
.news-card img {
  width: 120px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 0;
  min-width: 0;
}
.title {
  font-weight: bold;
  color: #e05c04;
  margin-bottom: 5px;
  font-size: 15px;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.short {
  color: #444;
  font-size: 14px;
  margin-bottom: 6px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.date {
  color: #888;
  font-size: 13px;
}

@media (max-width: 900px) {
  .news-card {
    width: 320px;
    border-radius: 7px;
  }
  .news-card img {
    width: 90px;
    height: 68px;
    border-radius: 7px 0 0 7px;
  }
  .info {
    padding: 6px 0;
  }
  .title {
    font-size: 14px;
  }
  .short {
    font-size: 13px;
  }
  .date {
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  .news-card {
    width: 100%;
    min-width: 0;
    border-radius: 5px;
    gap: 7px;
  }
  .news-card img {
    width: 65px;
    height: 48px;
    border-radius: 5px 0 0 5px;
  }
  .info {
    padding: 3px 0;
  }
  .title {
    font-size: 13px;
  }
  .short {
    font-size: 12px;
    -webkit-line-clamp: 3;
  }
  .date {
    font-size: 11px;
  }
}
</style>