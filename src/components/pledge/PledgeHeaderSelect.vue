<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const pledgeSelectedValue = inject(pledgeKeys.pledgeSelectedValue)
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

