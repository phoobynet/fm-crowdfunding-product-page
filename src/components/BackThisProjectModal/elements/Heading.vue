<template>
  <h3><slot></slot></h3>
</template>

<style
  lang="scss"
  scoped
>
  h3 {
    @apply self-center text-[1.175rem] font-bold tracking-[-0.3px];

    @media (min-width: 1440px) {
      @apply self-start text-[1.5rem] tracking-normal;
    }
  }
</style>

