<template>
  <view class="flex items-center">
    <view
      v-for="(item, inx) in list"
      :class="[
        'mr-3',
        currentKey === inx ? 'text-5 text-blue-500 font-600' : 'text-4 text-black-300',
      ]"
      :key="item"
      @click="tabChange(inx)"
    >
      <view>{{ item }}</view>
      <view
        :class="['w-4 h-2px  rounded-2 mx-auto mt-1.5', currentKey === inx ? 'bg-blue-500' : '']"
      ></view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineProps({
  list: {
    type: Array,
    default: () => {
      return []
    },
  },
})
const emits = defineEmits(['change'])
const currentKey = ref(0)

const tabChange = (key) => {
  currentKey.value = key
  emits('change', key)
}
</script>

<style lang="scss" scoped></style>
