<script
  lang="ts"
  setup
>
import { computed, onMounted, ref } from 'vue'
import { vMaska } from 'maska'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])
const input = ref<HTMLInputElement>()
const isFocussed = ref<boolean>()

const value = computed({
  get () {
    return props.modelValue
  },
  set (v) {
    emit('update:modelValue', v)
  },
})

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
    class="project-pledge-amount-input"
    :class="{'focussed': isFocussed}"
    @focus="focusOnInput"
    @click="focusOnInput"
    @focusin="focusOnInput"
    @focusout="focusOutHandler"
  >
    <div class="currency-symbol">$</div>
    <input
      ref="input"
      type="text"
      v-model.number="value"
      v-maska
      data-maska="#####"
    />
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .project-pledge-amount-input {
    display: flex;
    align-items: center;
    border: 2px solid var(--clr-gray-50);
    border-radius: 2rem;
    gap: 0.5rem;
    height: 3rem;
    padding: 0 1rem;
    overflow: hidden;

    &.focussed {
      border: 2px solid var(--clr-green-500);
    }

    .currency-symbol {
      color: var(--clr-gray-100);
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

      &[type=number] {
        -moz-appearance: textfield;
      }
    }

  }
</style>

