<script lang="ts" setup>
import { Logo, TopBarMenu } from '@/components'

// TODO: top-bar - do i really need two divs?
</script>

<template>
  <div class="top-bar">
    <div>
      <Logo />
      <TopBarMenu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  @apply flex justify-center;

  & > div {
    @apply flex min-h-[3rem] w-[var(--mobile-width)] min-w-[var(--mobile-width)] items-center justify-between py-[2rem] px-[1.5rem];

    @media (min-width: 1440px) {
      @apply w-[var(--desktop-width)] px-[10.4rem] py-[3rem];
    }
  }
}
</style>
