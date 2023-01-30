<script
  lang="ts"
  setup
>
import { computed, inject, Ref, ref } from 'vue'
import { useMotions } from '@vueuse/motion'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { useAppStore } from '@/use/useAppStore'
import Pledge from '@/components/pledge/Pledge.vue'
import { ScrollHeight } from '@/lib/injectionKeys'

const {
  backThisProjectModalOpen,
  thankYouModalOpen,
  pledges: actualPledges,
  selectedPledgeId,
} = useAppStore()

const scrollHeight = inject(ScrollHeight) as Ref<number>

const modalElement = ref<HTMLDivElement>()

const pledges = computed(() => {
  return [{
    id: 0,
    name: 'Pledge with no reward',
    amount: 0,
    description: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
  }, ...actualPledges.value]
})

const close = () => {
  backThisProjectModalOpen.value = false
}

onClickOutside(modalElement, close)
onKeyStroke('Escape', close)

const motions = useMotions()

const modalHeight = computed(() =>
  scrollHeight.value
    ? `${scrollHeight.value}px`
    : '100vh')

const closeModalHandler = () => {
  selectedPledgeId.value = undefined
  backThisProjectModalOpen.value = false
}

const onContinueClick = () => {
  closeModalHandler()
  thankYouModalOpen.value = true
}

</script>

<template>
  <transition
    :css="false"
    @leave="(el: Element, done: () => void) => motions.backThisProjectModal.leave(done)"
  >
    <div
      class="back-this-project-modal"
      v-if="backThisProjectModalOpen"
      v-motion="'backThisProjectModal'"
      :initial="{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)' }"
      :enter="{ opacity: 1, backgroundColor: 'rgba(0, 0, 0, .7)', transition: { duration: 300 } }"
      :leave="{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0)',  transition: { duration: 300 } }"
      :style="{height: modalHeight}"
    >
      <div
        class="modal"
        ref="modalElement"
      >
        <header>
          <h3>
            Back this project
          </h3>
          <img
            src="@/assets/images/icon-close-modal.svg"
            alt=""
            role="button"
            @click="closeModalHandler"
          >
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>
        </header>
        <ul>
          <li
            v-for="p in pledges"
            :key="p.id"
          >
            <Pledge
              :pledge="p"
              :selectable="true"
              @continue="onContinueClick"
            />
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
  .back-this-project-modal {
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 7.5rem;

    .modal {
      background-color: var(--clr-white);
      border-radius: 0.5rem;
      width: var(--mob-content-width);
      padding: 1.59rem 1.5rem;

      header {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: 2.4rem 4rem;
        grid-template-areas:
          "heading close"
          "description description";

        h3 {
          align-self: center;
          grid-area: heading;
          font-size: 1.175rem;
          letter-spacing: -.3px;
        }

        img {
          align-self: center;
          grid-area: close;
          width: 0.875rem;
          height: 0.875rem;
          justify-self: end;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            scale: (1.1);
          }

          &:active {
            scale: (1);
          }
        }

        p {
          grid-area: description;
          font-size: 0.875rem;
          color: var(--clr-gray-300);
          line-height: 1.5rem;
          align-self: end;
        }
      }

      ul {
        padding-top: 1.4rem;
        display: grid;
        grid-row-gap: 1.5rem;
      }
    }
  }
</style>

