<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const pledge = inject(pledgeKeys.pledge)
const outOfStock = inject(pledgeKeys.outOfStock)
const selectable = inject(pledgeKeys.selectable)
const isNoRewardPledge = inject(pledgeKeys.isNoRewardPledge)
const selected = inject(pledgeKeys.selected)

</script>

<template>
  <div
    class="pledgeContainer"
    :class="{outOfStock, selectable, selected, isNoRewardPledge}"
    v-if="pledge"
  >
    <header class="header content">
      <slot name="header"></slot>
    </header>
    <div class="description content">
      <slot name="description"></slot>
    </div>
    <div class="remaining content" v-if="!isNoRewardPledge">
      <slot name="remaining"></slot>
    </div>
    <div class="selectReward content" v-if="!selectable">
      <slot name="selectReward"></slot>
    </div>
    <div class="amount">
      <slot name="amount"></slot>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  @import "pledge";

  .pledgeContainer {
    display: grid;
    grid-template-rows: 2.6rem 2.6rem 8.8rem 4.2rem auto;
    grid-template-columns: 2.5rem repeat(2, auto);
    grid-template-areas:
      "header header header"
      "description description description"
      "remaining remaining remaining"
      "selectReward selectReward selectReward";
    border-radius: 0.5rem;
    border: 2px solid var(--clr-gray-50);
    transition: border 0.5s;
    padding-top: .3rem;
    padding-bottom: 1.4rem;


    &.selectable {
      grid-template-rows: 5rem 9rem 2.5rem;
      grid-template-areas:
      "header header header"
      "description description description"
      "remaining remaining remaining"
    }

    &.selectable.isNoRewardPledge, &.selectable.isNoRewardPledge.selected {
      background-color: chocolate;
      grid-template-rows: 5.5rem 1fr;
      grid-template-areas:
      "header header header"
      "description description description"
    }

    &.selected:not(.isNoRewardPledge) {
      border: 2px solid var(--clr-green-500);
      grid-template-rows: 5rem 9rem 2.5rem 1fr;
      grid-template-areas:
      "header header header"
      "description description description"
      "remaining remaining remaining"
      "amount amount amount";
    }

    &.outOfStock {
      opacity: .5;
    }

    &.isNoRewardPledge {
      // TODO: isNoRewardPledge
    }

    .content {
      padding: 0 1.4rem;
    }

    .header {
      grid-area: header;
    }

    .description {
      grid-area: description;
      align-self: start;
    }

    .remaining {
      grid-area: remaining;
    }

    .selectReward {
      grid-area: selectReward;
    }

    .amount {
      grid-area: amount;
    }

    @media screen and (min-width: 1440px) {
      grid-template-rows: 2.5rem 5.1rem 4.5rem;
      grid-template-columns: repeat(2, auto);
      grid-template-areas:
      "header amount"
      "description description"
      "remaining button-container";
      padding: 1.3rem 1.8rem 1.9rem;
    }
  }
</style>

