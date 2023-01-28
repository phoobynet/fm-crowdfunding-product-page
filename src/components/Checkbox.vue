<script
  lang="ts"
  setup
>
import { computed } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get () {
    return props.modelValue
  },
  set (v) {
    emit('update:modelValue', v)
  },
})

</script>

<template>
  <input
    type="checkbox"
    v-model="value"
  />
</template>

<style
  lang="scss"
  scoped
>
  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    background-color: inherit;
    margin: 0;
    width: 1.5em;
    height: 1.5rem;
    border: 1px solid hsla(0, 0%, 0%, 15%);
    border-radius: 1em;
    transform: translateY(-0.075em);
    cursor: pointer;
    display: grid;
    place-content: center;

    &:disabled {
      cursor: default;
    }

    &::before {
      content: "";
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 1em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--clr-green-500);
    }

    &:checked::before {
      transform: scale(1);
    }
  }
</style>

