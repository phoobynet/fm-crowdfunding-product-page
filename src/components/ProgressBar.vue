<script
  lang="ts"
  setup
>
import { ref, toRefs, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'

const progressBar = ref<HTMLDivElement>()
const progressBarWidth = ref<number>()

const bar = ref<HTMLDivElement>()
const barWidth = ref<number>()

useResizeObserver(progressBar, (entries) => {
  progressBarWidth.value = entries[0].contentRect.width
})

const props = defineProps<{ goal: number, actual: number }>()

const {
  goal,
  actual,
} = toRefs(props)

watch([progressBarWidth, goal, actual], ([newProgressBarWidth, newGoal, newActual]) => {
  if (newProgressBarWidth && newGoal && newActual) {
    barWidth.value = (props.actual / props.goal) * newProgressBarWidth
  }
}, {
  immediate: true
})
</script>

<template>
  <div
    class="progress-bar"
    ref="progressBar"
  >
    <div
      class="bar"
      ref="bar"
      :style="{width: `${barWidth}px`}"
      :data-width="barWidth"
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
      width: 0;
      height: 0.8rem;
      background-color: var(--clr-green-500);
      border-radius: 0.5rem;
      top: 0;
      left: 0;
    }
  }
</style>

