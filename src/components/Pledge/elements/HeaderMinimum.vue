<script lang="ts" setup>
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { inject } from 'vue'

const pledge = inject(pledgeKeys.pledge)
</script>

<template>
  <template v-if="pledge">
    <div
      v-if="pledge.id !== 0"
      class="pledge-header-minimum"
    >
      Pledge ${{ pledge.amount }} or more
    </div>
  </template>
</template>

<style lang="scss" scoped>
.pledge-header-minimum {
  @apply text-[0.875rem] font-medium text-green-500;
  grid-area: amount;

  @media (min-width: 1440px) {
    @apply text-[0.9375];
  }
}
</style>
