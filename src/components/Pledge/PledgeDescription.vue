<script lang="ts" setup>
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { inject } from 'vue'

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

<style lang="scss" scoped>
.pledge-description {
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--clr-gray-300);

  @media screen and (min-width: 1440px) {
    font-size: 0.9375rem;
    line-height: 28px;
    align-self: end;
  }
}
</style>
