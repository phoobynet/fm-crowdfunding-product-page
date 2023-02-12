import { pledgesRepository } from '@/lib/data'
import { type IPledge } from '@/lib/types/IPledge'
import { ref } from 'vue'

const menuModalOpen = ref<boolean>(false)
const backThisProjectModalOpen = ref<boolean>(false)
const thankYouModalOpen = ref<boolean>(false)
const bookmarked = ref<boolean>(false)
const pledges = ref<IPledge[]>([])
const fetchingPledges = ref<boolean>(false)
const selectedPledgeId = ref<number | undefined>(undefined)

const amountBacked = ref<number>(89_914)
const goal = ref<number>(100_000)
const backers = ref<number>(5007)
const daysLeft = ref<number>(56)

export const useAppStore = () => {
  const init = async (): Promise<void> => {
    try {
      fetchingPledges.value = true
      pledges.value = await pledgesRepository.get()
    } catch (e) {
      console.error(e)
    } finally {
      fetchingPledges.value = false
    }
  }

  const isPledgeSelected = (pledgeId: number): boolean =>
    selectedPledgeId.value === pledgeId

  const decrementRemaining = (pledgeId: number): void => {
    const pledge = pledges.value.find((p) => p.id === pledgeId)
    if (pledge?.remaining && pledge.remaining > 0) {
      pledge.remaining -= 1
    }
  }

  const receivePledge = (pledge: IPledge, amount: number): void => {
    amountBacked.value += amount
    backers.value += 1
    decrementRemaining(pledge.id)
    selectedPledgeId.value = undefined
  }

  return {
    thankYouModalOpen,
    backThisProjectModalOpen,
    bookmarked,
    fetchingPledges,
    menuModalOpen,
    pledges,
    selectedPledgeId,
    isPledgeSelected,
    receivePledge,
    init,
    goal,
    amountBacked,
    backers,
    daysLeft,
  }
}
