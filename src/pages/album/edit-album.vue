<script setup lang="ts">
const editList = [
  {
    key: '相册名',
    value: '小黑的相册',
    showItemValue: true,
    hasEditButton: true,
    func: () => {
      console.log('编辑相册名称')
      // 跳转编辑相册名称页面
    },
  },
  {
    key: '头像',
    value: '/static/images/user-avatar.png',
    showItemValue: false,
    hasEditButton: true,
    isPhoto: true,
    func: () => {
      console.log('编辑头像')
    },
  },
  {
    key: '年龄',
    value: '',
    showItemValue: true,
    hasEditButton: true,
    func: () => {
      console.log('编辑年龄')
    },
  },
  {
    key: '类型',
    value: '',
    showItemValue: true,
    hasEditButton: true,
    func: () => {
      console.log('编辑类型')
    },
  },
  {
    key: '品种',
    value: '',
    showItemValue: true,
    hasEditButton: true,
    func: () => {
      console.log('编辑描品种')
    },
  },
  {
    key: '可见性',
    value: '公开',
    showItemValue: true,
    hasEditButton: false,
    func: () => {
      console.log('编辑可见性')
    },
  },
]
</script>

<template>
  <edit-item
    v-for="(item, index) in editList"
    :key="index"
    :item-key="item.key"
    :item-value="item.value"
    :show-item-value="item.showItemValue"
    :has-edit-button="item.hasEditButton"
    :is-photo="item.isPhoto"
    :has-divide-line="index < editList.length - 1"
    @click="item.func"
  />
  <view class="mt-70rpx">
    <edit-item :item-key="'管理协作者'" :item-value="'旅大宝、旅超棒等'" />
    <edit-item :item-key="'111'" :item-value="'111'" :has-divide-line="false" />
  </view>
</template>

<style scoped></style>
