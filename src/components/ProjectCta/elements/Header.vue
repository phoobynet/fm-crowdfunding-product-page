<template>
  <header>
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<style
  lang="scss"
  scoped
>
  @import "@/styles/mixins";

  header {
    @apply py-[2.1rem] px-[3rem];
    @apply desktop:py-[2.5rem];

    h1 {
      @apply text-center text-[1.25rem] font-bold leading-[1.62rem];
      @apply desktop:text-[1.75rem] desktop:leading-[2.14rem];
    }
  }
</style>
