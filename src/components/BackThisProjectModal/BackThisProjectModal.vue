<script lang="ts" setup>
import CloseBtn from '@/components/BackThisProjectModal/elements/CloseBtn.vue'
import Heading from '@/components/BackThisProjectModal/elements/Heading.vue'
import Description from '@/components/Cta/elements/Description.vue'
import Pledges from '@/components/Pledges.vue'
import { ScrollHeight } from '@/lib/injectionKeys'
import { useAppStore } from '@/use/useAppStore'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { useMotions } from '@vueuse/motion'
import { Ref, computed, inject, ref, watch } from 'vue'

const {
  backThisProjectModalOpen,
  thankYouModalOpen,
  pledges,
  selectedPledgeId,
} = useAppStore()

const scrollHeight = inject(ScrollHeight) as Ref<number>

const modalElement = ref<HTMLDivElement>()

const close = () => {
  backThisProjectModalOpen.value = false
  selectedPledgeId.value = undefined
}

onClickOutside(modalElement, close)
onKeyStroke('Escape', close)

const motions = useMotions()

const modalHeight = computed(() =>
  scrollHeight.value ? `${scrollHeight.value}px` : '100vh',
)

const closeModalHandler = () => {
  selectedPledgeId.value = undefined
  backThisProjectModalOpen.value = false
}

const onContinueClick = () => {
  closeModalHandler()
  thankYouModalOpen.value = true
}

const scrollIntoView = () => {
  if (modalElement.value) {
    modalElement.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

watch([backThisProjectModalOpen, modalElement], () => {
  // only scroll into view if the pledge is not selected already by clicking the select reward button
  if (selectedPledgeId.value !== undefined) {
    return
  }
  scrollIntoView()
})

const onLeave = (el: Element, done: () => void) => {
  motions.backThisProjectModal.leave(done)
}
</script>

<template>
  <transition
    :css="false"
    @leave="onLeave"
  >
    <div
      class="back-this-project-modal"
      v-if="backThisProjectModalOpen"
      v-motion="'backThisProjectModal'"
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
        class="modal"
        ref="modalElement"
      >
        <Heading class="heading">Back this project</Heading>
        <CloseBtn
          :close-modal-handler="closeModalHandler"
          class="close-btn"
        />
        <Description>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </Description>
        <Pledges
          :on-continue-handler="onContinueClick"
          :pledges="pledges"
          :selectable="true"
          :list-style="{
            display: 'grid',
            gridRowGap: '1.5rem',
          }"
        />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.back-this-project-modal {
  @apply absolute top-0 left-0 z-[9999] flex w-full items-start justify-center pt-[7.5rem];
  @apply desktop:pt-[11.5rem];

  .modal {
    @apply grid w-mobile-content rounded-lg bg-white px-[1.5rem] py-[1.59rem];
    @apply desktop:w-desktop-content desktop:px-[3rem] desktop:py-[2.8rem];
    grid-template-columns: repeat(2, auto);
    grid-template-rows: 2.4rem 4rem;
    grid-template-areas:
      'heading close-btn'
      'description description';

    .heading {
      grid-area: heading;
    }

    .close-btn {
      grid-area: close-btn;
    }

    .description {
      grid-area: description;
    }

    .pledges {
      grid-area: pledges;
    }
  }
}
</style>
