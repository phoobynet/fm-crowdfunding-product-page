<script lang="ts" setup>
import { enUS } from '@/lib/locale/enUS'
import { computed } from 'vue'

const props = defineProps<{ amount: number; fractionalDigits?: number }>()

const options: Intl.NumberFormatOptions = {
  style: 'currency',
  currency: 'USD',
}

const displayAmount = computed(() =>
  props.amount
    ? props.amount.toLocaleString(enUS, {
        ...options,
        maximumFractionDigits: props.fractionalDigits || 0,
      })
    : '',
)
</script>

<template>
  <span>{{ displayAmount }}</span>
</template>
