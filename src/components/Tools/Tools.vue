<template>
  <view class="tools">
    <view
      v-for="tool in toolList"
      :key="tool.id"
      class="tool">
      <image class="tool-icon"></image>
      <text class="tool-text">{{tool.name}}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const toolList = [
  {
    id: 0,
    name: '导入图片',
    icon: ''
  },
  {
    id: 1,
    name: '批量导出',
    icon: ''
  },
  {
    id: 2,
    name: '回收站',
    icon: ''
  }
]

</script>

<style scoped lang="scss">
.tools {
  display: flex;
  flex-direction: row;
}
  .tool {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 128rpx;
    height: 128rpx;
    margin-left: 16rpx;
    border-radius: 16rpx;
    background-color: #fff;
    .tool-icon {
      margin-top: 10rpx;
      width: 64rpx;
      height: 64rpx;
      border-radius: 32rpx;
      background-color: #d9d9d9;
    }
    .tool-text {
      margin-bottom: 10rpx;
      width: 80rpx;
      height: 44rpx;
      text-align: center;
      font-size: 20rpx;
      font-weight: 400;
      color: #000;
      line-height: 44rpx;
    }
  }
</style>