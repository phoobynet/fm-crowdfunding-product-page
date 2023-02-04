<script lang="ts" setup>
import PledgeAmountInput from '@/components/Pledge/PledgeAmountInput.vue'
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { Ref, inject } from 'vue'

const pledgeAmount = inject(pledgeKeys.pledgeAmount) as Ref<number | undefined>
const pledgeAmountError = inject(pledgeKeys.pledgeAmountError)
const canEnterPledge = inject(pledgeKeys.canEnterPledge)

const onContinueClick = inject(pledgeKeys.onContinueClick) as () => void
</script>

<template>
  <div
    v-if="canEnterPledge"
    class="pledgeAmount"
    :class="{ error: !!pledgeAmountError }"
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { duration: 500 } }"
  >
    <label for="pledge-amount">Enter your pledge</label>
    <div class="enter-your-pledge-input">
      <PledgeAmountInput />
    </div>
    <button
      class="button continue-button"
      :disabled="!pledgeAmount || !!pledgeAmountError"
      @click="() => onContinueClick()"
    >
      Continue
    </button>
    <div
      v-show="pledgeAmountError"
      class="error"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 500 } }"
    >
      {{ pledgeAmountError }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pledgeAmount {
  height: 100%;
  padding: 1.4rem 1.4rem 0;
  border-top: 2px solid var(--clr-gray-50);
  display: grid;
  grid-template-rows: 2.5rem 1fr;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-column-gap: 1rem;
  grid-template-areas:
    'label label'
    'input continue';

  &.error {
    grid-template-rows: 2.5rem 1fr auto;
    grid-template-areas:
      'label label'
      'input continue'
      'error .';
  }

  label {
    grid-area: label;
    text-align: center;
    color: var(--clr-gray-300);
    font-size: 0.875rem;
  }

  .enter-your-pledge-input {
    grid-area: input;
  }

  .continue-button {
    grid-area: continue;
    height: 3rem;
  }

  .error {
    grid-area: error;
    font-size: 0.7rem;
    color: var(--clr-red-500);
    justify-self: center;
  }

  @media screen and (min-width: 1440px) {
    padding: 1.4rem 1.6rem;

    grid-template-rows: 1fr auto;
    grid-template-columns: 21rem repeat(2, minmax(0, 1fr));
    grid-template-areas:
      'label input continue'
      '. error .';
    align-items: center;

    &.error {
      grid-template-rows: 1fr auto;
      grid-template-areas:
        'label input continue'
        '. error .';
      padding-bottom: 0;
    }

    label {
      text-align: unset;
      font-size: 0.9375rem;
      line-height: 1.75rem;
    }
  }
}
</style>
