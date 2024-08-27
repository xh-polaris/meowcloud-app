<script setup lang="ts">
import { defineProps } from 'vue'

interface catItem {
  id: string
  name: string
  avatar: string
  count: number
}
const props = defineProps<{
  catItem?: catItem
}>()

const catItem = {
  id: props.catItem?.id ?? '0',
  name: props.catItem?.name ?? '猫猫',
  avatar: props.catItem?.avatar ?? '/static/images/cat.jpg',
  count: props.catItem?.count ?? 0,
}
const catAvatar = catItem.id === 'addAlbum' ? undefined : catItem.avatar
const catName = catItem.name
const catCount = catItem.count

const navigateToComments = () => {
  if (catItem.id !== 'addAlbum') {
    uni.navigateTo({
      url: `/pages/album/album-comments?id=${catItem.id}`,
    })
  } else {
    uni.navigateTo({
      url: '/pages/album/album-add',
    })
  }
}
</script>

<template>
  <view class="cat-item" @click="navigateToComments">
    <image class="cat-icon" :src="catAvatar" mode="aspectFill" />
    <view class="cat-count" v-if="catItem.id !== 'addAlbum'">
      <text class="cat-count-text">
        {{ catCount }}
      </text>
    </view>
    <view class="cat-name">
      {{ catName }}
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
    background-color: #c4c4c4;
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
