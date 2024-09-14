<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '联系与反馈',
  },
}
</route>
<template>
  <view class="p-4">
    <view @click="copy">请联系微信： {{ wxNumber }}</view>
    <view class="text-gray-300 text-3">点击可复制</view>
  </view>
</template>

<script lang="ts" setup>
const wxNumber = ref('xxxxxxxx')
const copy = () => {
  uni.setClipboardData({
    data: wxNumber.value,
    success: () => {
      uni.showToast({
        title: '复制成功',
      })
    },
  })
}
</script>

<style lang="scss" scoped></style>
