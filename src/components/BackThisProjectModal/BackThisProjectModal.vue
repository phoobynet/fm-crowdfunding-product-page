<script lang="ts" setup>
import { CloseBtn, Description, Heading } from './elements'
import { Modal, Pledges } from '@/components'
import { useAppStore, useScrollIntoView } from '@/use'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { ref, watch } from 'vue'

const {
  backThisProjectModalOpen,
  thankYouModalOpen,
  pledges,
  selectedPledgeId,
} = useAppStore()

const modalElement = ref<HTMLDivElement>()

const { scrollIntoView } = useScrollIntoView(modalElement, {
  behavior: 'smooth',
  block: 'start',
})

const close = () => {
  backThisProjectModalOpen.value = false
  selectedPledgeId.value = undefined
}

onClickOutside(modalElement, close)
onKeyStroke('Escape', close)

const closeModalHandler = () => {
  selectedPledgeId.value = undefined
  backThisProjectModalOpen.value = false
}

const onContinueClick = () => {
  closeModalHandler()
  thankYouModalOpen.value = true
}

watch([backThisProjectModalOpen, modalElement], () => {
  // only scroll into view if the pledge is not selected already by clicking the select reward button
  if (selectedPledgeId.value !== undefined) {
    return
  }
  scrollIntoView()
})
</script>

<template>
  <Modal :show="backThisProjectModalOpen">
    <div
      class="modal mx-auto max-w-mobile-content"
      ref="modalElement"
    >
      <div class="content">
        <Heading class="heading">Back this project</Heading>
        <CloseBtn
          :close-modal-handler="closeModalHandler"
          class="close-btn"
        />
        <Description class="description">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </Description>
        <Pledges
          class="pledges"
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
  </Modal>
</template>

<style lang="scss" scoped>
.modal {
  @apply relative mt-[7.5rem];

  .content {
    @apply grid w-mobile-content auto-rows-auto rounded-lg bg-white px-[1.5rem] py-[1.9rem];
    @apply desktop:w-desktop-content desktop:px-[3rem] desktop:py-[2.8rem];

    grid-template-columns: repeat(2, auto);
    grid-template-rows: 3.1rem 4.4rem auto;
    grid-template-areas:
      'heading close-btn'
      'description description'
      'pledges pledges';

    .heading {
      grid-area: heading;
    }

    .close-btn {
      @apply translate-y-[0.5rem] transform justify-self-end;
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
