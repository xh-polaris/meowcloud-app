<template>
  <view class="mb-2">
    <view class="relative" @click="albumClick">
      <image
        :src="info.cover"
        :class="['block w-18 h-18 mx-auto bg-gray-200', radiusClass]"
        :mode="mode"
      />

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
        id: '',
        cover: '',
        total: 0,
      }
    },
  },
})
const emits = defineEmits(['create', 'toAblum'])

const albumClick = () => {
  emits(props.info.id === '-1' ? 'create' : 'toAblum', props.info.id)
}
</script>

<style lang="scss" scoped></style>
