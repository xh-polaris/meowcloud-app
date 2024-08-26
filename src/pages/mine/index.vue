<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的',
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4 bg-red-300"
    :style="{ marginTop: safeAreaInsets.top + 'px' }"
  >
    我的
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const author = ref('')
const description = ref()

onLoad(() => {
  console.log(author)
})
</script>

<style>
.test-unocss-apply {
  @apply m-4;
}
</style>
