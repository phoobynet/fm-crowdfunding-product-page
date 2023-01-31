<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const pledge = inject(pledgeKeys.pledge)
</script>

<template>
  <h3
    v-if="pledge"
    class="pledge-name"
  >{{ pledge.name }}</h3>
</template>

<style
  lang="scss"
  scoped
>
  .pledge-name {
    font-size: 0.875rem;

    @media screen and (min-width: 1440px) {
      font-size: 1rem;
    }
  }
</style>

