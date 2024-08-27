<script setup lang="ts">
const catName = '小黑'
const catBreed = '橘猫'
</script>

<template>
  <view class="album-comments-info">
    <image class="avatar" src="@/static/images/cat.jpg" mode="aspectFill" />
    <view class="cat-info">
      <view class="first-line">
        <text class="cat-name">{{ catName }}</text>
        <image
          class="cat-gender"
          src="@/static/images/male.png"
          mode="aspectFill"
        />
      </view>
      <text class="cat-breed">{{ '品种：' + catBreed }}</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.album-comments-info {
  display: flex;
  width: 722rpx;
  height: 168rpx;
  margin-top: 194rpx;
  margin-left: 14rpx;
  border-radius: 24rpx;
  background-color: #ffffff;
  .avatar {
    width: 128rpx;
    height: 128rpx;
    margin-left: 20rpx;
    margin-top: 20rpx;
    border-radius: 16rpx;
  }
  .cat-info {
    display: flex;
    flex-direction: column;
    width: 110rpx;
    height: 88rpx;
    margin-top: 40rpx;
    margin-left: 32rpx;
    .first-line {
      display: flex;
      align-items: center;
      .cat-name {
        height: 44rpx;
        margin-bottom: auto;
        font-size: 30rpx;
        line-height: 44rpx;
        color: #000000;
        text-align: center;
      }
      .cat-gender {
        width: 40rpx;
        height: 40rpx;
        margin-top: 2rpx;
        margin-left: 10rpx;
      }
    }
    .cat-breed {
      height: 44rpx;
      margin-top: 0;
      font-size: 20rpx;
      line-height: 44rpx;
      color: #878787;
    }
  }
}
</style>
