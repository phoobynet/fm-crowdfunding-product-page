import { Pledge } from '@/lib/types/Pledge'
import { computed, readonly, ref } from 'vue'
import { useAppStore } from '@/use/useAppStore'

export const usePledge = (props: { pledge: Pledge, selectable: boolean }) => {
  const { selectedPledgeId } = useAppStore()
  const pledgeAmount = ref<string>('')
  const outOfStock = computed(() => props.pledge.remaining === 0)
  const selected = computed(() => props.pledge.id === selectedPledgeId.value)
  const canEnterPledge = computed(() => selected.value && !outOfStock.value)
  const isNoRewardPledge = computed(() => props.pledge.id === 0)
  const pledge = readonly(props.pledge)

  const pledgeSelectedValue = computed({
    get () {
      return props.pledge.id === selectedPledgeId.value
    },
    set (checked) {
      selectedPledgeId.value = checked
        ? props.pledge.id
        : undefined
    },
  })

  return {
    pledge,
    pledgeAmount,
    outOfStock,
    selected,
    canEnterPledge,
    isNoRewardPledge,
    pledgeSelectedValue,
    selectable: props.selectable
  }
}
