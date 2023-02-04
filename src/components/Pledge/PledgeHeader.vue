<script lang="ts" setup>
import PledgeHeaderMinimum from '@/components/Pledge/PledgeHeaderMinimum.vue'
import PledgeHeaderName from '@/components/Pledge/PledgeHeaderName.vue'
import PledgeHeaderSelect from '@/components/Pledge/PledgeHeaderSelect.vue'
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
      <PledgeHeaderSelect />
    </div>
    <div class="name">
      <PledgeHeaderName />
    </div>
    <div class="minimum">
      <PledgeHeaderMinimum />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pledgeHeader {
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'name name'
    'minimum minimum';

  .select {
    grid-area: select;
    display: none;
  }

  .name {
    grid-area: name;
  }

  .minimum {
    grid-area: minimum;
    padding-top: 0.2rem;
  }

  &.selectable {
    grid-template-areas:
      'select name'
      'select minimum';

    .select {
      align-self: center;
      display: block;
    }

    &.isNoRewardPledge {
      grid-template-rows: 1fr;
      grid-template-areas: 'select name';
    }
  }

  &:not(.isNoRewardPledge) {
    .select {
      padding-top: 0.2rem;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-top: 0.7rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 'name minimum';
    justify-content: space-between;

    &.selectable {
      &:not(.isNoRewardPledge) {
        justify-content: start;
        grid-template-columns: 2.93rem auto auto;
        grid-template-rows: 2.5rem;
        grid-template-areas: 'select name minimum';

        .select {
          padding-top: 0;
          transform: translateY(-0.2rem);
        }

        .minimum {
          padding-top: 0;
          padding-left: 1.2rem;
          letter-spacing: 0.4px;
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
