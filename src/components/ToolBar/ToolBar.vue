<template>
  <view class="tool-bar">
    <location-album />
    <tools />
  </view>
</template>

<script setup lang="ts">
import LocationAlbum from '@/components/LocationAlbum/LocationAlbum.vue'
import Tools from '@/components/Tools/Tools.vue'
</script>

<style scoped lang="scss">
.tool-bar {
  display: flex;
  justify-content: space-between;
  width: 710rpx;
  height: 128rpx;
  margin-top: 24rpx;
  margin-left: 20rpx;
}
</style>
