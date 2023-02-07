<script lang="ts" setup>
import Pledges from '@/components/Pledges.vue'
import { IPledge } from '@/lib/types/IPledge'
import { useAppStore } from '@/use/useAppStore'
import { computed } from 'vue'

const { pledges, selectedPledgeId, backThisProjectModalOpen } = useAppStore()

const onSelected = (pledge: IPledge) => {
  selectedPledgeId.value = pledge.id
  backThisProjectModalOpen.value = true
}

const filteredPledges = computed(() => {
  return pledges.value.filter((p) => p.remaining !== undefined)
})

const noop = () => {
  // nothing to see here
}
</script>

<template>
  <div class="card about">
    <header>
      <h2>About this project</h2>
    </header>
    <p>
      The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
      elevates your screen to a more comfortable viewing height. Placing your
      monitor at eye level has the potential to improve your posture and make
      you more comfortable while at work, helping you stay focused on the task
      at hand.
    </p>
    <p>
      Featuring artisan craftsmanship, the simplicity of design creates extra
      desk space below your computer to allow notepads, pens, and USB sticks to
      be stored under the stand.
    </p>
    <div class="pledges">
      <Pledges
        :on-continue-handler="noop"
        :selectable="false"
        :on-selected="onSelected"
        :pledges="filteredPledges"
        :gap="'1.5rem'"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  @apply pl-[1.4rem] pr-[1.4rem] pt-10;

  & > * + *:not(.pledges) {
    @apply pt-6;
  }

  @apply desktop:grid-rows-[4.1rem_9.6rem_5.5rem_1fr] desktop:py-0 desktop:px-[2rem];

  header {
    h2 {
      @apply text-[1.125rem] font-bold leading-[1.377rem];
      @apply desktop:text-[1.2rem] desktop:font-bold;
    }
  }

  p {
    @apply pr-0.5 text-[0.875rem] leading-6 text-gray-300;
    @apply desktop:text-[1rem] desktop:leading-[1.875rem];
  }

  .pledges {
    @apply pt-[2.1rem];
  }
}
</style>
