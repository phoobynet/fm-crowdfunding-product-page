<script lang="ts" setup>
import { useAppStore } from '@/use'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { useMotions } from '@vueuse/motion'
import { ref } from 'vue'

const items = ['About', 'Discover', 'Get Started']

const { menuModalOpen } = useAppStore()
const motions = useMotions()

const modalElement = ref<HTMLDivElement>()

const transitionLeaveHandler = (el: Element, done: () => void) => {
  motions.modal.leave(done)
}

const close = () => {
  menuModalOpen.value = false
}

onClickOutside(modalElement, close)
onKeyStroke('Escape', close)
</script>

<template>
  <transition
    :css="false"
    @leave="transitionLeaveHandler"
  >
    <div
      v-if="menuModalOpen"
      v-motion="'modal'"
      class="topBarMenuModal"
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
        ref="modalElement"
        class="modal"
      >
        <ul class="menu">
          <li
            v-for="item in items"
            :key="item"
            class="item"
            @click="() => (menuModalOpen = false)"
          >
            <span class="content">{{ item }}</span>
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

    .menu {
      @apply grid cursor-pointer list-none auto-rows-[4.4rem] p-0 text-lg text-[1.125rem] font-medium text-gray-800;

      .item {
        @apply flex h-full items-center;

        .content {
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
