<script
  lang="ts"
  setup
>
import { computed, inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const pledge = inject(pledgeKeys.pledge)
const isNoRewardPledge = inject(pledgeKeys.isNoRewardPledge)

const show = computed(() => {
  return isNoRewardPledge?.value === true && !!pledge
})
</script>

<template>
  <div
    class="pledge-remaining"
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
    gap: .6rem;

    .amount {
      color: black;
      font-size: 2rem;
      font-weight: 700;
    }

    @media screen and (min-width: 1440px) {
      .amount {
        font-size: 0.9375rem;
        justify-self: end;
        align-self: end;
      }
    }
  }
</style>

