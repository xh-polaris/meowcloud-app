<script setup lang="ts">
import Default from '@/layouts/default.vue'
import { ref } from 'vue'

const nickname = ref('')
const avatarUrl = ref('https://example.com/avatar.jpg')
const catCloudId = ref('')
const personalIntroduction = ref('')

const handleLogout = () => {
  // 退出登录逻辑
}

const handleAccountDelete = () => {
  // 注销账号逻辑
}
</script>

<template>
  <route lang="json5" type="page">
    { style: { navigationStyle: 'custom', navigationBarTitleText: '', }, }
  </route>
  <default></default>
</template>

<style scoped lang="scss"></style>
