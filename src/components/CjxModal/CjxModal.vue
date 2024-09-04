<template>
  <uni-popup ref="alertDialog" type="dialog" :is-mask-click="false">
    <view class="w-85vw py-5 px-4 bg-red-100 rounded-2 relative box-border" v-if="true">
      <div class="close-button top-2 right-2" @click="closeModal"><span class="icon-x"></span></div>

      <!-- 内容部分--------开始 -->
      <slot></slot>
      <!-- 内容部分--------结束 -->

      <view class="flex justify-between items-center">
        <button class="w-25 mx-0" style="background: gray" type="primary" size="mini">取消</button>
        <button class="w-25 mx-0" type="warn" size="mini">确认删除</button>
      </view>
    </view>
  </uni-popup>
</template>

<script lang="ts" setup>
const alertDialog = ref()

const closeModal = () => {
  alertDialog.value.close()
}

defineExpose({
  alertDialog,
})
</script>

<style lang="scss" scoped>
.close-button {
  position: absolute;
  display: inline-block;
  width: 40rpx;
  height: 40rpx;
}

.icon-x {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  background-color: gray;
  transform: translate(-50%, -50%);
}

.icon-x:before,
.icon-x:after {
  position: absolute;
  width: 100%;
  height: 2px;
  content: '';
  background-color: inherit;
}

.icon-x:before {
  transform: rotate(45deg);
}

.icon-x:after {
  transform: rotate(-45deg);
}
</style>
