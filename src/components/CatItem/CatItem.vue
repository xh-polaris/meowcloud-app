<script setup lang="ts">
interface catItem {
  id: string
  name: string
  avatar: string
  count: number
}

const props = defineProps<{
  catItem?: catItem
}>()

// eslint-disable-next-line @typescript-eslint/no-redeclare
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
      url: '/pages/album/photo-details',
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
  gap: 20rpx;
  align-items: center;
  justify-content: center;
  width: 144rpx;
  height: 208rpx;

  .cat-icon {
    width: 144rpx;
    height: 144rpx;
    background-color: #c4c4c4;
    border-radius: 72rpx;
  }

  .cat-count {
    position: relative;
    top: -46rpx;
    left: 90rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54rpx;
    height: 28rpx;
    background-color: #0094ff;
    border: 2rpx solid #fff;
    border-radius: 16rpx;

    .cat-count-text {
      width: 22rpx;
      height: 44rpx;
      font-size: 18rpx;
      font-weight: 500;
      line-height: 44rpx;
      color: #fff;
      text-align: center;
    }
  }

  .cat-name {
    width: 144rpx;
    height: 44rpx;
    margin-top: -46rpx;
    font-size: 28rpx;
    font-weight: 400;
    line-height: 44rpx;
    color: #000;
    text-align: center;
  }
}
</style>
