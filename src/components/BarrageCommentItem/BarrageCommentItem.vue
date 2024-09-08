<script setup lang="ts">
const props = defineProps({
  comment: String,
})
const comment = ref(props.comment)
// 随机高度
const getRandomHeight = () => {
  return Math.random() * 100 + 200 + 'rpx'
}

const barrageCommentItemAnimation = computed(() => {
  return {
    animation: `move 3s linear infinite`,
    top: getRandomHeight(),
  }
})
</script>

<template>
  <view
    class="h-86rpx rounded-24rpx px=16rpx py-40rpx bg-black/80 barrage-comment-item"
    :style="{ ...barrageCommentItemAnimation, right: '100vw', left: 'auto' }"
  >
    <text class="text-34rpx text-center h-44rpx leading-44rpx c-#fff">{{ comment }}</text>
  </view>
</template>

<style scoped lang="scss">
.barrage-comment-item {
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
}

@keyframes move {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100vw);
  }
}
</style>
