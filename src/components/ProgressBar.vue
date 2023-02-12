<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core'
import { ref, toRefs, watch } from 'vue'

const progressBar = ref<HTMLDivElement>()
const progressBarWidth = ref<number>()

const bar = ref<HTMLDivElement>()
const barWidth = ref<number>()

useResizeObserver(progressBar, (entries) => {
  progressBarWidth.value = entries[0].contentRect.width
})

const props = defineProps<{ goal: number; actual: number }>()

const { goal, actual } = toRefs(props)

watch(
  [progressBarWidth, goal, actual],
  ([newProgressBarWidth, newGoal, newActual]) => {
    if (newProgressBarWidth && newGoal && newActual) {
      barWidth.value = (props.actual / props.goal) * newProgressBarWidth
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div
    class="progressBar"
    ref="progressBar"
  >
    <div
      class="bar"
      ref="bar"
      :style="{ width: `${barWidth}px` }"
      :data-width="barWidth"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.progressBar {
  @apply relative h-[0.8rem] w-full overflow-hidden overflow-hidden rounded-lg rounded-md bg-gray-50;

  .bar {
    @apply absolute top-0 left-0 h-[0.8rem] w-0 rounded-lg rounded-md bg-green-500;
  }
}
</style>
