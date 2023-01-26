<script
  lang="ts"
  setup
>
</script>

<template>
  <nav class="top-bar-menu">
    <div class="menu-container">
      <ul class="menu">
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
    </div>

    <img
      src="@/assets/images/icon-hamburger.svg"
      alt=""
    >
  </nav>
</template>

<style
  lang="scss"
  scoped
>
  .top-bar-menu {
    .menu-container {
      display: none;

      ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 2.1rem;
        color: var(--clr-white);
        font-weight: 500;
        font-size: 0.8125rem;
        cursor: pointer;

        li {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    @media screen and (min-width: 1440px) {
      img {
        display: none;
      }

      .menu-container {
        display: block;
      }
    }
  }
</style>

