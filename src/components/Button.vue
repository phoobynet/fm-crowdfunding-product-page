<script
  lang="ts"
  setup
>
const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style
  lang="scss"
  scoped
>
  button {
    color: white;
    background-color: var(--clr-light-green);
    fonts-size: 1rem;
    font-weight: 700;
    height: 3.5rem;
    border-radius: 2rem;
    padding: 0 2.8rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: var(--clr-dark-green);
    }
  }
</style>

