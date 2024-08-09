<script setup lang="ts">

</script>

<template>
  <view class="cat-item">
    <image
      class="cat-icon"
      src="/static/images/cat.jpg"
      mode="aspectFill"
    />
    <view class="cat-count">
      <text class="cat-count-text">
        {{ 12 }}
      </text>
    </view>
    <view class="cat-name">
      {{"猫猫"}}
    </view>
  </view>
</template>

<style scoped lang="scss">
  .cat-item {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 144rpx;
    height: 208rpx;
    gap: 20rpx;
    .cat-icon {
      width: 144rpx;
      height: 144rpx;
      border-radius: 72rpx;
    }
    .cat-count {
      display: flex;
      position: relative;
      top: -46rpx;
      left: 90rpx;
      width: 54rpx;
      height: 28rpx;
      border-radius: 16rpx;
      border: 2rpx solid #fff;
      background-color: #0094ff;
      align-items: center;
      justify-content: center;
      .cat-count-text {
        text-align: center;
        width: 22rpx;
        height: 44rpx;
        font-weight: 500;
        font-size: 18rpx;
        line-height: 44rpx;
        color: #fff;
      }
    }
    .cat-name {
      margin-top: -46rpx;
      width: 144rpx;
      height: 44rpx;
      font-weight: 400;
      font-size: 28rpx;
      line-height: 44rpx;
      color: #000;
      text-align: center;
    }
  }
</style>