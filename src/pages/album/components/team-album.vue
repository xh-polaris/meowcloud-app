<template>
  <view class="px-4 pb-2 box-border overflow-hidden">
    <cjx-select :range="teamList"></cjx-select>
    <view class="h-10"></view>
    <view class="flex w-92vw bg-gray-200">
      <cjx-grid
        v-for="(item, inx) in comData"
        :key="item.url"
        :info="item"
        :class="['w-1/5', inx < comData.length - 1 ? 'mr-2' : '']"
      ></cjx-grid>
    </view>
    <view class="h-35 bg-white rounded-2"></view>

    <view class="flex flex-wrap mt-5" style="">
      <cjx-img-grid
        v-for="item in comData"
        :key="item.url"
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

const testImg = catImg

const teamList = ref([
  {
    text: '全部团队',
    value: '0',
  },
  {
    text: '1222',
    value: '1',
  },
])
const comData = [
  { url: catImg, content: '成员管理', badge: 1 },
  { url: catImg, content: '导入图片', badge: 200 },
  { url: catImg, badge: 200, content: '批量导入' },
  { url: catImg, badge: 200, content: '回收站' },
  { url: catImg, badge: 200, content: '其他功能' },
]

const gridChange = () => {}
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
