<script setup lang="ts">
import {
  BackThisProjectModal,
  Container,
  ProjectAbout,
  ProjectCta,
  ProjectStats,
  ThankYouModal,
  TopBarMenuModal,
} from '@/components'
import { MenuClickHandler, ScrollHeight } from '@/lib/injectionKeys'
import { useAppStore } from '@/use/useAppStore'
import { onMounted, provide, ref } from 'vue'

const { menuModalOpen, init, pledges, fetchingPledges } = useAppStore()

const scrollHeight = ref<number>()

provide(ScrollHeight, scrollHeight)

const menuClickHandler = (item: string) => {
  console.log('You clicked ', item)
  menuModalOpen.value = false
}

provide(MenuClickHandler, menuClickHandler)

onMounted(async () => {
  await init()
})
</script>

<template>
  <Container>
    <template v-if="!fetchingPledges && pledges.length > 0">
      <ProjectCta />
      <ProjectStats />
      <ProjectAbout />
    </template>
  </Container>
  <Teleport to="body">
    <BackThisProjectModal />
    <ThankYouModal />
    <TopBarMenuModal />
  </Teleport>
</template>
