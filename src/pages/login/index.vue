<route lang="json5" type="page">
{
  style: { navigationBarTitleText: '' },
}
</route>
<template>
  <view class="flex justify-center h-full" style="flex-direction: column">
    <image :src="loginHead" class="head" mode="aspectFill" />
    <image :src="loginTxt" class="txt" />

    <view class="login-btn w-50 h-10 leading-10 rounded-1.5 text-white text-4" @click="wxLogin">
      立即登录
    </view>

    <!-- 协议 -->
    <view class="protocol w-50 mx-auto mt-2.5">
      <view v-show="isAgree">
        <view class="check-icon">
          <uni-icons type="checkbox" color="#0e6bf7" size="16" @click="checkboxChange"></uni-icons>
        </view>
      </view>
      <view v-show="isAgree === false">
        <view class="check-icon">
          <uni-icons type="circle" color="#7F7F7F" size="16" @click="checkboxChange"></uni-icons>
        </view>
      </view>

      <view class="check-text">
        <text class="def-text" @click="checkboxChange">我已阅读并同意</text>
        <text class="text-4E6CBC" @click="goPage(`/pages/webview/index?name=USER`)">用户协议</text>
        <text>、</text>
        <text class="text-4E6CBC" @click="goPage(`/pages/webview/index?name=PRIVACY`)">
          隐私政策
        </text>

        <text>,</text>
        <text>未注册绑定</text>
        的手机号验证成功后将自动注册
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import CjxAddressMarks from './components/cjx-address-marks.vue'
import loginHead from '@/static/images/login-login.jpg'
import loginTxt from '@/static/images/login-txt.jpg'
import { getLogin } from '@/service/user/user'

const WX_APPID = import.meta.env.VITE_WX_APPID

// const isAgree = ref(false)
const isAgree = ref(true)

const checkboxChange = () => {
  isAgree.value = !isAgree.value
}
const goPage = (url) => {
  uni.navigateTo({ url })
}
const goLogin = async (code) => {
  const res = await getLogin({
    verifyCode: code,
    authType: 'wechat',
    authId: WX_APPID,
  })
  // uni.hideLoading()
  // uni.reLaunch({
  //   url: '/pages/album/index',
  // })
}
const wxLogin = () => {
  if (!isAgree.value) {
    uni.showModal({
      title: '温馨提示',
      content: '请先同意用户协议和隐私政策！',
      success: function (res) {
        if (res.confirm) isAgree.value = !isAgree.value
      },
    })
    return
  }
  console.log('准备获取code')

  // uni.showLoading({
  //   title: '登录中...',
  // })
  uni.login({
    provider: 'weixin',
    success: function (loginRes) {
      console.log('微信', loginRes)
      goLogin(loginRes.code)
    },
    fail: function () {
      uni.hideLoading()
    },
  })
}
</script>
<style lang="scss" scoped>
.head {
  display: block;
  width: 300rpx;
  height: 286rpx;
  margin: 0 auto;
}
.txt {
  display: block;
  width: 300rpx;
  height: 44rpx;
  margin: 10rpx auto 30rpx;
}
.login-btn {
  margin: 0 auto;
  text-align: center;
  background-image: linear-gradient(to right, #44aaf4, #0e6bf7);
}
// 协议样式
.protocol {
  display: flex;
  align-items: flex-start;
}
.check-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 12rpx;
  margin-top: -4rpx;
}
.check-text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 16rpx;
  color: #7f7f7f;
}

.text-4E6CBC {
  color: #4e6cbc;
}
</style>
