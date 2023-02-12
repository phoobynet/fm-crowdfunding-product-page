<script lang="ts" setup>
import { ScrollHeight } from '@/lib/dependency-injection'
import { useMotions } from '@vueuse/motion'
import { Ref, computed, inject } from 'vue'

defineProps<{ show: boolean }>()

const scrollHeight = inject(ScrollHeight) as Ref<number>
const motions = useMotions()

const modalHeight = computed(() =>
  scrollHeight.value ? `${scrollHeight.value}px` : '100vh',
)

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
      class="absolute top-0 left-0 right-0 z-[999]"
      v-if="show"
      v-motion="'modal'"
      :initial="{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }"
      :enter="{
        opacity: 1,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        transition: { duration: 300 },
      }"
      :leave="{
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        transition: { duration: 300 },
      }"
      :style="{ height: modalHeight }"
    >
      <slot />
    </div>
  </transition>
</template>
