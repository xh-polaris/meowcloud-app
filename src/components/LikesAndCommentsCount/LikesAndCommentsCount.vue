<template>
  <view class="fixed right-20rpx bottom-30rpx flex">
    <view class="w-164rpx h-64rpx flex items-center">
      <image
        class="w-64rpx h-64rpx rounded-64rpx bg-#d9d9d9"
        :src="likeIconPath"
        mode="aspectFill"
      />
      <text class="w-90rpx h-44rpx ml-10rpx text-30rpx">{{ likesCount }}</text>
    </view>
    <view class="w-164rpx h-64rpx flex items-center ml-28rpx">
      <image
        class="w-64rpx h-64rpx rounded-64rpx bg-#d9d9d9"
        :src="commentIconPath"
        mode="aspectFill"
      />
      <text class="w-90rpx h-44rpx ml-10rpx text-30rpx">{{ commentsCount }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const likeIconPath = '/static/images/like.png'
const commentIconPath = ''

const props = defineProps({
  likesCount: Number,
  commentsCount: Number,
})
</script>

<style scoped lang="scss"></style>
