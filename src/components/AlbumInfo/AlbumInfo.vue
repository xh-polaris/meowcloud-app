<template>
  <view class="w-710rpx h-424rpx mt-56rpx mx-20rpx bg-#fff rounded-24rpx">
    <!-- 上半部分 -->
    <view class="flex flex-justify-between">
      <image
        class="relative w-144rpx h-144rpx rounded-16rpx left-48rpx top--42rpx"
        src="/static/images/cat.jpg"
      />
      <view class="">
        <view class="flex">
          <text class="text-30rpx lh-44rpx text-#878787 text-align-center">{{ catName }}</text>
          <image class="w-40rpx h-40rpx" mode="aspectFill" />
        </view>
        <text class="text-20rpx lh-44rpx text-align-center">品种：{{ breed }}</text>
      </view>
      <view
        class="flex bg-[#1fa1ff] bg-opacity-20 w-88rpx h-52rpx rounded-8rpx p-x-24rpx p-y-4rpx mt-14rpx mr-16rpx items-center content-center"
        @click="jump2Edit"
      >
        <image class="w-32rpx h-32rpx rounded-16rpx bg-#d9d9d9" />
        <text class="ml-8rpx w-48rpx text-24rpx lh-44rpx text-align-center text-#005694">编辑</text>
      </view>
    </view>
    <!-- 下半部分 -->
    <view class="grid grid-cols-2 p-x-52rpx">
      <view class="mt-20rpx">
        <image class="small-image" />
        <text class="small-text">年龄</text>
        <text class="text">{{ age }}岁</text>
      </view>
      <view class="mt-20rpx">
        <image class="small-image" />
        <text class="small-text">类型</text>
        <text class="text">{{ type }}</text>
      </view>
      <view class="col-span-2 mt-20rpx">
        <image class="small-image" />
        <text class="small-text">出没地区</text>
        <text class="text">{{ area }}</text>
      </view>
      <view class="col-span-2 mt-20rpx">
        <image class="small-image" />
        <text class="small-text">撸猫指南</text>
        <text class="text">{{ description }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const jump2Edit = () => {
  uni.navigateTo({
    url: '/pages/album/edit-album',
  })
}
</script>

<style scoped lang="scss">
.small-image {
  width: 32rpx;
  height: 32rpx;
  background-color: #d9d9d9;
  border-radius: 16rpx;
}
.small-text {
  height: 44rpx;
  margin-left: 8rpx;
  font-size: 20rpx;
  line-height: 44rpx;
  color: #7f7f7f;
  text-align: center;
}
.text {
  max-width: 462rpx;
  margin-left: 36rpx;
  font-size: 24rpx;
  line-height: 44rpx;
  color: #000;
  text-align: center;
}
</style>
