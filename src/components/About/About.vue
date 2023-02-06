<script lang="ts" setup>
import Pledges from '@/components/Pledges.vue'
import { IPledge } from '@/lib/types/IPledge'
import { useAppStore } from '@/use/useAppStore'

const { pledges, selectedPledgeId, backThisProjectModalOpen } = useAppStore()

const onSelected = (pledge: IPledge) => {
  selectedPledgeId.value = pledge.id
  backThisProjectModalOpen.value = true
}

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
    <Pledges
      :on-continue-handler="noop"
      :selectable="false"
      :on-selected="onSelected"
      :pledges="pledges"
      :gap="'1.5rem'"
    />
  </div>
</template>

<style lang="scss" scoped>
.project {
  @apply grid grid-rows-[2.7rem_11.85rem_10.5rem_1fr] items-end py-[0.28rem] px-[0.4rem];
  @apply desktop:grid-rows-[4.1rem_9.6rem_5.5rem_1fr] desktop:py-0 desktop:px-[2rem];

  header {
    h2 {
      @apply text-[1.125rem];
      @apply desktop:text-[1.2rem] desktop:font-bold;
    }
  }

  p {
    @apply text-[0.0875rem] leading-7 text-gray-300;
    @apply desktop:text-[1rem] desktop:leading-[1.875rem];
  }
}
</style>
