<script setup lang="ts">
  import CatItem from '@/components/CatItem/CatItem.vue';
</script>

<template>
  <view class="cats-list">
    <cat-item/>
    <cat-item/>
    <cat-item/>
    <cat-item/>
    <cat-item/>
    <cat-item/>
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