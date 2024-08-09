<script setup lang="ts">
  import BottomBar from "@/components/BottomBar/BottomBar.vue";
  import TopBar from "@/components/TopBar/TopBar.vue";
  import Carousel from "@/components/Carousel/Carousel.vue";
  import ToolBar from "@/components/tool-bar/tool-bar.vue";
  import CatsList from "@/components/CatsList/CatsList.vue";
</script>

<template>
  <view class="my-album">
    <top-bar id="my-album"/>
    <carousel/>
    <tool-bar/>
    <cats-list/>
    <bottom-bar id="album"/>
  </view>
</template>

<style scoped>
.my-album{
  height: 100vh;
  background-color: #F4F7FA;
}
</style>