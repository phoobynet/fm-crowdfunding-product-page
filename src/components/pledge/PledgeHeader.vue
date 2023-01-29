<script
  lang="ts"
  setup
>
import PledgeHeaderName from '@/components/pledge/PledgeHeaderName.vue'
import PledgeHeaderSelect from '@/components/pledge/PledgeHeaderSelect.vue'
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'
import PledgeHeaderMinimum from '@/components/pledge/PledgeHeaderMinimum.vue'

const selectable = inject(pledgeKeys.selectable)

</script>

<template>
  <div
    class="pledge-header"
    :class="{selectable}"
  >
    <PledgeHeaderSelect />
    <PledgeHeaderName />
    <PledgeHeaderMinimum />
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .pledge-header {
    &.selectable {
      // TODO: If selectable?
    }
  }
</style>

