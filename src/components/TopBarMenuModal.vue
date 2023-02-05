<script lang="ts" setup>
import { useAppStore } from '@/use/useAppStore'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { useMotions } from '@vueuse/motion'
import { ref } from 'vue'

const items = ['About', 'Discover', 'Get Started']
const modalElement = ref<HTMLDivElement>()
const { menuModalOpen } = useAppStore()

onClickOutside(modalElement, () => (menuModalOpen.value = false))
onKeyStroke('Escape', () => {
  menuModalOpen.value = false
})

const motions = useMotions()
</script>

<template>
  <transition
    :css="false"
    @leave="(el: Element, done: () => void) => motions.modal.leave(done)"
  >
    <div
      class="topBarMenuModal"
      v-if="menuModalOpen"
      v-motion="'modal'"
      :initial="{
        opacity: 0,
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0), transparent)',
      }"
      :enter="{
        opacity: 1,
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, .5), transparent)',
        transition: { duration: 300 },
      }"
      :leave="{
        opacity: 0,
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0), transparent)',
        transition: { duration: 300 },
      }"
    >
      <div
        class="modal"
        ref="modalElement"
      >
        <ul class="menuItems">
          <li
            class="menuItem"
            v-for="item in items"
            :key="item"
            @click="() => (menuModalOpen = false)"
          >
            <span class="menuItemContent">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.topBarMenuModal {
  @apply absolute top-0 left-0 flex h-[41.6875rem] w-full items-start justify-center bg-no-repeat pt-[5.5rem];
  @apply desktop:hidden;
  background-size: 100% 667px;

  .modal {
    @apply w-mobile-content rounded-lg bg-white;

    .menuItems {
      @apply grid cursor-pointer list-none auto-rows-[4.4rem] p-0 text-lg text-[1.125rem] font-medium text-gray-800;

      .menuItem {
        @apply flex h-full items-center;

        .menuItemContent {
          @apply pl-6 leading-4;
        }

        &:not(:last-child) {
          @apply border-b-2 border-solid border-gray-50;
        }
      }
    }
  }
}
</style>
