<template>
  <view class="comment-item">
    <view class="comment-item-header">
      <image class="comment-item-header-avatar" :src="comment.user.avatar" />
      <view class="comment-item-header-info">
        <text class="comment-item-header-info-name">{{ comment.user.name }}</text>
        <text class="comment-item-header-info-time">{{ comment.time }}</text>
      </view>
      <view class="comment-item-header-like">
        <text class="comment-item-header-like-count">{{ comment.like_count }}</text>
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
// eslint-disable-next-line vue/no-dupe-keys
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
  margin-top: 28rpx;
  margin-right: 32rpx;
  margin-left: 32rpx;
  background-color: #ffffff;

  .comment-item-header {
    display: flex;

    .comment-item-header-avatar {
      width: 80rpx;
      height: 80rpx;
      margin-top: 8rpx;
      background-color: #d9d9d9;
      border-radius: 40rpx;
    }

    .comment-item-header-info {
      display: flex;
      flex-direction: column;
      width: 130rpx;
      height: 88rpx;
      margin-top: 4rpx;
      margin-left: 16rpx;

      .comment-item-header-info-name {
        height: 44rpx;
        font-size: 30rpx;
        font-weight: 400;
        line-height: 44rpx;
        color: #1a1a1a;
        text-align: center;
      }

      .comment-item-header-info-time {
        height: 44rpx;
        font-size: 24rpx;
        font-weight: 400;
        line-height: 44rpx;
        color: #444444;
        text-align: center;
      }
    }

    .comment-item-header-like {
      display: flex;
      align-items: center;
      height: 44rpx;
      margin-top: 26rpx;
      margin-left: auto;

      .comment-item-header-like-count {
        height: 32rpx;
        margin-bottom: 6rpx;
        font-size: 30rpx;
        line-height: 44rpx;
        color: #7f7f7f;
        text-align: center;
      }

      .comment-item-header-like-icon {
        width: 44rpx;
        height: 44rpx;
        margin-left: 4rpx;
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
    margin-top: 22rpx;
    margin-left: 96rpx;
    border: 2rpx solid #d4d4d4;
  }
}
</style>
