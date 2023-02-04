<script
  lang="ts"
  setup
>
</script>

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
    .amount {
      @apply text-[2rem] font-bold;
    }

    .description {
      @apply text-[0.875rem] text-gray-300;

      @media (min-width: 1440px) {
        @apply text-[0.9375rem];
      }
    }

  }
</style>

