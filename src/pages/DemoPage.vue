<script lang="ts" setup>
import ModalDemo from '@/components/ModalDemo.vue'
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <button
    class="btn w-96"
    @click="() => (show = true)"
  >
    Show
  </button>
  <ModalDemo
    @close="() => (show = false)"
    :show="show"
  />
</template>

<style lang="scss" scoped></style>
