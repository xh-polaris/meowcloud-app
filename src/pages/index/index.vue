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
  <view>
    <view
      class="bg-white overflow-hidden pt-2 px-4 bg-red-300"
      :style="{ marginTop: safeAreaInsets.top + 'px' }"
    >
      相册111
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const author = ref('')

const swiperData = [
  {
    colorClass: 'uni-bg-red',
    url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    content: '内容 A',
  },
  {
    colorClass: 'uni-bg-green',
    url: 'https://wxls-cms.oss-cn-hangzhou.aliyuncs.com/online/2024-04-18/218da022-f4bf-456a-99af-5cb8e157f7b8.jpg',
    content: '内容 B',
  },
  {
    colorClass: 'uni-bg-blue',
    url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
    content: '内容 C',
  },
]

onLoad(() => {
  console.log(author)
})
</script>

<style lang="scss" scoped>
.test-unocss-apply {
  @apply m-4;
}

.swiper-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // height: 200px;
  color: #fff;
}

.swiper-item0 {
  background-color: #cee1fd;
}

.swiper-item1 {
  background-color: #b2cef7;
}

.swiper-item2 {
  background-color: #cee1fd;
}
/* #ifndef APP-NVUE */
::v-deep .image img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
/* #endif */

@media screen and (width >= 500px) {
  .uni-swiper-dot-box {
    width: 400px;
    /* #ifndef APP-NVUE */
    margin: 0 auto;
    /* #endif */
    margin-top: 8px;
  }

  .image {
    width: 100%;
  }
}
</style>
