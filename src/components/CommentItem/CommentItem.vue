<template>
  <view class="comment-item">
    <view class="comment-item-header">
      <image class="comment-item-header-avatar" :src="comment.user.avatar" />
      <view class="comment-item-header-info">
        <text class="comment-item-header-info-name">{{
          comment.user.name
        }}</text>
        <text class="comment-item-header-info-time">{{ comment.time }}</text>
      </view>
      <view class="comment-item-header-like">
        <text class="comment-item-header-like-count">{{
          comment.like_count
        }}</text>
        <image
          class="comment-item-header-like-icon"
          src="/static/images/like.png"
          mode="aspectFill"
        />
      </view>
    </view>
    <view class="comment-item-content">{{ comment.content }}</view>
    <view class="line" />
  </view>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface comment {
  user: {
    id: string
    name: string
    avatar: string
  }
  content: string
  time: string
  like_count: number
}
const props = defineProps({
  comment: {
    type: Object,
  },
})
</script>

<style scoped lang="scss">
.comment-item {
  width: 686rpx;
  height: 258rpx;
  margin-left: 32rpx;
  margin-right: 32rpx;
  margin-top: 28rpx;
  background-color: #ffffff;
  .comment-item-header {
    display: flex;
    .comment-item-header-avatar {
      width: 80rpx;
      height: 80rpx;
      margin-top: 8rpx;
      border-radius: 40rpx;
      background-color: #d9d9d9;
    }
    .comment-item-header-info {
      display: flex;
      flex-direction: column;
      margin-top: 4rpx;
      margin-left: 16rpx;
      height: 88rpx;
      width: 130rpx;
      .comment-item-header-info-name {
        text-align: center;
        font-size: 30rpx;
        font-weight: 400;
        height: 44rpx;
        line-height: 44rpx;
        color: #1a1a1a;
      }
      .comment-item-header-info-time {
        font-size: 24rpx;
        font-weight: 400;
        height: 44rpx;
        line-height: 44rpx;
        text-align: center;
        color: #444444;
      }
    }
    .comment-item-header-like {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-top: 26rpx;
      height: 44rpx;
      .comment-item-header-like-count {
        margin-bottom: 6rpx;
        font-size: 30rpx;
        height: 32rpx;
        line-height: 44rpx;
        text-align: center;
        color: #7f7f7f;
      }
      .comment-item-header-like-icon {
        margin-left: 4rpx;
        width: 44rpx;
        height: 44rpx;
      }
    }
  }
  .comment-item-content {
    width: 590rpx;
    margin-top: 12rpx;
    margin-left: 96rpx;
  }
  .line {
    width: 590rpx;
    height: 0;
    margin-left: 96rpx;
    margin-top: 22rpx;
    border: 2rpx solid #d4d4d4;
  }
}
</style>
