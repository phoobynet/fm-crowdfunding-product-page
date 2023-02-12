<script setup lang="ts">
import {
  About,
  BackThisProjectModal,
  Container,
  Cta,
  Stats,
  ThankYouModal,
  TopBarMenuModal,
} from '@/components'
import { MenuClickHandler } from '@/lib/dependency-injection'
import { useAppStore } from '@/use'
import { onMounted, provide } from 'vue'

const { menuModalOpen, init, pledges, fetchingPledges } = useAppStore()

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
      <Cta />
      <Stats />
      <About />
    </template>
  </Container>
  <Teleport to="body">
    <BackThisProjectModal />
    <ThankYouModal />
    <TopBarMenuModal />
  </Teleport>
</template>
