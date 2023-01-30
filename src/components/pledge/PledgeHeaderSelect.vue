<script
  lang="ts"
  setup
>
import { computed, inject, Ref } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'
import Checkbox from '@/components/Checkbox.vue'

const pledgeSelectedValue = inject(pledgeKeys.pledgeSelectedValue) as Ref<boolean>
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

<style
  lang="scss"
  scoped
>
</style>

