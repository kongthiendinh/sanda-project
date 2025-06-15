<template>
  <section class="banner">
    <div class="main-banner-wrapper">
      <div class="main-banner-slide" :style="{transform: `translateX(-${active * 100}%)`}">
        <img
          v-for="(img, idx) in banners"
          :key="idx"
          :src="img"
          class="main-banner"
          :alt="`Banner ${idx+1}`"
        />
      </div>
      <div class="banner-controls">
        <button @click="prevSlide">&#8592;</button>
        <button @click="nextSlide">&#8594;</button>
      </div>
      <div class="banner-dots">
        <span
          v-for="(img, idx) in banners"
          :key="idx"
          :class="{active: idx === active}"
          @click="goTo(idx)"
        ></span>
      </div>
    </div>
    <div class="side-banners">
      <img src="@/assets/images/banner2.jpg" alt="Banner phụ 1" />
      <img src="@/assets/images/banner2.jpg" alt="Banner phụ 2" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        require('@/assets/images/banner1.jpg'),
        require('@/assets/images/banner2.jpg'),
        require('@/assets/images/banner1.jpg')
      ],
      active: 0,
      intervalId: null
    }
  },
  mounted() {
    this.autoSlide()
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
  methods: {
    nextSlide() {
      this.active = (this.active + 1) % this.banners.length
    },
    prevSlide() {
      this.active = (this.active - 1 + this.banners.length) % this.banners.length
    },
    goTo(idx) {
      this.active = idx
    },
    autoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide()
      }, 3500)
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  border-radius: 8px;
  padding: 0;
  box-sizing: border-box;
  background: none !important;
}
.main-banner-wrapper {
  position: relative;
  width: 70%;
  overflow: hidden;
  border-radius: 8px;
  background: none !important;
  min-height: 90px;
}
.main-banner-slide {
  display: flex;
  transition: transform 0.5s cubic-bezier(.75,0,.25,1);
  width: 100%;
  height: 220px;
}
.main-banner {
  width: 100%;
  height: 220px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 8px;
  background: none !important;
}
.banner-controls {
  position: absolute;
  top: 50%;
  left: 0; right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 2;
  pointer-events: none;
}
.banner-controls button {
  background: rgba(255,255,255,0.7);
  border: none;
  border-radius: 50%;
  font-size: 18px;
  padding: 8px 12px;
  margin: 0 12px;
  cursor: pointer;
  pointer-events: all;
  transition: background .15s;
}
.banner-controls button:hover {
  background: #fff;
}
.banner-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 7px;
  z-index: 2;
}
.banner-dots span {
  display: block;
  width: 12px; height: 12px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  border: 2px solid #d50000;
  transition: opacity .2s, background .2s;
}
.banner-dots span.active {
  opacity: 1;
  background: #d50000;
  border: 2px solid #fff;
}
.side-banners {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 130px;
}
.side-banners img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 110px;
  background: none !important;
}
@media (max-width: 900px) {
  .banner { flex-direction: column; }
  .main-banner-wrapper,
  .main-banner-slide,
  .main-banner { width: 100%; }
  .main-banner-slide, .main-banner { height: 160px; }
  .side-banners { width: 100%; flex-direction: row; gap: 10px; min-width: unset;}
  .side-banners img { height: 70px; }
}
@media (max-width: 600px) {
  .banner {
    gap: 7px;
    border-radius: 5px;
  }
  .main-banner-wrapper,
  .main-banner-slide,
  .main-banner { border-radius: 5px; }
  .main-banner-slide, .main-banner { height: 98px; }
  .side-banners { gap: 5px; }
  .side-banners img {
    border-radius: 5px;
    height: 36vw;
    min-height: 40px;
    max-height: 60px;
  }
}
</style>