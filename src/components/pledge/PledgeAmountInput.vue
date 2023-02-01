<script lang="ts" setup>
import { pledgeKeys } from '@/components/pledge/pledgeKeys'
import { Pledge } from '@/lib/types/Pledge'
import { vMaska } from 'maska'
import { inject, onMounted, ref } from 'vue'

const input = ref<HTMLInputElement>()
const isFocussed = ref<boolean>()
const pledge = inject(pledgeKeys.pledge) as Pledge
const pledgeAmountError = inject(pledgeKeys.pledgeAmountError)
const pledgeAmount = inject(pledgeKeys.pledgeAmount)

const focusOnInput = () => {
  if (input.value) {
    input.value.focus({
      preventScroll: true,
    })
    input.value.select()
    isFocussed.value = true
  }
}

const focusOutHandler = () => {
  isFocussed.value = false
}

onMounted(() => {
  focusOnInput()
})
</script>

<template>
  <div
    class="projectPledgeAmountInput"
    :class="{ focussed: isFocussed }"
    :data-invalid="!!pledgeAmountError"
    @focus="focusOnInput"
    @click="focusOnInput"
    @focusin="focusOnInput"
    @focusout="focusOutHandler"
  >
    <div class="currencySymbol">$</div>
    <input
      ref="input"
      type="number"
      v-model.number="pledgeAmount"
      inputmode="numeric"
      v-maska
      data-maska="#####"
    />
  </div>
</template>

<style lang="scss" scoped>
.projectPledgeAmountInput {
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid var(--clr-gray-50);
  border-radius: 2rem;
  gap: 0.5rem;
  height: 3rem;
  padding: 0 1rem;
  overflow: hidden;
  transition: border 0.5s;

  &.focussed {
    border: 2px solid var(--clr-green-500);
  }

  .currencySymbol {
    color: var(--clr-gray-100);
    font-weight: 700;
  }

  &[data-invalid='true'] {
    border: 2px solid var(--clr-red-500);
  }

  input {
    outline: none;
    border: none;
    color: black;
    font-weight: 700;
    max-width: 4rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 0.3rem;
    .currencySymbol {
      font-size: 0.875rem;
      padding-left: 0.65rem;
    }
  }
}
</style>
