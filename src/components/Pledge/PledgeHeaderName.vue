<script lang="ts" setup>
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { inject } from 'vue'

const pledge = inject(pledgeKeys.pledge)
const selectable = inject(pledgeKeys.selectable)
</script>

<template>
  <h3
    v-if="pledge"
    class="pledge-name"
    :class="{ selectable }"
  >
    {{ pledge.name }}
  </h3>
</template>

<style lang="scss" scoped>
.pledge-name {
  font-size: 0.875rem;

  @media screen and (min-width: 1440px) {
    font-size: 1.125rem;

    &.selectable {
      font-size: 1rem;
    }
  }
}
</style>
