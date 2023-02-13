<template>
  <div class="spacer">
    <div class="hl"></div>
    <div class="vl"></div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .spacer {
    @apply flex flex-col items-center;

    .vl {
      @apply hidden h-[3.9375rem] w-[1rem] border-r-[1px] border-gray-90;
      @apply desktop:block;
    }

    .hl {
      @apply h-[1rem] w-[5rem] border-b-[1px] border-gray-90;
      @apply desktop:hidden;
    }
  }
</style>

