<template>
  <view class="photo-descriptions">
    <text class="photo-descriptions-text">{{ photoDescriptionsText }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  photoDescriptions: String,
})

const photoDescriptionsText = ref(props.photoDescriptions)
</script>

<style scoped lang="scss">
.photo-descriptions {
  position: fixed;
  bottom: 232rpx;
  left: 36rpx;
  max-width: 470rpx;
  padding: 8rpx 12rpx 8rpx 12rpx;
  background-color: #ffffff;
  border-radius: 10rpx;
  box-shadow: 0 0 40rpx 0 #0000001f;

  .photo-descriptions-text {
    font-size: 26rpx;
    line-height: 44rpx;
    color: #000;
  }
}
</style>
