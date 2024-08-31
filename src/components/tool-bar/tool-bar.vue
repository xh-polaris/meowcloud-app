<template>
  <view class="tool-bar">
    <location-album/>
    <tools/>
  </view>
</template>

<script setup lang="ts">
import LocationAlbum from '@/components/LocationAlbum/LocationAlbum.vue';
import Tools from '@/components/Tools/Tools.vue';
</script>

<style scoped lang="scss">
.tool-bar {
  display: flex;
  height: 128rpx;
  width: 710rpx;
  margin-left: 20rpx;
  margin-top: 24rpx;
  justify-content: space-between;
}
</style>