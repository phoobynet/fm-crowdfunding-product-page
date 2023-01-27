import { InjectionKey, Ref } from 'vue'

export const Bookmarked = Symbol('Bookmarked') as InjectionKey<Ref<boolean>>
export const MenuOpen = Symbol('MenuOpen') as InjectionKey<Ref<boolean>>
export const BackThisProjectModalOpen = Symbol('BackThisProjectModalOpen') as InjectionKey<Ref<boolean>>
export const MenuClickHandler = Symbol('MenuClickHandler') as InjectionKey<(item: string) => void>
