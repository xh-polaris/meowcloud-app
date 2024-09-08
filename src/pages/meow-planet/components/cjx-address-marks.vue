<template>
  <map
    class="map"
    :scale="3"
    :markers="markers"
    :latitude="latitude"
    show-location
    :longitude="longitude"
  >
    <cover-view slot="callout">
      <block v-for="(item, index) in markers" :key="index">
        <cover-view class="number-bg" :marker-id="item.id">
          <cover-view>点{{ item.number }}</cover-view>
        </cover-view>
      </block>
    </cover-view>
  </map>
</template>

<!-- 这里的模块可以看着自己改成 vue2 -->
<script setup>
import { ref, reactive, onMounted } from 'vue'
// 经纬度
const latitude = ref(37)
const longitude = ref(105)
// 标记点
const markers = ref([
  {
    id: 1,
    latitude: 23.12,
    longitude: 113.47,
    // iconPath: '/static/img/sj.png',
    width: 20,
    height: 30,
    number: 118,
    customCallout: {
      anchorY: 0, // Y轴偏移量
      anchorX: 0, // X轴偏移量
      display: 'ALWAYS', // 一直展示
    },
  },
  {
    id: 2,
    latitude: 23.12,
    longitude: 113.49,
    // iconPath: '/static/img/sj.png',
    width: 20,
    height: 30,
    number: 123,
    customCallout: {
      anchorY: 0, // Y轴偏移量
      anchorX: 0, // X轴偏移量
      display: 'ALWAYS', // 一直展示
    },
  },
  {
    id: 3,
    latitude: 23.11,
    longitude: 113.49,
    // iconPath: '/static/img/sj.png',
    width: 20,
    height: 30,
    number: 232,
    customCallout: {
      anchorY: 0, // Y轴偏移量
      anchorX: 0, // X轴偏移量
      display: 'ALWAYS', // 一直展示
    },
  },
])
</script>

<style lang="scss">
.bgs {
  padding: 10px 15px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 10px;
}

.map {
  width: 100%;
  height: 35vh;
  box-sizing: border-box;

  .number-bg {
    padding: 20rpx 30rpx;
    font-size: 28rpx;
    background-color: #fff;
    border-radius: 20rpx;
  }
}
</style>
