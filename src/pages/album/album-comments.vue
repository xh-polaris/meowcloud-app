<template>
  <view>
    <top-returning :album-name="'小黑'" :photo-details="false" />
    <album-comments-info />
    <view class="comments-zone">
      <view class="comments-zone-title">
        <text class="comments-zone-title-text">评论区</text>
        <view class="comments-sort">
          <text
            class="comments-sort-order"
            :class="{ 'comment-sort-order-chosen': sortOrder === 'newest' }"
            @click="changeSortOrder"
            >最新
          </text>
          <view class="divide-line" />
          <text
            class="comments-sort-order"
            :class="{ 'comment-sort-order-chosen': sortOrder === 'hottest' }"
            @click="changeSortOrder"
            >热门
          </text>
        </view>
      </view>
      <comment-item v-for="comment in comments" :comment="comment" />
    </view>
    <bottom-bar />
  </view>
</template>

<script setup lang="ts">
import CommentItem from '@/components/CommentItem/CommentItem.vue'
import BottomBar from '@/components/BottomBar/BottomBar.vue'
import TopReturning from '@/components/TopReturning/TopReturning.vue'
import AlbumCommentsInfo from '@/components/AlbumCommentsInfo/AlbumCommentsInfo.vue'
import { ref } from 'vue'

const sortOrder = ref('newest')
//sort-order change
const changeSortOrder = () => {
  if (sortOrder.value === 'newest') {
    sortOrder.value = 'hottest'
  } else {
    sortOrder.value = 'newest'
  }
}
console.log(sortOrder)
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
  {
    user: {
      id: '3',
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

<style scoped lang="scss">
.comments-zone {
  margin-top: 32rpx;
  width: 100vw;
  background-color: #ffffff;
  .comments-zone-title {
    display: flex;
    .comments-zone-title-text {
      margin-top: 24rpx;
      margin-left: 26rpx;
      width: 102rpx;
      height: 44rpx;
      text-align: center;
      line-height: 44rpx;
      font-size: 34rpx;
      font-weight: 500;
      color: #000;
    }
    .comments-sort {
      display: flex;
      margin-left: 420rpx;
    }
    .divide-line {
      width: 0;
      height: 24rpx;
      margin-top: 34rpx;
      margin-left: 26rpx;
      border: 2rpx solid #d9d9d9;
    }
    .comments-sort-order {
      margin-left: 24rpx;
      margin-top: 24rpx;
      width: 48rpx;
      height: 44rpx;
      text-align: center;
      line-height: 44rpx;
      font-size: 24rpx;
      color: #7f7f7f;
    }
    .comments-sort-order-chosen {
      color: #000;
    }
  }
}
</style>
