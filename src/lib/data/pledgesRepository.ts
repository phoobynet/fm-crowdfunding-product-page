import allPledges from './pledges.json'
import type { IPledge } from '@/lib/types'

const noRewardPledge: IPledge = allPledges.find((p) => p.id === 0)!
const pledges: IPledge[] = allPledges.filter((p) => p.id !== 0)

export const pledgesRepository = {
  async get(includeNoReward: boolean = true): Promise<IPledge[]> {
    if (includeNoReward) {
      return [{ ...noRewardPledge }, ...pledges]
    }

    return [...pledges]
  },
}
