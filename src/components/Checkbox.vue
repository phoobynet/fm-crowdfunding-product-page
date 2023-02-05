<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits({
  'update:modelValue': (payload: boolean) => true,
})

const value = computed({
  get() {
    return props.modelValue
  },
  set(v) {
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

<style lang="scss" scoped>
input[type='checkbox'] {
  @apply m-0 grid h-6 w-6 cursor-pointer appearance-none place-content-center rounded-full border border-solid border-[#00000026];

  &:disabled {
    @apply cursor-default;
  }

  &::before {
    @apply h-3 w-3 scale-0 transform rounded-full shadow-[inset_1em_1em_var(--clr-green-500)] transition-[120ms] ease-in-out;
    content: '';
    //box-shadow: inset 1em 1em var(--clr-green-500);
  }

  &:checked::before {
    @apply scale-100 transform;
  }
}
</style>
