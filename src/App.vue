<script
  setup
  lang="ts"
>
import Container from '@/components/Container.vue'
import ProjectCta from '@/components/ProjectCta.vue'
import ProjectStats from '@/components/ProjectStats.vue'
import { provide, ref } from 'vue'
import { BackThisProjectModalOpen, Bookmarked, MenuClickHandler, MenuOpen } from '@/lib/injectionKeys'
import ProjectAbout from '@/components/ProjectAbout.vue'
import TopBarMenuModal from '@/components/TopBarMenuModal.vue'

const bookmarked = ref(false)
const menuOpen = ref(false)
const backThisProjectModalOpen = ref(false)

const menuClickHandler = (item: string) => {
  console.log('You clicked ', item)
  menuOpen.value = false
}

provide(Bookmarked, bookmarked)
provide(MenuOpen, menuOpen)
provide(BackThisProjectModalOpen, backThisProjectModalOpen)
provide(MenuClickHandler, menuClickHandler)

</script>

<template>
  <Container>
    <ProjectCta />
    <ProjectStats />
    <ProjectAbout />
  </Container>
  <Teleport to="body">
    <TopBarMenuModal @click="menuClickHandler" />
  </Teleport>
</template>

<style scoped>
</style>
