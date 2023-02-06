<script lang="ts" setup>
import { ScrollHeight } from '@/lib/injectionKeys'
import { useMotions } from '@vueuse/motion'
import { Ref, computed, inject, ref } from 'vue'

defineProps<{ show: boolean }>()

const scrollHeight = inject(ScrollHeight) as Ref<number>
const modalElement = ref<HTMLDivElement>()
const motions = useMotions()

const modalHeight = computed(() =>
  scrollHeight.value ? `${scrollHeight.value}px` : '100vh',
)

const setModalRef = (el: HTMLDivElement) => {
  modalElement.value = el
}

const onLeave = (el: Element, done: () => void) => {
  motions.modal.leave(done)
}
</script>

<template>
  <transition
    :css="false"
    @leave="onLeave"
  >
    <div
      class="modal"
      v-if="show"
      v-motion="'modal'"
      :initial="{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }"
      :enter="{
        opacity: 1,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        transition: { duration: 300 },
      }"
      :leave="{
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        transition: { duration: 300 },
      }"
      :style="{ height: modalHeight }"
    >
      <slot :set-modal-ref="setModalRef"></slot>
    </div>
  </transition>
</template>
