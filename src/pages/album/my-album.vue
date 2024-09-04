<!-- 使用 type="home" 属性设置相册，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '相册',
  },
}
</route>
<script setup lang="ts">
import BottomBar from '@/components/BottomBar/BottomBar.vue'
import TopBar from '@/components/TopBar/TopBar.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import ToolBar from '@/components/tool-bar/tool-bar.vue'
import CatsList from '@/components/CatsList/CatsList.vue'
</script>

<template>
  <view class="my-album">
    <top-bar id="my-album" />
    <carousel />
    <tool-bar />
    <cats-list />
    <bottom-bar id="album" />
  </view>
</template>

<style scoped></style>
