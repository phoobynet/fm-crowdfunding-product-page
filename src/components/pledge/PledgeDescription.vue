<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const pledge = inject(pledgeKeys.pledge)

</script>

<template>
  <p
    v-if="pledge"
    class="pledge-description"
  >
    {{ pledge.description }}
  </p>
</template>

<style
  lang="scss"
  scoped
>
  .pledge-description {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--clr-gray-300);

    @media screen and (min-width: 1440px) {
      font-size: 1rem;
      line-height: 30px;
      align-self: end;
    }
  }
</style>

