<script lang="ts" setup>
import PledgeAmount from '@/components/Pledge/PledgeAmount.vue'
import PledgeContainer from '@/components/Pledge/PledgeContainer.vue'
import PledgeDescription from '@/components/Pledge/PledgeDescription.vue'
import PledgeHeader from '@/components/Pledge/PledgeHeader.vue'
import PledgeRemaining from '@/components/Pledge/PledgeRemaining.vue'
import PledgeSelectReward from '@/components/Pledge/PledgeSelectReward.vue'
import { pledgeKeys } from '@/components/Pledge/pledgeKeys'
import { usePledge } from '@/components/Pledge/usePledge'
import { IPledge } from '@/lib/types/IPledge'
import { useAppStore } from '@/use/useAppStore'
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
  <PledgeContainer>
    <template #header>
      <PledgeHeader />
    </template>
    <template #description>
      <PledgeDescription />
    </template>
    <template #remaining>
      <PledgeRemaining />
    </template>
    <template #selectReward>
      <PledgeSelectReward />
    </template>
    <template #amount>
      <PledgeAmount />
    </template>
  </PledgeContainer>
</template>
