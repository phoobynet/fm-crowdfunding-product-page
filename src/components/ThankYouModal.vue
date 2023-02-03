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
        />
        <h3>Thanks for your support!</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          class="button"
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
  // background
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 9rem;

  .content {
    padding: 1.9rem;
    border-radius: 0.5rem;
    display: grid;
    grid-template-rows: 5.1rem 3.3rem 8rem 5.5rem;
    place-items: center;
    width: var(--mobile-content-width);
    background-color: var(--clr-white);
    align-items: start;

    img {
    }

    h3 {
      letter-spacing: -0.3px;
    }

    p {
      text-align: center;
      color: var(--clr-gray-300);
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .button {
      min-width: 37%;
      height: 3rem;
    }

    &.card {
      padding: 2rem 1rem;
    }
  }
}
</style>
