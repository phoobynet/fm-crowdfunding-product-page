<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const pledge = inject(pledgeKeys.pledge)

</script>

<template>
  <template v-if="pledge">
    <div
      class="pledge-header-minimum"
      v-if="pledge.id !== 0"
    >Pledge ${{ pledge.amount }} or more
    </div>
  </template>
</template>

<style
  lang="scss"
  scoped
>
  .pledge-header-minimum {
    grid-area: amount;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--clr-green-500);
  }
</style>

