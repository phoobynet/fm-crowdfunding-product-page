<script
  lang="ts"
  setup
>
</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .card {
    background-color: white;
    border-radius: .7rem;
    border: 1px solid var(--clr-gray-75);
    padding: 1rem;
  }
</style>

