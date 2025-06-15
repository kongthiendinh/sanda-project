<template>
  <div class="countdown-box">
    Kết thúc sau <span class="countdown">{{ countdown }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      endTime: Date.now() + 2 * 60 * 60 * 1000, // mặc định 2 tiếng từ lúc load
      countdown: "01:59:32"
    };
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    updateCountdown() {
      const now = Date.now();
      let diff = Math.max(0, this.endTime - now);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * 1000 * 60 * 60;
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * 1000 * 60;
      const seconds = Math.floor(diff / 1000);

      this.countdown = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0'),
      ].join(':');
    }
  }
};
</script>
<style scoped>
.countdown-box {
  font-size: 16px;
  color: #e53935;
  font-weight: bold;
}
.countdown {
  margin-left: 6px;
  font-size: 18px;
  background: #ffebee;
  padding: 2px 8px;
  border-radius: 5px;
  letter-spacing: 1px;
}

/* Tablet */
@media (max-width: 900px) {
  .countdown-box {
    font-size: 15px;
  }
  .countdown {
    font-size: 16px;
    padding: 2px 6px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .countdown-box {
    font-size: 14px;
  }
  .countdown {
    font-size: 15px;
    padding: 1px 4px;
  }
}
</style>