<script setup lang="ts">
import EditItem from '@/components/EditItem/EditItem.vue'
const editList = [
  {
    key: '用户昵称',
    value: '我是用户昵称',
    showItemValue: true,
    hasEditButton: true,
    func: () => {
      console.log('编辑昵称')
      // 跳转编辑昵称页面
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
      // 跳转编辑头像页面
    },
  },
  {
    key: '猫猫云ID',
    value: 'Meow',
    showItemValue: true,
    hasEditButton: false,
  },
  {
    key: '个人介绍',
    value: '',
    showItemValue: false,
    hasEditButton: true,
    func: () => {
      console.log('编辑个人介绍')
      // 跳转编辑个人介绍页面
    },
  },
]
const logOut = () => {
  // 退出登录逻辑
}

const accountDelete = () => {
  // 注销账号逻辑
}
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
  <view class="mt-20rpx">
    <edit-item :item-key="'退出登录'" @click="logOut" />
    <edit-item
      class="text-#E70A0A"
      :item-key="'注销账号'"
      :has-divide-line="false"
      @click="accountDelete"
    />
  </view>
</template>

<style scoped lang="scss"></style>
