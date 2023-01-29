<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const selectable = inject(pledgeKeys.selectable)
const outOfStock = inject(pledgeKeys.outOfStock)
const onSelectARewardClick = inject(pledgeKeys.onSelectARewardClick)
</script>

<template>
  <div
    class="pledge-select-reward"
    v-if="!selectable"
  >
    <button
      @click="onSelectARewardClick"
      class="button"
      :disabled="outOfStock"
    >
      <template v-if="outOfStock">Out of Stock</template>
      <template v-else>
        Select Reward
      </template>
    </button>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .pledge-select-reward {
    .button {
      height: 3rem;
      font-size: 0.875rem;
      padding-left: 2.1rem;
      padding-right: 2.1rem;
    }

    @media screen and (min-width: 1440px) {
      align-self: end;
      justify-self: end;

      .button {
        min-width: 5.5rem;
      }
    }
  }
</style>

