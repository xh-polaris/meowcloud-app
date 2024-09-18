<template>
  <view class="px-4 pb-2 box-border overflow-hidden">
    <cjx-select :range="teamList" :text="teamDefName" @change="teamChange"></cjx-select>
    <view class="h-10"></view>
    <view class="flex w-92vw">
      <cjx-grid
        v-for="(item, inx) in comData"
        :key="item.url"
        :info="item"
        :class="['w-1/5', inx < comData.length - 1 ? 'mr-2' : '']"
      ></cjx-grid>
    </view>
    <view class="h-35 bg-white rounded-2"></view>

    <view class="flex flex-wrap mt-5">
      <cjx-img-grid
        v-for="item in albumInfo"
        :key="item.cover"
        :info="item"
        radiusClass="rounded-1/2"
        class="w-1/3"
      ></cjx-img-grid>
    </view>
  </view>
</template>
<script setup lang="ts">
import CjxSelect from '@/components/CjxSelect/CjxSelect.vue'
import CjxGrid from '@/components/CjxGrid/CjxGrid.vue'
import CjxImgGrid from '@/components/CjxImgGrid/CjxImgGrid.vue'
import catImg from '@/static/images/cat.jpg'
import { getTeamList, getAlbumInfo } from '@/service/album/album'

const teamDefName = ref('')
const teamList = ref<any>([])
const albumInfo = ref<any>([])
const comData = [
  { url: catImg, content: '成员管理', badge: 1 },
  { url: catImg, content: '导入图片', badge: 200 },
  { url: catImg, badge: 200, content: '批量导入' },
  { url: catImg, badge: 200, content: '回收站' },
  { url: catImg, badge: 200, content: '其他功能' },
]

const getTeamListFn = async () => {
  const res = await getTeamList()
  teamList.value = res || []
  teamDefName.value = res[0]?.name

  getAlbumInfoFn()
}
const teamChange = (val) => {}

const getAlbumInfoFn = async () => {
  const res = await getAlbumInfo(1)
  albumInfo.value = res || []
}

getTeamListFn()
</script>
<style lang="scss" scoped>
.grid-item-box {
  /* #ifndef APP-NVUE */
  display: flex;
  flex: 1;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30rpx 0;
}
.grid-image {
  width: 60rpx;
  height: 60rpx;
}
</style>
