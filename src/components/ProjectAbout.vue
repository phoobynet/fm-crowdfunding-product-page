<script
  lang="ts"
  setup
>
import Card from '@/components/Card.vue'
import { Pledge } from '@/lib/types/Pledge'
import ProjectPledge from '@/components/ProjectPledge.vue'

const pledges: Pledge[] = [{
  name: 'Bamboo Stand',
  amount: 25,
  description: `
 You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.
  `,
  remaining: 101,
},
  {
    name: 'Black Edition Stand',
    amount: 75,
    description: `
 You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
  `,
    remaining: 64,
  },
  {
    name: 'Mahogany Special Edition',
    amount: 200,
    description: `
 You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
  `,
    remaining: 0,
  },
]
</script>

<template>
  <Card>
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
          :key="name"
        >
          <ProjectPledge :pledge="p" />
        </li>
      </ul>
    </div>
  </Card>
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
  }
</style>

