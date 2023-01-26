<script
  lang="ts"
  setup
>
import TopBarMenu from '@/components/TopBarMenu.vue'
import Logo from '@/components/Logo.vue'
</script>

<template>
  <div class="top-bar">
    <Logo/>
    <TopBarMenu />
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 3rem;
    padding: 2rem 1.5rem;

    @media screen and (min-width: 1440px){
      padding: 3rem 10.4rem;
    }
  }
</style>

