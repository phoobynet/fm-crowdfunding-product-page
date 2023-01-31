<script
  lang="ts"
  setup
>
import { computed } from 'vue'

const props = defineProps<{amount?: number}>()

const largeNumberDisplay = computed(() => {
  if (props.amount) {
    return props.amount.toLocaleString('en-US', {
      maximumFractionDigits: 0,
    })
  }
  return ''
})
</script>

<template>
  <span>{{ largeNumberDisplay}}</span>
</template>

<style
  lang="scss"
  scoped
>
</style>

