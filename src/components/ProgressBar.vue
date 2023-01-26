<script
  lang="ts"
  setup
>
</script>

<template>
  <div
    class="progress-bar"
    ref="progressBarEl"
  >
    <div
      class="bar"
    >
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .progress-bar {
    position: relative;
    width: 100%;
    background-color: var(--clr-gray-50);
    height: 0.8rem;
    border-radius: 0.5rem;
    overflow: hidden;

    .bar {
      position: absolute;
      width: 100%;
      height: 0.8rem;
      background-color: var(--clr-green-500);
      border-radius: 0.5rem;
      top: 0;
      left: -4rem;
    }
  }
</style>

