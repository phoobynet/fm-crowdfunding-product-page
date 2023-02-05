<script lang="ts" setup>
import { ScrollHeight } from '@/lib/injectionKeys'
import { useAppStore } from '@/use/useAppStore'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { useMotions } from '@vueuse/motion'
import { Ref, computed, inject, onMounted, ref, watch } from 'vue'

const scrollHeight = inject(ScrollHeight) as Ref<number>

const modalEl = ref<HTMLDivElement>()
const contentEl = ref<HTMLDivElement>()
const { thankYouModalOpen } = useAppStore()

const close = () => {
  thankYouModalOpen.value = false
}

const motions = useMotions()

const modalHeight = computed(() =>
  scrollHeight.value ? `${scrollHeight.value}px` : '100vh',
)

onClickOutside(contentEl, close)
onKeyStroke('Escape', close)

watch(modalEl, (newValue) => {
  if (newValue) {
    newValue.scrollIntoView({
      behavior: 'smooth',
    })
  }
})
</script>

<template>
  <transition
    :css="false"
    @leave="(el: Element, done: () => void) => motions.thankYouModal.leave(done)"
  >
    <div
      class="thankYouModal"
      v-if="thankYouModalOpen"
      ref="modalEl"
      v-motion="'thankYouModal'"
      :initial="{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }"
      :enter="{
        opacity: 1,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        transition: { duration: 300 },
      }"
      :leave="{
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        transition: { duration: 300 },
      }"
      :style="{ height: modalHeight }"
    >
      <div
        class="content card"
        ref="contentEl"
      >
        <img
          src="@/assets/images/icon-check.svg"
          alt=""
          class="checkIcon"
        />
        <h3 class="heading">Thanks for your support!</h3>
        <p class="content">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          class="btn close"
          @click="close"
        >
          Got it!
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.thankYouModal {
  @apply absolute top-0 left-0 z-[99999] flex w-full items-start justify-center pt-36;

  .content {
    &.card {
      @apply py-8 px-4;
    }

    @apply grid w-[var(--mobile-content-width)] place-items-center items-start rounded-lg bg-white p-[1.9rem];
    grid-template-rows: 5.1rem 3.3rem 8rem 5.5rem;

    .heading {
      @apply tracking-[-0.3px];
    }

    .content {
      @apply text-center text-sm leading-6 text-gray-300;
    }

    .btn.close {
      @apply h-12 min-w-[37%];
    }
  }
}
</style>
