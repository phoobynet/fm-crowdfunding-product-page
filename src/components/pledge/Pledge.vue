<script
  lang="ts"
  setup
>
import { Pledge } from '@/lib/types/Pledge'
import { usePledge } from '@/components/pledge/usePledge'
import { provide, watch } from 'vue'
import { pledgeKeys } from '@/components/pledge/pledgeKeys'
import PledgeContainer from '@/components/pledge/PledgeContainer.vue'
import PledgeHeader from '@/components/pledge/PledgeHeader.vue'
import PledgeDescription from '@/components/pledge/PledgeDescription.vue'
import PledgeRemaining from '@/components/pledge/PledgeRemaining.vue'
import PledgeSelectReward from '@/components/pledge/PledgeSelectReward.vue'
import PledgeAmount from '@/components/pledge/PledgeAmount.vue'
import { useAppStore } from '@/use/useAppStore'

const props = defineProps<{ pledge: Pledge, selectable?: boolean }>()
const emit = defineEmits(['selected', 'continue'])

const {
  receivePledge,
} = useAppStore()

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

<style
  lang="scss"
  scoped
>
</style>

