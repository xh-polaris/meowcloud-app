<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  albumName: String,
  photoDetails: Boolean,
})

const albumName = props.albumName || '猫猫'
const currentNumber = 1
const totalNumber = 99
const photoDetails = ref(props.photoDetails)

const navigateBack = () => {
  uni.navigateBack()
}
</script>

<template>
  <view class="top-returning" @click="navigateBack">
    <image class="back" src="@/static/images/back.png" />
    <view v-if="photoDetails === false" class="album-name">
      {{ albumName + '的相册' }}
    </view>
    <view v-else class="photo-number">
      {{ currentNumber + '/' + totalNumber }}
    </view>
  </view>
</template>

<style scoped lang="scss">
.top-returning {
  position: fixed;
  background-color: #f4f7fa;
  top: 0;
  left: 0;
  width: 100%;
  height: 176rpx;
  z-index: 999;
  .back {
    position: fixed;
    width: 40rpx;
    height: 40rpx;
    margin-top: 117rpx;
    margin-left: 35rpx;
  }
  .album-name {
    position: fixed;
    height: 44rpx;
    margin-top: 110rpx;
    margin-left: 80rpx;
    font-weight: 600;
    font-size: 40rpx;
    line-height: 44rpx;
    text-align: center;
    color: #1a1a1a;
  }
  .photo-number {
    position: fixed;
    left: 292rpx;
    top: 116rpx;
    height: 44rpx;
    font-size: 40rpx;
    line-height: 44rpx;
    text-align: center;
    color: #1a1a1a;
  }
}
</style>
