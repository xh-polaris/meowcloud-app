<template>
  <barrage-comment-item
    class="relative overflow-hidden"
    v-for="(comment, index) in commentsList"
    :key="index"
    :comment="comment"
  />
</template>

<script setup lang="ts">
import BarrageCommentItem from '@/components/BarrageCommentItem/BarrageCommentItem.vue'

interface CommentsProps {
  comments: string[]
}

const props = defineProps<CommentsProps>()

const commentsList = ref(props.comments)
</script>

<style scoped lang="scss"></style>
