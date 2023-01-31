<script
  lang="ts"
  setup
>
import { computed, inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const pledge = inject(pledgeKeys.pledge)
const isNoRewardPledge = inject(pledgeKeys.isNoRewardPledge)
const selectable = inject(pledgeKeys.selectable)

const show = computed(() => !isNoRewardPledge?.value && !!pledge)
</script>

<template>
  <div
    class="pledge-remaining"
    :class="{selectable}"
    v-if="show"
  >
    <div class="amount">
      {{ pledge?.remaining }}
    </div>
    <div>left</div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .pledge-remaining {
    grid-area: remaining;
    align-self: start;
    display: flex;
    font-size: 0.9375rem;
    align-items: center;
    color: var(--clr-gray-300);
    gap: .5rem;

    .amount {
      color: black;
      font-size: 2rem;
      font-weight: 700;
    }

    &.selectable {
      .amount {
        font-size: 1.125rem;
      }
    }

    @media screen and (min-width: 1440px) {
      .amount {
        font-size: 2rem;
        justify-self: end;
        align-self: end;
      }
    }
  }
</style>

