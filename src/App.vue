<script
  setup
  lang="ts"
>
import Container from '@/components/Container.vue'
import ProjectCta from '@/components/ProjectCta.vue'
import { provide, ref } from 'vue'
import { Bookmarked } from '@/lib/injectionKeys'

const bookmarked = ref(false)
provide(Bookmarked, bookmarked)
</script>

<template>
  <Container>
    <ProjectCta />
  </Container>
</template>

<style scoped>
</style>
