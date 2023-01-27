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
          <div class="description">of $100,000 backed</div>
        </li>
        <li class="separator">
          <div class="hl" />
          <div class="vl" />
        </li>
        <li>
          <div class="amount">5,007</div>
          <div class="description">total backers</div>
        </li>
        <li class="separator">
          <div class="hl" />
          <div class="vl" />
        </li>
        <li>
          <div class="amount">56</div>
          <div class="description">days left</div>
        </li>
      </ul>
      <div class="progress-bar">
        <ProgressBar :goal="100_000" :actual="89_914" />
      </div>
    </div>
  </Card>
</template>

<style
  lang="scss"
  scoped
>
  .project-stats {
    padding-top: 0.6rem;
    ul {
      display: grid;
      list-style: none;
      padding: 0;
      justify-content: center;
      grid-template-rows: 4.9rem 2.3rem 4.9rem 2.3rem 4.3rem;

      li {
        display: grid;
        justify-content: center;
        grid-template-rows: 3.2rem auto;
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
          height: 3.9375rem;
          width: 1rem;
          border-right: 1px solid var(--clr-gray-100);
        }

        .hl {
          height: 1rem;
          width: 5rem;
          border-bottom: 1px solid var(--clr-gray-100);
        }
      }
    }

    .progress-bar {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
      padding: 0 0.5rem;
    }


    @media screen and (min-width: 1440px) {
      padding: 1.8rem .6rem 0;
      ul {
        grid-template-rows: 4.6rem;
        grid-template-columns: 11.1rem 2.1rem 10.2rem 5.8rem 4.9rem;
        justify-content: start;
        align-items: start;

        li {
          text-align: left;
          align-self: center;
          justify-content: center;

          .description {
            font-size: 0.9375rem;
          }

          .vl {
            display: block;
          }

          .hl {
            display: none;
            width: 4rem;
          }

          &.separator {
            margin-top: -1rem;
          }
        }
      }
      .progress-bar {
        padding: 0 1.4rem;
      }
    }
  }
</style>

