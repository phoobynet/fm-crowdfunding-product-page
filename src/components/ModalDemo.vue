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
    <template #default="{ setModalRef }">
      <div :ref="(el) => setModalRef(el)">
        <div class="h-1/2 w-64 bg-white p-4 text-black">Hello, World!</div>
        <button @click="() => emit('close')">close</button>
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped></style>
