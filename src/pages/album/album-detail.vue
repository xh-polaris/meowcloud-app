<template>
  <album-info />
  <view class="flex mt-20rpx"></view>
  <view class="action-button" v-for="(action, index) in actionList" :key="index">
    <text>{{ action.name }}</text>
    <text>{{ action.number }}</text>
  </view>
</template>

<script setup lang="ts">
import AlbumInfo from '@/components/AlbumInfo/AlbumInfo.vue'

const shareNum = 108
const commentNum = 108
const followNum = 108

const actionList = [
  { name: '分享', number: shareNum },
  { name: '评论', number: commentNum },
  { name: '关注', number: followNum },
]
</script>

<style scoped lang="scss">
.action-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 144rpx;
  height: 76rpx;
  padding: 16rpx 40rpx 16rpx 40rpx;
  margin-left: 20rpx;
  background-color: #fff;
  border-radius: 16rpx;
}
.action-button text {
  font-size: 30rpx;
  line-height: 44rpx;
  color: #000;
  text-align: center;
}
</style>
