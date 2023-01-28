import { InjectionKey } from 'vue'

export const MenuClickHandler = Symbol('MenuClickHandler') as InjectionKey<(item: string) => void>
