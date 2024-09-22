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
        @create="createAlbum"
        @to-ablum="toAlbum"
      ></cjx-img-grid>
    </view>
  </view>
</template>
<script setup lang="ts">
import CjxSelect from '@/components/CjxSelect/CjxSelect.vue'
import CjxGrid from '@/components/CjxGrid/CjxGrid.vue'
import CjxImgGrid from '@/components/CjxImgGrid/CjxImgGrid.vue'
import catImg from '@/static/images/cat.jpg'
import { getTeamList, getAlbumInfo, createAlbumApi } from '@/service/album/album'

const teamDefName = ref('')
const teamDefValue = ref('')

const pageTeam = reactive({
  pageNum: 1,
  pageSize: 200,
})
const page = reactive({
  pageNum: 1,
  pageSize: 200,
})
const teamList = ref<any>([])
const albumInfo = ref<any>([{ name: '新建相册', id: '-1' }])
const comData = [
  { url: catImg, content: '成员管理', badge: 1 },
  { url: catImg, content: '导入图片', badge: 200 },
  { url: catImg, badge: 200, content: '批量导入' },
  { url: catImg, badge: 200, content: '回收站' },
  { url: catImg, badge: 200, content: '其他功能' },
]
const getTeamListFn = async () => {
  const res = await getTeamList(pageTeam)
  teamList.value = res.payload || []
  console.log('teamist', res.payload, teamList.value)

  teamDefName.value = res.payload[0]?.name
  teamDefValue.value = res.payload[0]?.id

  getAlbumInfoFn()
}
const teamChange = (data) => {
  teamDefName.value = data.value
  teamDefValue.value = data.opt.name
}

const getAlbumInfoFn = async () => {
  const res = await getAlbumInfo({ ...page, id: unref(teamDefValue) })
  albumInfo.value = res || []
  albumInfo.value.push({
    name: '新建相册',
    id: '-1',
  })
}

const createAlbum = async () => {
  const userinfo = uni.getStorageSync('userinfo')
  const res = await createAlbumApi({
    albumType: 1,
    ownerId: teamDefName.value,
    cover: '../../static/images/cat.jpg',
    public: true,
    albumInfoId: userinfo.userId,
  })
  if (res) getAlbumInfoFn()
}
// 到相册详情
const toAlbum = () => {
  // uni.navigateTo({
  //   url: '/pages/album/album-detail',
  // })
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
