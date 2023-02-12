<script lang="ts" setup>
import TopBar from '@/components/TopBar.vue'
import { ScrollHeight } from '@/lib/dependency-injection'
import { useResizeObserver } from '@vueuse/core'
import { Ref, inject, ref } from 'vue'

const container = ref<HTMLDivElement>()

const scrollHeight = inject(ScrollHeight) as Ref<number>

useResizeObserver(container, (entries) => {
  scrollHeight.value = entries[0].target.scrollHeight
})
</script>

<template>
  <div
    class="container"
    ref="container"
  >
    <TopBar />
    <main>
      <div class="contents">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply mx-auto flex h-screen flex-col items-center bg-no-repeat;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent),
    url('@/assets/images/image-hero-mobile.jpg');
  background-position: top center;
  background-size: var(--mobile-width) 18.75rem;

  main {
    @apply flex justify-center pt-[10rem] pb-[4rem];
    @apply desktop:pt-[12rem];

    .contents {
      @apply grid w-mobile-content auto-rows-auto gap-[1.5rem];
      @apply desktop:w-desktop-content;
    }
  }

  @media (min-width: 1440px) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        transparent
      ),
      url('@/assets/images/image-hero-desktop.jpg');
    background-size: var(--desktop-width) 25rem;
  }
}
</style>
