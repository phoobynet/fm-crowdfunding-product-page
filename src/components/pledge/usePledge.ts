import { Pledge } from '@/lib/types/Pledge'
import { computed, readonly, ref, watch } from 'vue'
import { useAppStore } from '@/use/useAppStore'
import { debouncedWatch } from '@vueuse/core'

export const usePledge = (props: { pledge: Pledge, selectable: boolean }) => {
  const { selectedPledgeId } = useAppStore()
  const pledgeAmount = ref<string>('')
  const pledgeAmountError = ref<string>('')
  const outOfStock = computed(() => props.pledge.remaining === 0)
  const selected = computed(() => props.pledge.id === selectedPledgeId.value)
  const canEnterPledge = computed(() => selected.value && !outOfStock.value)
  const isNoRewardPledge = computed(() => props.pledge.id === 0)
  const pledge = readonly(props.pledge)

  const pledgeSelectedValue = computed<boolean>({
    get () {
      return selectedPledgeId.value === props.pledge.id
    },
    set (checked) {
      selectedPledgeId.value = checked
        ? props.pledge.id
        : undefined
    },
  })

  watch(selected, (newValue, oldValue) => {
    // clear pledgeAmount on deselection
    if (oldValue && newValue !== oldValue) {
      pledgeAmount.value = ''
      pledgeAmountError.value = ''
    }
  })

  debouncedWatch(pledgeAmount, (newValue, oldValue) => {
    if (newValue !== oldValue && newValue?.length > 0) {
      const amount = parseFloat(newValue)

      if (isNaN(amount)) {
        pledgeAmountError.value = 'Not a number'
      } else {
        if (amount < pledge.amount) {
          pledgeAmountError.value = `Minimum is $${pledge.amount}`
          return
        }
      }
    }

    pledgeAmountError.value = ''
  }, {
    debounce: 500,
  })

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
