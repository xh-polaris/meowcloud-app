<template>
  <view class="my-2 pt-1.5 bg-white rounded-2">
    <view class="relative">
      <image
        :src="info.url"
        :class="['block w-8 h-8 mx-auto bg-gray-200', radiusClass]"
        :mode="mode"
      />
    </view>
    <view class="text-center py-1.5 text-2.5">{{ info.content }}</view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  // 图片圆角
  radiusClass: {
    type: String,
    default: 'rounded-1/2',
  },
  mode: {
    type: String,
    default: 'aspectFill',
  },
  info: {
    type: Object,
    default: () => {
      return {
        src: '',
        content: '',
        // badge: -1,
        badge: 0,
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
