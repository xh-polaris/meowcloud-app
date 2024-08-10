<script setup lang="ts">

</script>

<template>
  <view class="carousel">
    <view class="carousel-content">
      <view class="interesting-functions">
        <text class="interesting-functions-text">
          趣味功能
        </text>
      </view>
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
        display: flex;
        width: 408rpx;
        height: 108rpx;
        margin-left: 20rpx;
        margin-top: 18rpx;
        background-color: #d9d9d9;
        border-radius: 4rpx;
        color: #000;
        .interesting-functions-text {
          margin-left: 136rpx;
          margin-top: 32rpx;
          width: 104rpx;
          height: 44rpx;
          font-size: 26rpx;
          line-height: 44rpx;
          font-weight: 400;
          color: #000;
        }
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