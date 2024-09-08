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
<!-- 使用 type="home" 属性设置相册，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationBarTitleText: '我的',
  },
}
</route>
<template>
  <default></default>
</template>

<style scoped lang="scss"></style>
