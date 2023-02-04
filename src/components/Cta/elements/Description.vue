<template>
  <p class="description">
    <slot>No content</slot>
  </p>
</template>

<style
  lang="scss"
  scoped
>
  .description {
    @apply text-center text-size-14 font-normal leading-6 text-gray-300;
    @apply desktop:text-size-16 desktop:leading-none;
  }
</style>

