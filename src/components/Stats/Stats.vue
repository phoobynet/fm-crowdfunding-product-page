<script lang="ts" setup>
import { Spacer, Stat } from './elements'
import { LargeNumber, Money, ProgressBar } from '@/components'
import { useAppStore } from '@/use/useAppStore'

const { goal, amountBacked, backers, daysLeft } = useAppStore()
</script>

<template>
  <div class="card stats">
    <Stat>
      <template #amount>
        <Money :amount="amountBacked" />
      </template>
      <template #description>
        of
        <Money :amount="goal" />
        backed
      </template>
    </Stat>

    <Spacer />

    <Stat>
      <template #amount>
        <LargeNumber :amount="backers" />
      </template>
      <template #description> total backers</template>
    </Stat>

    <Spacer />

    <Stat>
      <template #amount> {{ daysLeft }}</template>
      <template #description> days left</template>
    </Stat>

    <ProgressBar
      :goal="goal"
      :actual="amountBacked"
    />
  </div>
</template>

<style lang="scss" scoped>
.stats {
  @apply max-w-[var(--mobile-content-width)];
  @apply grid justify-center justify-items-center;
  @apply pt-[1.6rem];
  grid-template-rows: 4.9rem 2.3rem 4.9rem 2.3rem 6.3rem 2.2rem;

  > * {
    @apply w-[17.44rem];
  }

  @media (min-width: 1440px) {
    @apply max-w-[var(--desktop-content-width)];
  }
}
</style>
