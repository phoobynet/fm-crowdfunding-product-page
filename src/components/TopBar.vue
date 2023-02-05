<script lang="ts" setup>
import { Logo, TopBarMenu } from '@/components'

// TODO: top-bar - do i really need two divs?
</script>

<template>
  <div class="topBar">
    <div>
      <Logo />
      <TopBarMenu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topBar {
  @apply flex justify-center;

  & > div {
    @apply flex min-h-[3rem] w-mobile min-w-mobile items-center justify-between py-[2rem] px-[1.5rem];
    @apply desktop:w-desktop desktop:px-[10.4rem] desktop:py-[3rem];
  }
}
</style>
