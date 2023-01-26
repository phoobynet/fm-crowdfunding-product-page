<script
  lang="ts"
  setup
>
import { MenuOpen } from '@/lib/injectionKeys'
import { inject, Ref } from 'vue'

const menuOpen = inject(MenuOpen) as Ref<boolean>

</script>
<template>
  <img
    src="@/assets/images/logo.svg"
    alt=""
    :data-menu-open="menuOpen"
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

