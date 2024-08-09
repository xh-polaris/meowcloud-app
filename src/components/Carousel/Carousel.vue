<script setup lang="ts">

</script>

<template>
  <view class="carousel">
    <view class="carousel-content">
      <view class="interesting-functions"></view>
      <view class="right"></view>
    </view>
  </view>

</template>

<style scoped lang="scss">
  .carousel {
    width: 710rpx;
    height: 272rpx;
    margin-top: 216rpx;
    margin-left: 20rpx;
    background-color: #fff;
    border-radius: 16rpx;
    .carousel-content {
      display: flex;
      .interesting-functions {
        width: 408rpx;
        height: 108rpx;
        margin-left: 20rpx;
        margin-top: 18rpx;
        background-color: #d9d9d9;
        border-radius: 4rpx;
      }
      .right {
        width: 240rpx;
        height: 240rpx;
        margin-left: 26rpx;
        margin-top: 16rpx;
        background-color: #d9d9d9;
        border-radius: 4rpx;
      }
    }
  }
</style>