<template>
  <view :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <uni-nav-bar fixed leftWidth="100%" :border="false" :backgroundColor="backgroundColorChange">
      <template #left>
        <image class="back" src="@/static/images/back.png" @click="navigateBack" />
        <view v-if="photoDetails === false" class="album-name">
          {{ albumName + '的相册' }}
        </view>
        <view v-else class="photo-number">
          {{ currentNumber + '/' + totalNumber }}
        </view>
      </template>
    </uni-nav-bar>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync()

const props = defineProps({
  albumName: String,
  photoDetails: Boolean,
  darkMode: Boolean,
})

const darkMode = props.darkMode
const albumName = props.albumName || '猫猫'
const currentNumber = 1
const totalNumber = 99
const photoDetails = ref(props.photoDetails)

const backgroundColorChange = () => {
  if (darkMode) return `#000`
  else return `#f4f7fa`
}

const navigateBack = () => {
  uni.navigateBack()
}
</script>

<style scoped lang="scss">
.back {
  width: 40rpx;
  height: 40rpx;
}

.album-name {
  height: 44rpx;
  margin-left: 12rpx;
  font-size: 40rpx;
  font-weight: 600;
  line-height: 44rpx;
  color: #1a1a1a;
  text-align: center;
}

.photo-number {
  height: 44rpx;
  margin-right: auto;
  margin-left: auto;
  font-size: 40rpx;
  line-height: 44rpx;
  color: #1a1a1a;
  text-align: center;
}
</style>
