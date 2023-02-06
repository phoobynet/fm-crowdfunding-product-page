<script lang="ts" setup>
import HeaderMinimum from './HeaderMinimum.vue'
import HeaderName from './HeaderName.vue'
import HeaderSelect from './HeaderSelect.vue'
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { inject } from 'vue'

const selectable = inject(pledgeKeys.selectable)
const isNoRewardPledge = inject(pledgeKeys.isNoRewardPledge)
</script>

<template>
  <div
    class="pledgeHeader"
    :class="{ selectable, isNoRewardPledge }"
  >
    <div class="select">
      <HeaderSelect />
    </div>
    <div class="name">
      <HeaderName />
    </div>
    <div class="minimum">
      <HeaderMinimum />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pledgeHeader {
  @apply grid pt-4;
  grid-template-columns: 2.5rem 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'name name'
    'minimum minimum';

  .select {
    @apply hidden;
    grid-area: select;
  }

  .name {
    grid-area: name;
  }

  .minimum {
    @apply pt-[0.2rem];
    grid-area: minimum;
  }

  &.selectable {
    grid-template-areas:
      'select name'
      'select minimum';

    .select {
      @apply block self-center;
    }

    &.isNoRewardPledge {
      grid-template-rows: 1fr;
      grid-template-areas: 'select name';
    }
  }

  &:not(.isNoRewardPledge) {
    .select {
      @apply pt-[0.2rem];
    }
  }

  @media (min-width: 1440px) {
    @apply justify-between pt-[0.7rem];
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 'name minimum';

    &.selectable {
      &:not(.isNoRewardPledge) {
        @apply justify-start;
        grid-template-columns: 2.93rem auto auto;
        grid-template-rows: 2.5rem;
        grid-template-areas: 'select name minimum';

        .select {
          @apply translate-y-[-0.2rem] transform pt-0;
        }

        .minimum {
          @apply pt-0 pl-[1.2rem] tracking-[0.4px];
        }
      }

      &.isNoRewardPledge {
        grid-template-columns: 2.93rem 1fr;
        grid-template-rows: 2.5rem;
        grid-template-areas: 'select name';
      }
    }
  }
}
</style>
