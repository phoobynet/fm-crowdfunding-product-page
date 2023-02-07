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
  @apply text-sm font-bold;
  @apply desktop:text-lg;

  .selectable {
    @apply desktop:text-base;
  }
}
</style>
