<script
  setup
  lang="ts"
>
import Container from '@/components/Container.vue'
import ProjectCta from '@/components/ProjectCta.vue'
import ProjectStats from '@/components/ProjectStats.vue'
import { provide, ref } from 'vue'
import { Bookmarked, MenuOpen } from '@/lib/injectionKeys'
import ProjectAbout from '@/components/ProjectAbout.vue'

const bookmarked = ref(false)
const menuOpen = ref(false)
provide(Bookmarked, bookmarked)
provide(MenuOpen, menuOpen)
</script>

<template>
  <Container>
    <ProjectCta />
    <ProjectStats />
    <ProjectAbout />
  </Container>
</template>

<style scoped>
</style>
