<template>
  <view class="default-layout">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
const bg = 'red'
</script>
<style lang="scss">
.default-layout {
  height: calc(100vh - 47px);
  /* #ifdef H5 */
  overflow: auto;
  /* #endif */
  background: rgba(229, 231, 235, 0.1);
}
</style>
