import { InjectionKey, Ref } from 'vue'

export const Bookmarked = Symbol('Bookmarked') as InjectionKey<Ref<boolean>>
