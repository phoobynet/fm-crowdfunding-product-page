<template>
  <div class="stat">
    <div class="amount">
      <slot name="amount">ERROR!</slot>
    </div>
    <div class="description">
      <slot name="description">ERROR!</slot>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .stat {
    @apply flex flex-col items-center w-full;
    @apply desktop:items-start;

    .amount {
      @apply text-[2rem] font-bold;
    }

    .description {
      @apply text-[0.875rem] text-gray-300 pt-0.5;
      @apply desktop:text-[0.9375rem];
    }
  }
</style>

