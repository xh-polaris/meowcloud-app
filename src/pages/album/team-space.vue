<script setup lang="ts">
import BottomBar from '@/components/BottomBar/BottomBar.vue'
import TopBar from '@/components/TopBar/TopBar.vue'
import TeamChoosing from '@/components/TeamChoosing/TeamChoosing.vue'
import TeamTools from '@/components/TeamTools/TeamTools.vue'
import TeamBoard from '@/components/TeamBoard/TeamBoard.vue'
import CatsList from '@/components/CatsList/CatsList.vue'
</script>

<template>
  <view class="team-space">
    <top-bar id="team-space" />
    <team-choosing />
    <team-tools />
    <team-board />
    <cats-list />
    <bottom-bar id="album" />
  </view>
</template>

<style scoped>
.team-space {
  width: 100vw;
  height: 100vh;
  background-color: #f4f7fa;
}
</style>
