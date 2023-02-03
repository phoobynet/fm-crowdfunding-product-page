<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import TopBarMenu from '@/components/TopBarMenu.vue'
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
  display: flex;
  justify-content: center;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 3rem;
    padding: 2rem 1.5rem;
    width: var(--mobile-width);
    min-width: var(--mobile-width);

    @media screen and (min-width: 1440px) {
      padding: 3rem 10.4rem;
      width: var(--desktop-width);
    }
  }
}
</style>
