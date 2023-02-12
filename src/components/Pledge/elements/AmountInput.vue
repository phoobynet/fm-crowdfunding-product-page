<script lang="ts" setup>
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
// noinspection ES6UnusedImports
import { vMaska } from 'maska'
import { inject, onMounted, ref } from 'vue'

defineProps<{ id: string }>()
const input = ref<HTMLInputElement>()
const isFocussed = ref<boolean>()
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
  @apply relative flex h-12 items-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 p-0 py-0;
  @apply px-4 transition-[border] duration-200;
  @apply desktop:gap-[0.3rem];

  &.focussed {
    @apply border-2 border-green-500;
  }

  .currencySymbol {
    @apply font-bold text-gray-100;
    @apply desktop:pl-[0.65rem] desktop:text-sm;
  }

  &[data-invalid='true'] {
    @apply border-2 border-red-500;
  }

  input {
    @apply max-w-[4rem] border-none font-bold text-black outline-none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      @apply m-0 appearance-none;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
}
</style>
