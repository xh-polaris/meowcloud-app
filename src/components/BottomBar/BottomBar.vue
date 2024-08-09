
<template>
  <view class="tab-box">
    <view class="tab-list">
      <view
        v-for="item in tabList"
        :key="item.id"
        @click="tabChange(item.url)"
        class="tab">
        <image
          :class="iconClass(item.id)"
          :src="item.id === currentTabId ? item.activeIcon : item.icon"
        />
        <text :class="textClass(item.id)">{{item.text}}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import {Pages} from '@/utils/url';
import { computed, defineProps} from "vue";
console.log("BottomBar is loaded")//for test
const props = defineProps({
  id : {
    type: String
  }
});
const tabList =[
  {
    id: "album",
    text: '相册',
    icon: '/static/images/tab-bar/album.png',
    activeIcon: '/static/images/tab-bar/album_active.png',
    url: Pages.MyAlbum
  },
  {
    id: "meow-planet",
    text: '喵星',
    icon: '/static/images/tab-bar/meow_planet.png',
    activeIcon: '/static/images/tab-bar/meow_planet_active.png',
    url: Pages.MeowPlanet
  },
  {
    id: "profile",
    text: '我的',
    icon: '/static/images/tab-bar/profile.png',
    activeIcon: '/static/images/tab-bar/profile_active.png',
    url: Pages.Profile
  }
];
const currentTabId = computed(() => props.id as string).value

const iconClass = (id: string) => {
  if(id === currentTabId){
    return 'active-icon'
  }else{
    return 'icon'
  }
}

const textClass = (id: string) => {
  if(id === currentTabId){
    return 'active-text'
  }else{
    return 'text'
  }
}

function tabChange(path: string) {
  uni.switchTab({
    url: path
  })
}
</script>

<style scoped lang="scss">
.tab-box {
  padding: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -2px 16px 0px #0000000F;
  height: 84px;
  z-index: 9999;
  .tab-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16rpx 56rpx 0 56rpx;
    .tab {
      display: grid;
      height: 112rpx;
      width: 112rpx;
    }

    .icon {
      will-change: auto;
      width: 56rpx;
      height: 56rpx;
      margin-top: 12rpx;
      margin-left: 28rpx;
      background-color: #c4c4c4;/*temp*/
    }

    .active-icon {
      will-change: auto;
      width: 56rpx;
      height: 56rpx;
      margin-top: 12rpx;
      margin-left: 28rpx;
      background-color: #c4c4c4;/*temp*/
    }

    .text {
      font-size: 20rpx;
      line-height: 44rpx;
      color: #181818;
      margin-left: auto;
      margin-right: auto;
    }

    .active-text {
      font-size: 20rpx;
      line-height: 44rpx;
      color: #181818;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

</style>