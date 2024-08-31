<script setup lang="ts">
import CatItem from '@/components/CatItem/CatItem.vue'

const cats = [
  {
    id: 0,
    name: '猫猫1',
    avatar: undefined,
    count: 12,
  },
  {
    id: 1,
    name: '猫猫2',
    avatar: undefined,
    count: 12,
  },
  {
    id: 2,
    name: '猫猫3',
    avatar: undefined,
    count: 12,
  },
  {
    id: 3,
    name: '猫猫4',
    avatar: undefined,
    count: 12,
  },
  {
    id: 'allAlbums',
    name: '全部',
    avatar: undefined,
    count: 48,
  },
  {
    id: 'addAlbum',
    name: '新建相册',
    avatar: undefined,
    count: 12,
  },
]
</script>

<template>
  <view class="cats-list">
    <cat-item v-for="cat in cats" :catItem="cat" />
  </view>
</template>

<style scoped lang="scss">
.cats-list {
  padding-left: 60rpx;
  padding-right: 60rpx;
  margin-top: 60rpx;
  display: grid;
  grid-template-columns: repeat(3, 144rpx);
  grid-template-rows: repeat(2, 208rpx);
  column-gap: 99rpx;
  row-gap: 40rpx;
}
</style>
