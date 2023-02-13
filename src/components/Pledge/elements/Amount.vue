<script lang="ts" setup>
import AmountInput from './AmountInput.vue'
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
    v-motion
    class="pledgeAmount"
    :class="{ error: !!pledgeAmountError }"
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { duration: 500 } }"
  >
    <label for="amount">Enter your pledge</label>
    <div class="inputContainer">
      <AmountInput id="amount" />
    </div>
    <button
      class="btn continue"
      :disabled="!pledgeAmount || !!pledgeAmountError"
      @click="() => onContinueClick()"
    >
      Continue
    </button>
    <div
      v-show="pledgeAmountError"
      v-motion
      class="error"
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 500 } }"
    >
      {{ pledgeAmountError }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pledgeAmount {
  @apply grid h-full border-t-2 border-gray-50 px-[1.4rem] pt-[1.4rem] pb-0;
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
    @apply text-center text-[0.875rem] text-gray-300;
    grid-area: label;
  }

  .inputContainer {
    grid-area: input;
  }

  .btn.continue {
    @apply h-12;
    grid-area: continue;
  }

  .error {
    @apply justify-self-center text-[0.7rem] text-red-500;
    grid-area: error;
  }

  @media (min-width: 1440px) {
    @apply items-center py-[1.4rem] px-[1.6rem];
    grid-template-rows: 1fr auto;
    grid-template-columns: 21rem repeat(2, minmax(0, 1fr));
    grid-template-areas:
      'label input continue'
      '. error .';

    &.error {
      @apply pb-0;
      grid-template-rows: 1fr auto;
      grid-template-areas:
        'label input continue'
        '. error .';
    }

    label {
      @apply text-[0.9375rem] leading-7;
      text-align: unset;
    }
  }
}
</style>
