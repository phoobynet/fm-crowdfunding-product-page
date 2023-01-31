<script
  lang="ts"
  setup
>
import TopBar from '@/components/TopBar.vue'
import { inject, Ref, ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { ScrollHeight } from '@/lib/injectionKeys'

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

<style
  lang="scss"
  scoped
>
  .container {
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-content: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .4), transparent), url('@/assets/images/image-hero-mobile.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: var(--mob-width) 18.75rem;


    main {
      display: flex;
      justify-content: center;
      padding-top: 10rem;
      padding-bottom: 4rem;

      .contents {
        display: grid;
        grid-auto-rows: auto;
        width: var(--mob-content-width);
        gap: 1.5rem;
      }
    }

    @media screen and (min-width: 1440px) {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, .4), transparent), url('@/assets/images/image-hero-desktop.jpg');
      background-size: var(--desk-width) 25.0rem;

      main {
        padding-top: 12rem;

        .contents {
          width: var(--desk-content-width);
        }
      }
    }
  }
</style>

