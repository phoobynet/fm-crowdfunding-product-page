<script lang="ts" setup>
import { ScrollHeight } from '@/lib/injectionKeys'
import { provide, ref } from 'vue'

const scrollHeight = ref<number>()

provide(ScrollHeight, scrollHeight)
</script>

<template>
  <RouterView />
</template>
