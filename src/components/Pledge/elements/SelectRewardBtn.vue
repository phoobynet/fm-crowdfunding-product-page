<script lang="ts" setup>
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { inject } from 'vue'

const selectable = inject(pledgeKeys.selectable)
const outOfStock = inject(pledgeKeys.outOfStock)
const onSelectARewardClick = inject(pledgeKeys.onSelectARewardClick)
</script>

<template>
  <div
    v-if="!selectable"
    class="pledge-select-reward"
  >
    <button
      class="btn"
      :disabled="outOfStock"
      @click="onSelectARewardClick"
    >
      <template v-if="outOfStock">Out of Stock</template>
      <template v-else> Select Reward </template>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pledge-select-reward {
  .btn {
    @apply h-12 pl-[2.1rem] pr-[2.1rem] text-sm;
  }

  @media (min-width: 1440px) {
    @apply items-end justify-self-end;
    .btn {
      @apply min-w-[5.5rem];
    }
  }
}
</style>
