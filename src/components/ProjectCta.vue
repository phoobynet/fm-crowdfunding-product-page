<script
  lang="ts"
  setup
>
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import BookmarkButton from '@/components/BookmarkButton.vue'

</script>

<template>
  <Card class="project-cta">
    <img
      src="@/assets/images/logo-mastercraft.svg"
      alt=""
    >
    <header>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
    </header>
    <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
    <div class="buttons-container">
      <Button>Back this project</Button>
      <BookmarkButton />
    </div>
  </Card>
</template>

<style
  lang="scss"
  scoped
>
  $icon-dim: 3.5rem;

  .project-cta {
    position: relative;
    display: grid;
    text-align: center;
    grid-template-rows: 6.3rem 4.4rem 5rem;
    min-width: var(--mob-content-width);

    img {
      position: absolute;
      width: $icon-dim;
      height: $icon-dim;
      left: calc(50% - ($icon-dim / 2));
      top: -1.8rem;
    }

    header {
      padding: 2.1rem 3rem;

      h1 {
        font-size: 1.25rem;
        letter-spacing: 0;
        line-height: 1.62rem;
      }
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: var(--clr-gray-300);
    }

    .buttons-container {
      display: flex;
      justify-content: space-between;
      padding: 0 .5rem;
    }

    @media (min-width: 1440px) {
      grid-template-rows: 5.4rem 3.9rem 5rem;
      header {
        padding-top: 2.8rem;
        h1 {
          font-size: 1.75rem;
        }
      }
      p {
        font-size: 1rem;
      }

      .buttons-container {
        padding: 0 2rem;
      }
    }
  }
</style>

