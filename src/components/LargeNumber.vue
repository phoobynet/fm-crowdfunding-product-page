<script lang="ts" setup>
import { enUS } from '@/lib/locale'
import { computed } from 'vue'

const props = defineProps<{ amount?: number }>()

const options: Intl.NumberFormatOptions = {
  maximumFractionDigits: 0,
}

const largeNumberDisplay = computed(() =>
  props.amount ? props.amount.toLocaleString(enUS, options) : '',
)
</script>

<template>
  <span>{{ largeNumberDisplay }}</span>
</template>
