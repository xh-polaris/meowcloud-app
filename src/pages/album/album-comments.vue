<template>
  <view>
    <top-bar />
    <comment-item v-for="comment in comments" :comment="comment" />
    <bottom-bar />
  </view>
</template>

<script setup lang="ts">
import CommentItem from '@/components/CommentItem/CommentItem.vue'
import BottomBar from '@/components/BottomBar/BottomBar.vue'
import TopBar from '@/components/TopBar/TopBar.vue'

//comments for test
const comments = [
  {
    user: {
      id: '0',
      name: '用户昵称',
      avatar: '',
    },
    content:
      '我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论',
    like_count: 2,
    time: '7-23 21:14',
  },
  {
    user: {
      id: '1',
      name: '用户昵称',
      avatar: '',
    },
    content:
      '我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论',
    like_count: 2,
    time: '7-23 21:14',
  },
  {
    user: {
      id: '2',
      name: '用户昵称',
      avatar: '',
    },
    content:
      '我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论',
    like_count: 2,
    time: '7-23 21:14',
  },
]
</script>

<style scoped></style>
