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
const isNoRewardPledge = inject(pledgeKeys.isNoRewardPledge)

</script>

<template>
  <div
    class="pledgeHeader"
    :class="{selectable, isNoRewardPledge}"
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

<style
  lang="scss"
  scoped
>
  .pledgeHeader {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "name name"
      "minimum minimum";

    .select {
      grid-area: select;
      display: none;
    }

    .name {
      grid-area: name;
    }

    .minimum {
      grid-area: minimum;
      padding-top: .2rem;
    }

    &.selectable {
      .select {
        align-self: center;
        display: block;
      }

      grid-template-areas:
      "select name"
      "select minimum";
    }

    &:not(.isNoRewardPledge) {
      .select {
        padding-top: 0.2rem;
      }
    }

    &.selectable.isNoRewardPledge {
      grid-template-rows: 1fr;
      grid-template-areas:
        "select name";
    }
  }
</style>

