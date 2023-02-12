import type { InjectionKey, Ref } from 'vue'

export const MenuClickHandler = Symbol('MenuClickHandler') as InjectionKey<
  (item: string) => void
>
export const ScrollHeight = Symbol('ScrollHeight') as InjectionKey<Ref<number>>
