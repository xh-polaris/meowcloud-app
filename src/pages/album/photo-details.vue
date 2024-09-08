<template>
  <default :class="changeDarkMode" @click="changeDarkMode">
    <view @click="changeDarkMode" class="flex">
      <top-returning :photo-details="true" :darkMode="darkMode" />
      <image class="w-100% h-1126rpx fixed bottom-298rpx" :src="photoPath" mode="aspectFill" />
      <barrage-comments v-show="!darkMode" :comments="commentsList" />
      <photo-descriptions
        v-show="!darkMode"
        :photo-descriptions="'我是对于图片的描述我是对于图片的描述我是对于图片的描述我是对于图片的描述'"
      />
      <likes-and-comments-count v-show="!darkMode" :likes-count="100" :comments-count="100" />
    </view>
  </default>
</template>

<script setup lang="ts">
import TopReturning from '@/components/TopReturning/TopReturning.vue'
import PhotoDescriptions from '@/components/PhotoDescriptions/PhotoDescriptions.vue'
import LikesAndCommentsCount from '@/components/LikesAndCommentsCount/LikesAndCommentsCount.vue'
import BarrageComments from '@/components/BarrrageComments/BarrageComments.vue'
import { ref } from 'vue'
import Default from '@/layouts/default.vue'

const photoPath = ref('/static/images/catBody.png')
const commentsList = ['我是弹幕评论', '我是弹幕评论', '我是弹幕评论']

// darkMode
const darkMode = ref(false)

const changeDarkMode = () => {
  darkMode.value = !darkMode.value
  console.log(darkMode)
  return 'dark'
}
</script>

<style scoped>
.dark {
  background-color: #000;
}
</style>
