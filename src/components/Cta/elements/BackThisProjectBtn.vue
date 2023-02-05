<script lang="ts" setup>
const emit = defineEmits({
  click: null,
})
</script>

<template>
  <button
    class="btn w-full py-0 px-4 desktop:w-[12.75rem]"
    @click="emit('click')"
  >
    Back this project
  </button>
</template>
