<script lang="ts" setup>
import { pledgeKeys } from './pledgeKeys'
import { usePledge } from './usePledge'
import {
  Amount,
  Description,
  Header,
  Layout,
  Remaining,
  SelectRewardBtn,
} from '@/components/Pledge/elements'
import { IPledge } from '@/lib/types'
import { useAppStore } from '@/use'
import { provide } from 'vue'

const props = defineProps<{ pledge: IPledge; selectable?: boolean }>()

const emit = defineEmits({
  selected: (payload: IPledge) => !!payload,
  continue: null,
})

const { receivePledge } = useAppStore()

const {
  pledgeAmount,
  pledgeAmountError,
  outOfStock,
  canEnterPledge,
  isNoRewardPledge,
  pledgeSelectedValue,
  selected,
  pledge,
  selectable,
} = usePledge({
  pledge: props.pledge,
  selectable: props.selectable ?? false,
})

const onSelectARewardClick = () => {
  emit('selected', pledge)
}

const onContinueClick = () => {
  receivePledge(pledge, pledgeAmount.value || 0)
  emit('continue')
}

provide(pledgeKeys.pledgeAmount, pledgeAmount)
provide(pledgeKeys.pledgeAmountError, pledgeAmountError)
provide(pledgeKeys.outOfStock, outOfStock)
provide(pledgeKeys.canEnterPledge, canEnterPledge)
provide(pledgeKeys.isNoRewardPledge, isNoRewardPledge)
provide(pledgeKeys.pledgeSelectedValue, pledgeSelectedValue)
provide(pledgeKeys.selected, selected)
provide(pledgeKeys.selectable, selectable)
provide(pledgeKeys.pledge, pledge)
provide(pledgeKeys.onSelectARewardClick, onSelectARewardClick)
provide(pledgeKeys.onContinueClick, onContinueClick)
</script>

<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #description>
      <Description />
    </template>
    <template #remaining>
      <Remaining />
    </template>
    <template #selectReward>
      <SelectRewardBtn />
    </template>
    <template #amount>
      <Amount />
    </template>
  </Layout>
</template>
