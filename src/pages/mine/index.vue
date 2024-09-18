<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '我的',
  },
}
</route>
<template>
  <view class="px-4">
    <view class="user-info rounded-2 mt-5 pl-4 pr-2.5 pb-2">
      <view class="flex items-center">
        <image :src="catImg" mode="aspectFill" class="w-18 h-18 rounded-1 mt--4.5" />
        <view class="ml-2">
          <view class="text-3.75 font-500">用户昵称</view>
          <view class="text-2.5 text-#878787 mt-1">猫猫云ID</view>
        </view>
      </view>
      <view class="text-3 text-#181818 leading-9">添加简短的介绍，让更多人了解你</view>
      <view class="flex items-center">
        <view class="mr-5">
          <view class="text-3 text-#878787 text-center">我的相册</view>
          <view class="text-4.25 text-center mt-1">12</view>
        </view>
        <view class="mr-5">
          <view class="text-3 text-#878787 text-center">关注相册</view>
          <view class="text-4.25 text-center mt-1">12</view>
        </view>
        <view class="mr-5">
          <view class="text-3 text-#878787 text-center">我的团队</view>
          <view class="text-4.25 text-center mt-1">12</view>
        </view>
        <view
          class="absolute bottom-2 right-4 flex items-center bg-#EDEDED rounded-2 px-2 py-1"
          @click="jump2Edit"
        >
          <uni-icons type="compose" color="#2196f3" size="20" />
          <view class="text-3 ml-1">编辑</view>
        </view>
      </view>
    </view>

    <view class="vip-btn bg-#EDEDED rounded-2 text-3.5 h-14 leading-14 !my-3" @click="jump2Edit">
      给老子开会员
    </view>

    <view class="flex justify-between items-center">
      <view class="flex justify-between items-center rounded-2 p-2.5 h-20 bg-white w-60/100 mr-2">
        <view class="mr-2">
          <view class="text-3.75">已使用1.2G</view>
          <view class="text-2.5 text-#878787 my-2">共4534张猫片 12个相册</view>
          <view class="rounded-2 w-20 bg-#D9D9D9 py-1 h-4.5"></view>
        </view>
        <cjx-circle-progress
          :lineWidth="4"
          fontColor="#64ADFF"
          gradualColor="#64ADFF"
          boxWidth="70"
          boxHeight="70"
          :percent="25"
        ></cjx-circle-progress>
      </view>
      <view class="rounded-2 p-2.5 bg-white h-20 w-30/100">
        <view class="rounded-1/2 w-12 h-12 bg-#D9D9D9 mb-2 mt-1 mx-auto"></view>
        <view class="text-#181818 text-3.25 text-center">成就</view>
      </view>
    </view>

    <view class="bg-white rounded-2 p-2.5 my-3">
      <view class="flex justify-between items-center">
        <view class="flex items-center">
          <image :src="catImg" mode="aspectFill" class="w-6 h-6 rounded-1/2 mr-2" />
          <view class="text-3.25">积分商城</view>
          <view class="text-2.75 text-[#B8B8B8] ml-2">了解积分机制</view>
          <uni-icons type="help" color="#b8b8b8" size="15" />
        </view>
        <cjx-circle-progress
          :lineWidth="4"
          fontColor="#64ADFF"
          gradualColor="#64ADFF"
          canvasId="canvasId2"
          bgCanvasId="bgCanvasId2"
          :boxWidth="70"
          :boxHeight="70"
          :percent="100"
        ></cjx-circle-progress>
      </view>
      <view class="flex flex-wrap items-center mt-2">
        <view>
          <image :src="catImg" mode="aspectFill" class="img-main" />
          <view class="text-2.5 text-[#181818]">打印52张猫片</view>
          <view class="flex items-center text-[#055EC6]">
            <text class="text-3.25">999</text>
            <text class="text-2 ml-1">积分</text>
          </view>
        </view>
        <view>
          <image :src="catImg" mode="aspectFill" class="img-main" />
          <view class="text-2.5 text-[#181818]">打印52张猫片</view>
          <view class="flex items-center text-[#055EC6]">
            <text class="text-3.25">999</text>
            <text class="text-2 ml-1">积分</text>
          </view>
        </view>
        <view>
          <image :src="catImg" mode="aspectFill" class="img-main" />
          <view class="text-2.5 text-[#181818]">打印52张猫片</view>
          <view class="flex items-center text-[#055EC6]">
            <text class="text-3.25">999</text>
            <text class="text-2 ml-1">积分</text>
          </view>
        </view>
        <view>
          <image :src="catImg" mode="aspectFill" class="img-main" />
          <view class="text-2.5 text-[#181818]">打印52张猫片</view>
          <view class="flex items-center text-[#055EC6]">
            <text class="text-3.25">999</text>
            <text class="text-2 ml-1">积分</text>
          </view>
        </view>
        <view
          class="flex justify-center items-center h-6 w-6 rounded-1/2 pb-2 mb-8 px-1 bg-gray-200 text-center"
        >
          ...
        </view>
      </view>
    </view>

    <view class="bg-white rounded-2 mb-2">
      <uni-list>
        <uni-list-item showArrow link="navigateTo" to="/pages/about/index">
          <template #header>
            <view class="flex items-center">
              <image :src="markImg" mode="aspectFill" class="w-6 h-6 mt-2px" />
              <view class="mt-0.75 text-3.5 ml-1 text-[#414141]">关于我们</view>
            </view>
          </template>
        </uni-list-item>
        <uni-list-item showArrow link="navigateTo" to="/pages/linkus/index">
          <template #header>
            <view class="flex items-center">
              <uni-icons type="chat-filled" color="#414141" size="24" />
              <view class="mt-0.75 text-3.5 ml-1 text-[#414141]">联系与反馈</view>
            </view>
          </template>
        </uni-list-item>
      </uni-list>
    </view>
  </view>
</template>

<script lang="ts" setup>
import catImg from '@/static/images/cat.jpg'
import CjxCircleProgress from './components/CjxCircleProgress.vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const author = ref('')
const description = ref()

onLoad(() => {
  console.log(author)
})
</script>

<style lang="scss" scoped>
.user-info {
  position: relative;
  background-color: #fff;
}
.vip-btn {
  margin: 0 auto;
  color: #fff;
  text-align: center;
  background-image: linear-gradient(to right, #44aaf4, #0e6bf7);
}
.img-main {
  width: 116rpx;
  height: 116rpx;
  margin-right: 30rpx;
  margin-bottom: 10rpx;
  border-radius: 8rpx;
}
</style>
