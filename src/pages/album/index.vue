<!-- 使用 type="home" 属性设置相册，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '相册',
  },
}
</route>

<template>
  <view class="my-album bg-gray-200">
    <cjx-custom-nav @change="albumChange"></cjx-custom-nav>
    <!-- 我的相册 -->
    <view v-show="albumType === 0">
      <carousel />
      <tool-bar />
      <cats-list />
    </view>
    <!-- 团队相册 -->
    <team-album v-show="albumType === 1"></team-album>
  </view>
</template>
<script setup lang="ts">
import CjxCustomNav from '@/components/CjxCustomNav/CjxCustomNav.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import ToolBar from '@/components/tool-bar/tool-bar.vue'
import CatsList from '@/components/CatsList/CatsList.vue'
import TeamAlbum from './components/team-album.vue'

const albumType = ref(0)

const albumChange = (key) => {
  albumType.value = key
  console.log('当前相册', key)
}

uni.navigateTo({ url: '/pages/login/index' })
</script>
<style lang="scss" scoped></style>
