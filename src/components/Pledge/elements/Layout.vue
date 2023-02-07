<script lang="ts" setup>
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { useScrollIntoView } from '@/use/useScrollIntoView'
import { Ref, inject, ref, watch } from 'vue'

const pledge = inject(pledgeKeys.pledge)
const outOfStock = inject(pledgeKeys.outOfStock)
const selectable = inject(pledgeKeys.selectable)
const isNoRewardPledge = inject(pledgeKeys.isNoRewardPledge)
const selected = inject(pledgeKeys.selected) as Ref<boolean>

const layout = ref<HTMLDivElement>()

const { scrollIntoView } = useScrollIntoView(layout, {
  behavior: 'smooth',
  block: 'start',
})

watch(
  selected,
  (newValue) => {
    if (newValue) {
      scrollIntoView()
    }
  },
  {
    immediate: true,
  },
)

// TODO: This may not be required
// onMounted(() => {
//   if (selected.value) {
//     scrollIntoView()
//   }
// })
</script>

<template>
  <div
    class="layout"
    :class="{ outOfStock, selectable, selected, isNoRewardPledge }"
    v-if="pledge"
    ref="layout"
  >
    <header class="header content">
      <slot name="header"></slot>
    </header>
    <div class="description content">
      <slot name="description"></slot>
    </div>
    <div
      class="remaining content"
      v-if="!isNoRewardPledge"
    >
      <slot name="remaining"></slot>
    </div>
    <div
      class="selectReward content"
      v-if="!selectable"
    >
      <slot name="selectReward"></slot>
    </div>
    <div
      class="amount"
      v-if="!isNoRewardPledge"
    >
      <slot name="amount"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @apply grid items-start rounded-lg border-2 border-gray-50 pt-[0.3rem] pb-[1.4rem] transition-[border] duration-500;
  grid-template-rows: 5.2rem 8.8rem 4.2rem auto;
  grid-template-columns: 2.5rem repeat(2, auto);
  grid-template-areas:
    'header header header'
    'description description description'
    'remaining remaining remaining'
    'selectReward selectReward selectReward';

  &.selectable {
    grid-template-rows: 5.2rem 8.9rem 2rem;
    grid-template-areas:
      'header header header'
      'description description description'
      'remaining remaining remaining';
  }

  // when there is no pledge reward and/or selected
  &.selectable.isNoRewardPledge,
  &.selectable.isNoRewardPledge.selected {
    @apply pt-[1.05rem];
    grid-template-rows: 4.5rem 8rem;
    grid-template-areas:
      'header header header'
      'description description description';
  }

  &.selected:not(.isNoRewardPledge) {
    @apply border-2 border-green-500;
    grid-template-rows: 5rem 9rem 2.5rem 1fr;
    grid-template-areas:
      'header header header'
      'description description description'
      'remaining remaining remaining'
      'amount amount amount';
  }

  &.outOfStock {
    @apply opacity-50;
  }

  .content {
    @apply py-0 px-[1.4rem];
  }

  .header {
    grid-area: header;
  }

  .description {
    @apply items-start py-0 pr-[1.3rem] pl-[1.4rem];
    grid-area: description;
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
    @apply pt-4 pb-[1.9rem];
    grid-template-rows: 4rem 5.3rem auto;
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
      'header header'
      'description description'
      'remaining selectReward';

    &.selectable {
      &:not(.isNoRewardPledge) {
        grid-template-columns: 2.93rem 1fr auto;
        grid-template-rows: auto auto;
        grid-template-areas:
          'header header remaining'
          '. description description';

        &.selected {
          grid-template-columns: 2.93rem 1fr auto;
          grid-template-rows: auto 5.4rem 4rem;
          grid-template-areas:
            'header header remaining'
            '. description description'
            'amount amount amount';
        }

        .remaining {
          @apply translate-y-[-0.2rem] transform self-center;
        }
      }

      &.isNoRewardPledge,
      &.isNoRewardPledge.selected {
        @apply pt-[1.05rem];
        grid-template-columns: 2.93rem auto;
        grid-template-rows: 3.2rem 3.5rem;
        grid-template-areas:
          'header header'
          '. description';
      }

      .content {
        @apply py-0 px-[1.65rem];
      }
    }

    &:not(.selectable) {
      .selectReward {
        @apply justify-self-end;
      }

      .content {
        @apply py-0 px-[1.8rem];
      }
    }
  }
}
</style>
