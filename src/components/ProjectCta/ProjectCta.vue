<script lang="ts" setup>
import BackThisProjectBtn from './elements/BackThisProjectBtn.vue'
import Header from './elements/Header.vue'
import Logo from './elements/Logo.vue'
import BookmarkButton from '@/components/BookmarkButton.vue'
import Description from '@/components/ProjectCta/elements/Description.vue'
import { useAppStore } from '@/use/useAppStore'

const { backThisProjectModalOpen } = useAppStore()

const backThisProjectHandler = () => {
  backThisProjectModalOpen.value = true
}
</script>

<template>
  <div class="card projectCta">
    <Logo class="logo" />
    <Header>Mastercraft Bamboo Monitor Riser</Header>
    <Description>
      A beautifully handcrafted monitor stand to reduce neck and eye strain.
    </Description>
    <div class="buttons">
      <BackThisProjectBtn @click="backThisProjectHandler" />
      <BookmarkButton />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectCta {
  @apply relative grid w-[var(--mobile-content-width)] grid-rows-[6.3rem_4.4rem_5rem];
  @apply desktop:w-[var(--desktop-content-width)] desktop:grid-rows-[5.6rem_3.6rem_5.3rem];

  .logo {
    @apply absolute left-1/2 top-[-1.8rem] -translate-x-1/2 transform;
  }

  .buttons {
    @apply flex justify-between gap-x-2 py-0 px-2;
    @apply desktop:px-8;
  }
}
</style>
