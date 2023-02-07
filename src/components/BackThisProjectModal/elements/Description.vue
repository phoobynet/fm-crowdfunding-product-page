<script
  lang="ts"
  setup
>
</script>

<template>
  <p>
    <slot></slot>
  </p>
</template>

<style
  lang="scss"
  scoped
>
  p {
    @apply text-[0.875rem] leading-[1.5rem] text-gray-300;
    @apply desktop:text-[1rem];
  }
</style>

