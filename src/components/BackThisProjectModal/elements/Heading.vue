<template>
  <h3><slot></slot></h3>
</template>

<style
  lang="scss"
  scoped
>
  h3 {
    @apply text-[1.175rem] font-bold tracking-[-0.3px] #{!important};
    @apply desktop:text-[1.5rem] tracking-normal;
  }
</style>

