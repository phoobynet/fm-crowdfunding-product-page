<script lang="ts" setup>
import { Spacer, Stat } from './elements'
import { LargeNumber, Money, ProgressBar } from '@/components'
import { useAppStore } from '@/use'

const { goal, amountBacked, backers, daysLeft } = useAppStore()
</script>

<template>
  <div class="card">
    <div class="stats">
      <Stat style="grid-area: stat-1">
        <template #amount>
          <Money :amount="amountBacked" />
        </template>
        <template #description>
          of
          <Money :amount="goal" />
          backed
        </template>
      </Stat>

      <Spacer style="grid-area: spacer-1" />

      <Stat style="grid-area: stat-2">
        <template #amount>
          <LargeNumber :amount="backers" />
        </template>
        <template #description> total backers</template>
      </Stat>

      <Spacer style="grid-area: spacer-2" />

      <Stat style="grid-area: stat-3">
        <template #amount> {{ daysLeft }}</template>
        <template #description> days left</template>
      </Stat>

      <ProgressBar
        style="grid-area: progress-bar"
        :goal="goal"
        :actual="amountBacked"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stats {
  @apply grid max-w-mobile-content justify-center justify-items-center pt-[1.6rem];
  grid-template-rows: 4.9rem 2.3rem 4.9rem 2.3rem 6.3rem 2.2rem;
  grid-template-areas:
    'stat-1'
    'spacer-1'
    'stat-2'
    'spacer-2'
    'stat-3'
    'progress-bar';

  > * {
    @apply w-[17.44rem];
  }

  @media (min-width: 1440px) {
    all: unset;

    > * {
      width: unset;
    }

    @apply grid w-desktop-content justify-items-start p-[1.9rem];
    grid-template-columns: 10rem 4.3rem 10rem 4.3rem 10rem;
    grid-template-areas:
      'stat-1 spacer-1 stat-2 spacer-2 stat-3'
      'progress-bar progress-bar progress-bar progress-bar progress-bar';

    :nth-child(even) {
      @apply mt-0.5;
    }

    > :last-child {
      @apply w-full;
    }
  }
}
</style>
