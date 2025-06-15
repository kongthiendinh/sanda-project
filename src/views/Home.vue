<template>
  <div>
    <div class="block1">
      <MainMenu class="left-menu"/>
      <div class="right-block">
        <HomeBanner />
        <HomeCategories />
      </div>
    </div>
    <div class="block2">
      <HomeFlashSale />
      <HomeFeatureProducts />
      <HomeNews />
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/Common/MainMenu.vue'
import HomeBanner from '@/components/Home/HomeBanner.vue'
import HomeCategories from '@/components/Home/HomeCategories.vue'
import HomeFeatureProducts from '@/components/Home/HomeFeatureProducts.vue'
import HomeFlashSale from '@/components/Home/HomeFlashSale.vue'
import HomeNews from '@/components/Home/HomeNews.vue'

export default {
  components: {
    MainMenu,
    HomeBanner,
    HomeCategories,
    HomeFeatureProducts,
    HomeFlashSale,
    HomeNews
  }
}
</script>

<style scoped>
.block1,
.block2 {
  max-width: 1200px;
  margin: 32px auto 0 auto;
  align-items: flex-start;
}
.block1 {
  display: flex;
  gap: 24px;
  max-width: 1200px;
  margin: 32px auto 0 auto;
  align-items: flex-start;
}
.left-menu {
  width: 250px;
  min-width: 220px;
}
.right-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.block2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Tablet */
@media (max-width: 900px) {
  .block1,
  .block2 {
    flex-direction: column;
    max-width: 100%;
    gap: 0;
    margin-top: 16px;
    align-items: stretch;
  }
  .left-menu,
  .right-block {
    width: 100%;
    min-width: unset;
  }
  .block1 {
    gap: 0;
  }
  .right-block {
    gap: 16px;
  }
  .block2 {
    gap: 16px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .block1,
  .block2 {
    margin-top: 8px;
    padding: 0 4px;
  }
  .block1 {
    gap: 0;
  }

  /* Ẩn side menu trên mobile */
  .left-menu {
    display: none !important;
  }

  .right-block {
    width: 100%;
    min-width: unset;
    gap: 10px;
  }
  .block2 {
    gap: 10px;
  }
}
</style>