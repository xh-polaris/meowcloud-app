<!-- 使用 type="home" 属性设置相册，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '喵星' },
}
</route>
<template>
  <view>
    <cjx-address-marks></cjx-address-marks>
    <view class="flex items-center px-4 h-8 leading-8 pt-1">
      <view
        :class="['text-3.75 mr-6', tabName === 'all' ? 'text-#1FA1FF' : '']"
        @click="tabChange('all')"
      >
        全部
      </view>
      <view
        :class="['text-3.75 mr-6', tabName === 'addr' ? 'text-#1FA1FF' : '']"
        @click="tabChange('addr')"
      >
        我的附近
      </view>
      <view
        :class="['text-3.75 mr-6', tabName === 'like' ? 'text-#1FA1FF' : '']"
        @click="tabChange('like')"
      >
        我的关注
      </view>
    </view>
    <view class="px-4 content overflow-y-auto box-border">
      <view class="pt-4" v-for="item in [1, 2]" :key="item">
        <view class="flex items-center">
          <image :src="catImg" mode="aspectFill" class="img-big" />
          <view class="text-3.5 mr-5">我是小猫猫</view>
          <view class="text-3 text-#444444">共 100 张照片</view>
        </view>
        <view class="flex flex-wrap my-2">
          <image :src="catImg" mode="aspectFill" class="img-main" />
          <image :src="catImg" mode="aspectFill" class="img-main" />
          <image :src="catImg" mode="aspectFill" class="img-main" />
          <image :src="catImg" mode="aspectFill" class="img-main" />
          <image :src="catImg" mode="aspectFill" class="img-main" />
        </view>
        <view class="flex items-center pb-4 action-area">
          <view class="flex items-center">
            <uni-icons type="hand-up" size="20"></uni-icons>
            <view class="text-3 mr-5 ml-1">点赞</view>
          </view>
          <view class="flex items-center">
            <uni-icons type="chat" size="20"></uni-icons>
            <view class="text-3 mr-5 ml-1">评论</view>
          </view>
          <view class="flex-1"></view>
          <view class="flex items-center">
            <uni-icons type="person" size="18"></uni-icons>
            <view class="text-3 mr-5 ml-1">我是主人</view>
            <view class="text-3 mr-1.5 ml-1 text-right">发于上海</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import CjxAddressMarks from './components/cjx-address-marks.vue'
import catImg from '@/static/images/cat.jpg'

const tabName = ref('all')
const tabChange = (name) => {
  tabName.value = name
}
</script>
<style lang="scss" scoped>
.img-big {
  width: 64rpx;
  height: 64rpx;
  border-radius: 50%;
  background: #d9d9d9;
  margin-right: 20rpx;
}
.img-small {
  width: 48rpx;
  height: 48rpx;
  border-radius: 50%;
  background: #d9d9d9;
  margin-right: 20rpx;
}
.img-main {
  width: 160rpx;
  height: 160rpx;
  border-radius: 8rpx;
  margin-right: 10rpx;
  margin-bottom: 10rpx;
}
.action-area {
  border-bottom: 1px solid #e5e5e5;
}
.content {
  height: calc(65vh - 50px);
}
</style>
