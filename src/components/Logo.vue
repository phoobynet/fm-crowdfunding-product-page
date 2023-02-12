<script lang="ts" setup>
import { useAppStore } from '@/use'

const { menuModalOpen } = useAppStore()
</script>

<template>
  <img
    src="@/assets/images/logo.svg"
    alt=""
    :data-menu-open="menuModalOpen"
    class="z-[999]"
  />
</template>
