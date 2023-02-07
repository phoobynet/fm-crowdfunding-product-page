<script lang="ts" setup>
import Modal from '@/components/Modal.vue'

defineProps<{
  show: boolean
}>()

const emit = defineEmits({
  close: null,
})
</script>

<template>
  <Modal :show="show">
    <div class="mx-auto max-w-mobile-content">
      <div class="h-[20rem] min-w-[20rem] bg-white p-4 text-black">
        Hello, World!
      </div>
      <button @click="() => emit('close')">close</button>
    </div>
  </Modal>
</template>

<style lang="scss" scoped></style>
