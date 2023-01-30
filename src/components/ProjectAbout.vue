<script
  lang="ts"
  setup
>
import Pledge from '@/components/pledge/Pledge.vue'
import { useAppStore } from '@/use/useAppStore'

const { pledges } = useAppStore()

</script>

<template>
  <div class="card">
    <div class="project-about">
      <header>
        <h2>About this project</h2>
      </header>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more
        comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make
        you more comfortable while at work, helping you stay focused on the task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow
        notepads, pens, and USB sticks to be stored under the stand.
      </p>
      <ul>
        <li
          v-for="p in pledges"
          :key="p.id"
        >
          <Pledge
            :pledge="p"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .project-about {
    display: grid;
    grid-template-rows: 2.7rem 11.85rem 10.5rem 1fr;
    align-items: end;
    padding: 0.28rem 0.4rem;

    header {
      h2 {
        font-size: 1.125rem;
      }
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: var(--clr-gray-300);
    }

    ul {
      list-style: none;
      padding: 2.1rem 0;
      display: grid;
      grid-row-gap: 1.5rem;

      li {
      }
    }

    @media screen and (min-width: 1440px) {
      padding: 0 2rem;
      grid-template-rows: 4.1rem 9.6rem 5.5rem 1fr;

      header {
        h2 {
          font-size: 1.25rem;
          font-weight: 700;
        }
      }

      p {
        font-size: 1rem;
        line-height: 1.875rem;
      }
      ul {
        padding: 2.6rem 0;
        grid-row-gap: 1.4rem;
      }
    }
  }
</style>

