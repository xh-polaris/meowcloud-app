<template>
  <view class="pageContainer" :class="darkModeClass"></view>
  <view @click="toggleDarkMode" class="flex">
    <image class="w-100% h-1126rpx fixed bottom-298rpx" :src="photoPath" mode="aspectFill" />
    <barrage-comments v-show="!isDarkMode" :comments="commentsList" />
    <photo-descriptions
      v-show="!isDarkMode"
      :photo-descriptions="'我是对于图片的描述我是对于图片的描述我是对于图片的描述我是对于图片的描述'"
    />
    <likes-and-comments-count v-show="!isDarkMode" :likes-count="100" :comments-count="100" />
  </view>
</template>

<script setup lang="ts">
import PhotoDescriptions from '@/components/PhotoDescriptions/PhotoDescriptions.vue'
import LikesAndCommentsCount from '@/components/LikesAndCommentsCount/LikesAndCommentsCount.vue'
import BarrageComments from '@/components/BarrageComments/BarrageComments.vue'

const photoPath = ref('/static/images/catBody.png')
const commentsList = ['我是弹幕评论', '我是弹幕评论', '我是弹幕评论']

// darkMode
const isDarkMode = ref(false)

// 设置导航栏文字
const currentNum = 1
const TotalNum = 99
onLoad(() => {
  uni.setNavigationBarTitle({ title: `${currentNum} / ${TotalNum}` })
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  console.log(`isDarkMode is ${isDarkMode.value}`)
  uni.setNavigationBarColor({
    frontColor: isDarkMode.value ? '#ffffff' : '#000000',
    backgroundColor: isDarkMode.value ? '#000000' : '#F4F7FA',
  })
  uni.setBackgroundColor({
    backgroundColor: isDarkMode.value ? '#000000' : '#F4F7FA',
  })
}

const darkModeClass = computed(() => (isDarkMode.value ? 'darkMode' : ''))
</script>

<style>
.pageContainer {
  min-height: 100vh;
}
.darkMode {
  background-color: #000000;
}
</style>
