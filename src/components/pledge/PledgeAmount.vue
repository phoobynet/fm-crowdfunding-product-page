<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'
import PledgeAmountInput from '@/components/pledge/PledgeAmountInput.vue'

const pledgeAmount = inject(pledgeKeys.pledgeAmount)
const canEnterPledge = inject(pledgeKeys.canEnterPledge)
</script>

<template>
  <div
    v-if="canEnterPledge"
    class="pledgeAmount"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { duration: 500 } }"
  >
      <label for="pledge-amount">Enter your pledge</label>
      <div class="enter-your-pledge-input">
        <PledgeAmountInput v-model="pledgeAmount" />
      </div>
      <button
        class="button continue-button"
        :disabled="!pledgeAmount"
      >Continue
      </button>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .pledgeAmount {
    padding: 1.4rem 1.4rem 0;
    border-top: 2px solid var(--clr-gray-50);
    display: grid;
    grid-template-rows: 2rem 1fr;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-gap: 1rem;
    grid-template-areas:
        "enter-your-pledge-label enter-your-pledge-label"
        "enter-your-pledge-input continue-button";

    label {
      grid-area: enter-your-pledge-label;
      text-align: center;
      color: var(--clr-gray-300);
      font-size: 0.875rem;
    }

    .enter-your-pledge-input {
      grid-area: enter-your-pledge-input;
    }

    .continue-button {
      grid-area: continue-button;
      height: 3rem;
    }
  }
</style>

