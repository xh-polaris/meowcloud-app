<template>
 <view class="location-album">
   <view class="left">
     <text class="title">地点相册</text>
     <text class="achievements">
       已点亮个{{5}}地点
       已收集{{8}}只猫猫
     </text>
   </view>
   <view class="right"></view>
 </view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .location-album {
    display: flex;
    width: 278rpx;
    height: 128rpx;
    background-color: #ffffff;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      justify-content:space-between ;
      width: 82rpx;
      height: 94rpx;
      .title {
        width: 64rpx;
        height: 44rpx;
        margin-top: 12rpx;
        margin-left: 14rpx;
        font-size: 16rpx;
        font-weight: 500;
        color: #000000;
        line-height: 44rpx;
        text-align: center;
      }
      .achievements{
        margin-top: 2rpx;
        margin-left: 14rpx;
        width: 82rpx;
        height: 48rpx;
        text-align: center;
        font-size: 12rpx;
        line-height: 24rpx;
        font-weight: 400;
        color: #3d3d3d;
        //letter-spacing: -0.82rpx
      }
    }
    .right {
      margin-right: 12rpx;
      margin-top: 12rpx;
      width: 148rpx;
      height: 104rpx;
      border-radius: 8rpx;
      background-color: #d9d9d9;
    }
  }
</style>