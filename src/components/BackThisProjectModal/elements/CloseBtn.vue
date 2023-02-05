<script lang="ts" setup>
defineProps<{
  closeModalHandler: () => void
}>()
</script>

<template>
  <img
    src="@/assets/images/icon-close-modal.svg"
    alt=""
    role="button"
    @click="closeModalHandler"
    class="close-btn"
  />
</template>

<style lang="scss" scoped>
.close-btn {
  @apply h-[0.875rem] w-[0.875rem] cursor-pointer self-center justify-self-end transition-all duration-200;
  @apply self-start desktop:translate-y-[-0.78rem] desktop:translate-x-[1rem] desktop:transform;

  &:hover {
    @apply scale-110;
  }

  &:active {
    @apply scale-100;
  }
}
</style>
