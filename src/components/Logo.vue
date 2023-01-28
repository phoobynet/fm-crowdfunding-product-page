<script
  lang="ts"
  setup
>
import { useAppStore } from '@/use/useAppStore'

const { menuModalOpen } = useAppStore()

</script>
<template>
  <img
    src="@/assets/images/logo.svg"
    alt=""
    :data-menu-open="menuModalOpen"
  >
</template>

<style
  lang="scss"
  scoped
>
  img {
    z-index: 999;
  }
</style>

