import { ref } from 'vue'
import { Pledge } from '@/lib/types/Pledge'
import { pledgesRepository } from '@/lib/data/pledgesRepository'

const menuModalOpen = ref<boolean>(false)
const backThisProjectModalOpen = ref<boolean>(false)
const bookmarked = ref<boolean>(false)
const pledges = ref<Pledge[]>([])
const fetchingPledges = ref<boolean>(false)

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

  return {
    backThisProjectModalOpen,
    bookmarked,
    fetchingPledges,
    menuModalOpen,
    pledges,
    init,
  }
}
