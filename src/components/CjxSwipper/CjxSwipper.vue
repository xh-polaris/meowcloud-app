<template>
  <view class="">
    <uni-swiper-dot
      class="uni-swiper-dot-box"
      field="content"
      :info="info"
      :current="current"
      :mode="mode"
      :dots-styles="dotsStyles"
      @clickItem="clickItem"
    >
      <swiper class="swiper-box" :current="swiperDotIndex" @change="change">
        <swiper-item v-for="(item, index) in info" :key="index">
          <image
            class="image"
            style="width: 100%; height: 100%"
            mode="aspectFill"
            :src="item.url"
          ></image>

          <view :class="['swiper-item' + index, 'swiper-item']">
            <text style="font-size: 32px; color: #fff">{{ index + 1 }}</text>
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
  </view>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  info: {
    type: Array as PropType<any[]>,
    default: () => {
      return []
    },
  },
  height: {
    type: String,
    default: '400rpx',
  },
  // mode: 模式
  // default 条状
  // round 椭圆
  // dot 圆点
  // nav 例子： 1/3 内容c
  // index 索引
  mode: {
    type: String,
    default: 'dot',
  },
  // 指示点样式
  dotsStyles: {
    type: Object,
    default: () => {
      return {
        backgroundColor: 'rgba(0, 0, 0, .3)',
        border: '1px rgba(0, 0, 0, .3) solid',
        color: '#fff',
        selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
        selectedBorder: '1px rgba(0, 0, 0, .9) solid',
      }
    },
  },
})
const swiperDotIndex = ref(0)
const current = ref(0)

const change = (e) => {
  current.value = e.detail.current
}

const clickItem = (e) => {
  swiperDotIndex.value = e
}
</script>

<style lang="scss" scoped>
.swiper-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
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

@media screen and (min-width: 500px) {
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
