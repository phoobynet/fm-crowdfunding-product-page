<script
  lang="ts"
  setup
>
import { inject, ref, Ref } from 'vue'
import { MenuOpen } from '@/lib/injectionKeys'
import { useMotions } from '@vueuse/motion'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

const emit = defineEmits(['click'])
const menuOpen = inject(MenuOpen) as Ref<boolean>

const items = ['About', 'Discover', 'Get Started']
const modalElement = ref<HTMLDivElement>()

onClickOutside(modalElement, () => menuOpen.value = false)
onKeyStroke('Escape', () => {
  menuOpen.value = false
})

const motions = useMotions()
</script>

<template>
  <transition
    :css="false"
    @leave="(el, done) => motions.modal.leave(done)"
  >
    <div
      class="top-bar-menu-modal"
      v-if="menuOpen"
      v-motion="'modal'"
      :initial="{ opacity: 0, backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), transparent)' }"
      :enter="{ opacity: 1, backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, .5), transparent)', transition: { duration: 300 } }"
      :leave="{ opacity: 0, backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), transparent)',  transition: { duration: 300 } }"
    >
      <div
        class="modal"
        ref="modalElement"
      >
        <ul>
          <li
            v-for="item in items"
            :key="item"
            @click="() => emit('click', item)"
          ><span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<style
  lang="scss"
  scoped
>
  .top-bar-menu-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 5.5rem;
    background-size: 100% 667px;
    background-repeat: no-repeat;

    .modal {
      background-color: var(--clr-white);
      border-radius: 0.5rem;
      width: var(--mob-content-width);

      ul {
        display: grid;
        grid-auto-rows: 4.4rem;

        list-style: none;
        padding: 0;
        color: var(--clr-gray-800);
        font-weight: 500;
        font-size: 1.125rem;
        cursor: pointer;

        li {
          height: 100%;
          display: flex;
          align-items: center;

          span {
            padding-left: 1.5rem;
            line-height: 1rem;
          }

          &:not(:last-child) {
            border-bottom-style: solid;
            border-bottom-width: 2px;
            border-bottom-color: var(--clr-gray-50);
          }
        }
      }
    }

    @media screen and (min-width: 1440px) {
      display: none;
    }
  }
</style>

