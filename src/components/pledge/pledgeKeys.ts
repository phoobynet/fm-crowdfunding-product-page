import { InjectionKey, Ref } from 'vue'
import { Pledge } from '@/lib/types/Pledge'

export const pledgeKeys = {
  outOfStock: Symbol('outOfStock') as InjectionKey<Ref<boolean>>,
  canEnterPledge: Symbol('canEnterPledge') as InjectionKey<Ref<boolean>>,
  isNoRewardPledge: Symbol('isNoRewardPledge') as InjectionKey<Ref<boolean>>,
  pledgeSelectedValue: Symbol('pledgeSelectedValue') as InjectionKey<Ref<boolean>>,
  selected: Symbol('selected') as InjectionKey<Ref<boolean>>,
  pledgeAmount: Symbol('pledgeAmount') as InjectionKey<Ref<number | undefined>>,
  pledgeAmountError: Symbol('pledgeAmountError') as InjectionKey<Ref<string>>,
  pledge: Symbol('pledge') as InjectionKey<Readonly<Pledge>>,
  selectable: Symbol('selectable') as InjectionKey<boolean>,
  onSelectARewardClick: Symbol('onSelectARewardClick') as InjectionKey<() => void>,
  onContinueClick: Symbol('onContinueClick') as InjectionKey<() => void>,
}
