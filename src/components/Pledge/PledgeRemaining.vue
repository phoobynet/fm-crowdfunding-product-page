<script lang="ts" setup>
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { computed, inject } from 'vue'

const pledge = inject(pledgeKeys.pledge)
const isNoRewardPledge = inject(pledgeKeys.isNoRewardPledge)
const selectable = inject(pledgeKeys.selectable)

const show = computed(() => !isNoRewardPledge?.value && !!pledge)
</script>

<template>
  <div
    class="pledge-remaining"
    :class="{ selectable }"
    v-if="show"
  >
    <div class="amount">
      {{ pledge?.remaining }}
    </div>
    <div>left</div>
  </div>
</template>

<style lang="scss" scoped>
.pledge-remaining {
  @apply flex items-center gap-2 self-start text-[0.9375rem] text-gray-300;
  grid-area: remaining;

  .amount {
    @apply text-[2rem] font-bold text-black;
  }

  &.selectable {
    .amount {
      @apply text-[1.125rem];
    }
  }

  @media (min-width: 1440px) {
    .amount {
      @apply items-end justify-self-end text-[2rem];
    }
  }
}
</style>
