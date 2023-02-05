<template>
  <h3><slot></slot></h3>
</template>

<style
  lang="scss"
  scoped
>
  h3 {
    @apply self-center text-[1.175rem] font-bold tracking-[-0.3px];
    @apply desktop:text-[1.5rem] desktop:self-start tracking-normal;
  }
</style>

