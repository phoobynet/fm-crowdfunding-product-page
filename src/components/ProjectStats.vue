<script
  lang="ts"
  setup
>
import Card from '@/components/Card.vue'
import ProgressBar from '@/components/ProgressBar.vue'
</script>

<template>
  <Card>
    <div class="project-stats">
      <ul>
        <li>
          <div class="amount">$89,914</div>
          <div class="description">of $100,0000 backed</div>
        </li>
        <li>
          <div class="hl" />
          <div class="vl" />
        </li>
        <li>
          <div class="amount">5,007</div>
          <div class="description">total backers</div>
        </li>
        <li>
          <div class="hl" />
          <div class="vl" />
        </li>
        <li>
          <div class="amount">56</div>
          <div class="description">days left</div>
        </li>
      </ul>
      <div class="progress-bar">
        <ProgressBar />
      </div>
    </div>
  </Card>
</template>

<style
  lang="scss"
  scoped
>
  .project-stats {
    padding-top: .6rem;
    ul {
      display: grid;
      list-style: none;
      padding: 0;
      justify-content: center;
      grid-template-rows: 5.3rem 2rem 5.3rem 2rem 5rem;

      li {
        display: grid;
        justify-content: center;
        grid-template-rows: 3rem auto;
        text-align: center;

        .amount {
          font-size: 2rem;
          font-weight: 700;
        }

        .description {
          font-size: 0.875rem;
          color: var(--clr-gray-300);
        }

        .vl {
          display: none;
        }

        .hl {
          height: 1rem;
          width: 5rem;
          border-bottom: 1px solid var(--clr-gray-100);
        }
      }

      @media screen and (min-width: 1440px) {
        grid-auto-columns: auto;
        .vl {
          display: block;
        }
        .hl {
          display: none;
          width: 4rem;
        }
      }
    }

    .progress-bar {
      margin-top: 1rem;
      margin-bottom: 1.8rem;
    }
  }
</style>

