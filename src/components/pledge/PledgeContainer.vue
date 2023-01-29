<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'

const pledge = inject(pledgeKeys.pledge)
const outOfStock = inject(pledgeKeys.outOfStock)
const selectable = inject(pledgeKeys.selected)
const isNoRewardPledge = inject(pledgeKeys.isNoRewardPledge)
const selected = inject(pledgeKeys.selected)

</script>

<template>
  <div
    class="pledge-container"
    :class="{outOfStock, selectable, selected, isNoRewardPledge}"
    v-if="pledge"
  >
    <header class="header">
      <slot name="header"></slot>
    </header>
    <div class="description">
      <slot name="description"></slot>
    </div>
    <div class="remaining">
      <slot name="remaining"></slot>
    </div>
    <div class="select-reward">
      <slot name="select-reward"></slot>
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

  .pledge-container {
    display: grid;
    grid-template-rows: 1.6rem 2.6rem 8.9rem 4.2rem auto;
    grid-template-columns: 2.5rem repeat(2, auto);
    grid-template-areas:
      "header header header"
      "amount amount amount"
      "description description description"
      "remaining remaining remaining"
      "button-container button-container button-container";
    border-radius: 0.5rem;
    border: 2px solid var(--clr-gray-50);
    transition: all 0.5s;


    &.selectable {
      grid-template-rows: 1.6rem 2.6rem 8.9rem 4.2rem;
      grid-template-areas:
      "select-pledge header header"
      "select-pledge amount amount"
      "description description description"
      "remaining remaining remaining"
    }

    &.selected {
      border: 2px solid var(--clr-green-500);
      grid-template-rows: 1.6rem 2.6rem 8.9rem 4.2rem auto;
      grid-template-areas:
      "select-pledge header header"
      "select-pledge amount amount"
      "description description description"
      "remaining remaining remaining"
      "enter-your-pledge enter-your-pledge enter-your-pledge";
    }

    &.outOfStock {
      opacity: .5;
    }

    &.isNoRewardPledge {
      // TODO: isNoRewardPledge
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

