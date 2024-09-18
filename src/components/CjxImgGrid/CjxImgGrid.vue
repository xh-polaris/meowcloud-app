<template>
  <view class="mb-2">
    <view class="relative">
      <image :src="info.cover" :class="['block w-18 h-18 mx-auto ', radiusClass]" :mode="mode" />
      <view
        v-if="info.total > -1"
        class="text-center text-3 bg-blue-500 absolute right-5 bottom-0 h-4 leading-4 px-2 text-#fff rounded-2"
      >
        {{ info.total }}
      </view>
    </view>
    <view class="text-center my-3 text-3.5">{{ info.name }}</view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  // 图片圆角
  radiusClass: {
    type: String,
    default: 'rounded-2',
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
