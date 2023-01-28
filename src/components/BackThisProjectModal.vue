<script
  lang="ts"
  setup
>
import { ref } from 'vue'
import { useMotions } from '@vueuse/motion'
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { useAppStore } from '@/use/useAppStore'

// TODO: this may not be necessary
const emit = defineEmits(['click'])
const { backThisProjectModalOpen } = useAppStore()

const modalElement = ref<HTMLDivElement>()

onClickOutside(modalElement, () => backThisProjectModalOpen.value = false)
onKeyStroke('Escape', () => {
  backThisProjectModalOpen.value = false
})

const motions = useMotions()
</script>

<template>
  <transition
    :css="false"
    @leave="(el: Element, done: () => void) => motions.modal.leave(done)"
  >
    <div class="back-this-project-modal">
      <div class="modal">
        this is a dialog
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
    // TODO: Adjust height and gradient
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
    }
  }
</style>

