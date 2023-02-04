import { IPledge } from '@/lib/types/IPledge'
import { useAppStore } from '@/use/useAppStore'
import { debouncedWatch } from '@vueuse/core'
import { computed, readonly, ref, watch } from 'vue'

export const usePledge = (props: { pledge: IPledge; selectable: boolean }) => {
  const { selectedPledgeId } = useAppStore()
  const pledgeAmount = ref<number | undefined>()
  const pledgeAmountError = ref<string>('')
  const outOfStock = computed(() => props.pledge.remaining === 0)
  const selected = computed<boolean>(
    () => props.pledge.id === selectedPledgeId.value && props.selectable,
  )
  const canEnterPledge = computed(() => selected.value && !outOfStock.value)
  const isNoRewardPledge = computed(() => props.pledge.id === 0)
  const pledge = readonly(props.pledge)

  const pledgeSelectedValue = computed<boolean>({
    get() {
      return selectedPledgeId.value === props.pledge.id
    },
    set(checked) {
      selectedPledgeId.value = checked ? props.pledge.id : undefined
    },
  })

  watch(selected, (newValue, oldValue) => {
    // clear pledgeAmount on deselection
    if (oldValue && newValue !== oldValue) {
      pledgeAmount.value = undefined
      pledgeAmountError.value = ''
    }
  })

  debouncedWatch(
    pledgeAmount,
    (newValue, oldValue) => {
      if (newValue !== oldValue && newValue !== undefined) {
        if (newValue < pledge.amount) {
          pledgeAmountError.value = `Minimum is $${pledge.amount}`
          return
        }
      }

      pledgeAmountError.value = ''
    },
    {
      debounce: 500,
    },
  )

  return {
    pledge,
    pledgeAmount,
    pledgeAmountError,
    outOfStock,
    selected,
    canEnterPledge,
    isNoRewardPledge,
    pledgeSelectedValue,
    selectable: props.selectable,
  }
}
