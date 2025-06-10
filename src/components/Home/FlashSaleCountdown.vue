<template>
  <div class="countdown-box">
    Kết thúc sau <span class="countdown">{{ countdown }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      countdown: "01:59:32" // ví dụ, bạn nên tính dynamic
    }
  }
}
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
}
</style>