<script setup lang="ts">
const props = defineProps({
  itemKey: {
    type: String,
    default: '',
  },
  itemValue: {
    type: String,
    default: '',
  },
  showItemValue: {
    type: Boolean,
    default: false,
  },
  hasEditButton: {
    type: Boolean,
    default: true,
  },
  isPhoto: {
    type: Boolean,
    default: false,
  },
  hasDivideLine: {
    type: Boolean,
    default: true,
  },
})

const itemKey = props.itemKey
const itemValue = props.itemValue
const showItemValue = props.showItemValue
const hasEditButton = props.hasEditButton
const isPhoto = props.isPhoto
const hasDivideLine = props.hasDivideLine
</script>

<template>
  <view class="w-100% bg-#fff p-y-32rpx flex items-center flex-justify-between">
    <text class="ml-32rpx h-50rpx lh-50rpx text-30rpx">{{ itemKey }}</text>
    <view>
      <text v-show="showItemValue" class="h-50rpx lh-50rpx text-30rpx mr-20rpx">
        {{ itemValue }}
      </text>
      <image v-show="isPhoto" class="w-96rpx h-96rpx rounded-4rpx mr-20rpx" :src="itemValue" />
      <image
        v-if="hasEditButton"
        class="w-24rpx h-48rpx mr-32rpx"
        src="@/static/images/edit.png"
        mode="aspectFill"
      />
    </view>
  </view>
  <view v-show="hasDivideLine" class="w-670rpx bg-#ddd h-1px border-1px ml-42rpx"></view>
</template>

<style scoped lang="scss"></style>
