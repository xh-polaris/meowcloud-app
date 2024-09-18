<template>
  <view class="cjx-select fixed w-92vw cjx-select-box rounded-5 bg-#fff overflow-hidden z-10">
    <view class="cjx-select-show flex justify-between items-center h-10 px-2" @click="showOptions">
      <uni-icons type="staff" color="#2196f3" size="24" />
      <view class="flex-1 text-3.5 text-gray-500 ml-2 single-line-ellipsis max-w-100">
        {{ text || selectText }}
      </view>
      <view :class="[`triangle triangle-${selectStatus}`]"></view>
    </view>
    <view v-show="selectStatus === 'up'" class="px-2">
      <view v-for="item in range" :key="item.id" @click="optionClick(item)">
        <view
          :class="[
            'cjx-select-option flex justify-between items-center h-10 mx--2 px-2',
            selectValue === item.id ? 'bg-gray-200' : '',
          ]"
        >
          <uni-icons type="staff" color="#2196f3" size="24" />
          <view class="flex-1 text-3.5 text-gray-500 ml-2 single-line-ellipsis max-w-100">
            {{ item.name }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface Range {
  name: string
  id: string
  disabled?: boolean
}
const props = defineProps({
  range: {
    type: Array as PropType<Range[]>,
    default: () => {
      return []
    },
  },
  value: {
    type: String,
    default: '默认值',
  },
  text: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['change'])

const selectText = ref<string>('')
const selectValue = ref<string>(props.value as string)
const selectStatus = ref('down')

const showOptions = () => {
  selectStatus.value = selectStatus.value === 'down' ? 'up' : 'down'
}
const optionClick = (item: Range) => {
  selectValue.value = item.id
  selectText.value = item.name
  emits('change', { value: item.id, opt: item })
  showOptions()
}
</script>

<style lang="scss" scoped>
.triangle {
  width: 0;
  height: 0;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
}
.triangle-up {
  border-bottom: 8px solid #ddd;
}
.triangle-down {
  border-top: 8px solid #ddd;
}
.cjx-select-option {
  border-top: 1px solid #ddd;
}
.single-line-ellipsis {
  // max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
