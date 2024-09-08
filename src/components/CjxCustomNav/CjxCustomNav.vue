<template>
  <view :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <uni-nav-bar fixed leftWidth="100%" :border="false" background-color="transparent">
      <template #left>
        <cjx-tabs :list="tabsList" @change="tabChange"></cjx-tabs>
      </template>
    </uni-nav-bar>
  </view>
</template>

<script lang="ts" setup>
import CjxTabs from '@/components/CjxTabs/CjxTabs.vue'
const { safeAreaInsets } = uni.getSystemInfoSync()

const emits = defineEmits(['change'])

const tabsList = ['我的相册', '团队空间']
const tabChange = (key) => {
  emits('change', key)
}
</script>

<style lang="scss" scoped></style>
