<script
  setup
  lang="ts"
>
import Container from '@/components/Container.vue'
import ProjectCta from '@/components/ProjectCta.vue'
import ProjectStats from '@/components/ProjectStats.vue'
import { provide, ref } from 'vue'
import { Bookmarked, MenuOpen } from '@/lib/injectionKeys'

const bookmarked = ref(false)
const menuOpen = ref(false)
provide(Bookmarked, bookmarked)
provide(MenuOpen, menuOpen)
</script>

<template>
  <Container>
    <ProjectCta />
    <ProjectStats />
  </Container>
</template>

<style scoped>
</style>
