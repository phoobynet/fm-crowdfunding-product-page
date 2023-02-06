<script lang="ts" setup>
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { inject } from 'vue'

const pledge = inject(pledgeKeys.pledge)
</script>

<template>
  <p
    v-if="pledge"
    class="pledge-description"
  >
    {{ pledge.description }}
  </p>
</template>

<style lang="scss" scoped>
.pledge-description {
  @apply text-sm leading-6 text-gray-300;

  @media (min-width: 1440px) {
    @apply self-end text-[0.9375rem] leading-7;
  }
}
</style>
