<script lang="ts" setup>
import { Modal } from '@/components'
import { useAppStore } from '@/use/useAppStore'
import { useScrollIntoView } from '@/use/useScrollIntoView'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { ref, watch } from 'vue'

const modal = ref<HTMLDivElement>()
const { thankYouModalOpen } = useAppStore()

const { scrollIntoView } = useScrollIntoView(modal, {
  behavior: 'smooth',
  block: 'start',
})

const close = () => {
  thankYouModalOpen.value = false
}

onClickOutside(modal, close)
onKeyStroke('Escape', close)

watch(
  modal,
  (newValue) => {
    if (newValue) {
      scrollIntoView()
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <Modal :show="thankYouModalOpen">
    <div
      class="content card mx-auto mt-[9rem] max-w-mobile-content"
      ref="modal"
    >
      <img
        src="@/assets/images/icon-check.svg"
        alt=""
        class="checkIcon"
      />
      <h3 class="heading">Thanks for your support!</h3>
      <p class="description">
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
  </Modal>
</template>

<style lang="scss" scoped>
.content {
  &.card {
    @apply py-[1.9rem] px-4;
  }

  @apply grid w-mobile-content place-items-center items-start rounded-lg bg-white p-[1.9rem];
  grid-template-rows: 5.5rem 3rem 7.8rem 3.5rem;

  .checkIcon {
  }

  .heading {
    @apply text-[1.125rem] font-bold leading-[22.01px] tracking-normal;
  }

  .description {
    @apply text-center text-sm leading-6 text-gray-300;
  }

  .btn.close {
    @apply h-12 min-w-[37%];
  }
}
</style>
