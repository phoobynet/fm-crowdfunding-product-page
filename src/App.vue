<script
  setup
  lang="ts"
>
import Container from '@/components/Container.vue'
import ProjectCta from '@/components/ProjectCta.vue'
import ProjectStats from '@/components/ProjectStats.vue'
import { onMounted, provide, ref } from 'vue'
import { MenuClickHandler, ScrollHeight } from '@/lib/injectionKeys'
import ProjectAbout from '@/components/ProjectAbout.vue'
import TopBarMenuModal from '@/components/TopBarMenuModal.vue'
import { useAppStore } from '@/use/useAppStore'
import BackThisProjectModal from '@/components/BackThisProjectModal.vue'
import ThankYouModal from '@/components/ThankYouModal.vue'

const {
  menuModalOpen,
  init,
  pledges,
  fetchingPledges,
} = useAppStore()

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

<style scoped>
</style>
