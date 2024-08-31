<script setup lang="ts">
console.log('TeamChoosing')
</script>

<template>
  <view class="team-choosing">
    <image class="team-icon" src="/static/images/team-icon.png"></image>
    <text class="team-name">{{ `我是一个团队的名字` }}</text>
    <view class="drop-down-button"></view>
  </view>
</template>

<style scoped lang="scss">
.team-choosing {
  display: flex;
  margin-left: 40rpx;
  margin-top: 192rpx;
  margin-right: 40rpx;
  padding-left: 36rpx;
  height: 80rpx;
  border-radius: 64rpx;
  background-color: #ffffff;
  .team-icon {
    width: 32rpx;
    height: 32rpx;
    margin-top: 24rpx;
  }
  .team-name {
    margin-left: 16rpx;
    margin-top: 18rpx;
    width: 252rpx;
    height: 44rpx;
    font-size: 28rpx;
    font-weight: 400;
    line-height: 44rpx;
    align-content: center;
    color: #1a1a1a;
  }
}
</style>
