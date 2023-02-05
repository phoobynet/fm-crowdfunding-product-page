<script lang="ts" setup>
import Checkbox from '@/components/Checkbox.vue'
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { Ref, inject } from 'vue'

const pledgeSelectedValue = inject(
  pledgeKeys.pledgeSelectedValue,
) as Ref<boolean>
const outOfStock = inject(pledgeKeys.outOfStock)
const selectable = inject(pledgeKeys.selectable)
</script>

<template>
  <div v-if="selectable">
    <Checkbox
      v-model="pledgeSelectedValue"
      :disabled="outOfStock"
    />
  </div>
</template>
