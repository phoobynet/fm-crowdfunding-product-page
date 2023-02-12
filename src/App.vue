<script lang="ts" setup>
import { ScrollHeight } from '@/lib/dependency-injection'
import { provide, ref } from 'vue'

const scrollHeight = ref<number>()

provide(ScrollHeight, scrollHeight)
</script>

<template>
  <RouterView />
</template>
