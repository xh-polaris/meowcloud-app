
<template>
  <view class="top-bar">
    <view class="left">
      <image
        v-if="props.back"
        class = "back-icon"/>
      <view
        v-for="(item, index) in topBarList"
        v-show="!props.back"
        :key="index"
        class="tab"
        @click="switchTab(item.path)">
        <text
          :class="getTextClass(item)">
          {{ item.name }}
        </text>
        <view v-if="currentId === item.id" class="underline"/>
      </view>
    </view>
    <view class="ellipse"/>
  </view>
</template>

<script setup lang="ts">
import { Pages } from '@/utils/url';
import { computed, defineProps} from "vue";
console.log("TopBar is loaded")//for test
const props = defineProps({
  id : {
    type: String
  },
  back : {
    type: Boolean,
    default: false
  }
});

const currentId = computed(() => props.id as string).value
console.log(currentId);
const topBarList = [
  {
    id: "my-album",
    name: '我的相册',
    path: Pages.MyAlbum
  },
  {
    id: "team-space",
    name: '团队空间',
    path: Pages.TeamSpace
  }
]

const getTextClass = (item: any) => {
  if (currentId === item.id){
    if(currentId === 'my-album'){
      return 'active-tab-text-left'
    } else {
      return 'active-tab-text-right'
    }
  }else{
    if (currentId === 'my-album') {
      return 'tab-text-right'
    } else {
      return 'tab-text-left'
    }
  }
}

const switchTab = (path: string) => {
  uni.switchTab({
    url: path
  })
}
</script>

<style scoped lang="scss">
  .top-bar {
    position: fixed;
    background-color:#F4F7FA;
    top: 0;
    left: 0;
    width: 100%;
    height: 176rpx;
    z-index: 999;
    .left {
      margin-top: 108rpx;
      display: flex;
      .tab {
        flex-direction: column;
        align-content: center;
        .tab-text-left{
          will-change: auto;
          margin-left: 50rpx;
          width: 120rpx;
          height: 44rpx;
          font-size: 30rpx;
          line-height: 44rpx;
          font-weight: 400;
          color: #000;
        }
        .tab-text-right {
          will-change: auto;
          margin-left: 34rpx;
          width: 120rpx;
          height: 44rpx;
          font-size: 30rpx;
          line-height: 44rpx;
          font-weight: 400;
          color: #000;
        }
        .active-tab-text-left {
          will-change: auto;
          margin-left: 46rpx;
          width: 160rpx;
          height: 44rpx;
          font-size: 40rpx;
          line-height: 44rpx;
          font-weight: 600;
          color: #1FA1FF;
        }
        .active-tab-text-right {
          will-change: auto;
          margin-left: 44rpx;
          width: 160rpx;
          height: 44rpx;
          font-size: 40rpx;
          line-height: 44rpx;
          font-weight: 600;
          color: #1FA1FF;
        }
        .underline {
          margin-top: 20rpx;
          margin-left: 104rpx;
          width: 32rpx;
          height: 1rpx;
          border: 6rpx 0px 0px 0px;
          border: 3rpx solid #007CD6;
          background-color: #007CD6;
          border-radius: 2rpx;
        }
      }
    }
  }
</style>