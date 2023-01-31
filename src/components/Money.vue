<script
  lang="ts"
  setup
>
import { computed } from 'vue'

const props = defineProps<{amount?: number, fractionalDigits?: number}>()

const displayAmount = computed(() => {
  if (props.amount) {
    return props.amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: props.fractionalDigits || 0,
    })
  }
  return ''
})

</script>

<template>
<span>{{ displayAmount}}</span>
</template>

<style
  lang="scss"
  scoped
>
</style>

