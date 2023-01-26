<script
  lang="ts"
  setup
>
import { inject, Ref } from 'vue'
import { MenuOpen } from '@/lib/injectionKeys'
import TopBarMenuModal from '@/components/TopBarMenuModal.vue'

const menuOpen = inject(MenuOpen) as Ref<boolean>

const onMenuItemClicked = (item: string) => {
  console.log('You clicked ', item)
  menuOpen.value = false
}
const items = ['About', 'Discover', 'Get Started']
</script>

<template>
  <nav class="top-bar-menu">
    <div class="desktop-menu">
      <ul>
        <li
          v-for="item in items"
          :key="item"
          @click="onMenuItemClicked"
        >{{ item }}
        </li>
      </ul>
    </div>

    <div class="mobile-menu">
      <template v-if="menuOpen">
        <img
          src="@/assets/images/icon-close-menu.svg"
          alt=""
          :data-menu-open="menuOpen"
        >
      </template>
      <template v-else>
        <img
          src="@/assets/images/icon-hamburger.svg"
          alt=""
          @click="() => menuOpen = true"
        >
      </template>
      <Teleport to="body">
        <TopBarMenuModal @click="onMenuItemClicked" />
      </Teleport>
    </div>
  </nav>
</template>

<style
  lang="scss"
  scoped
>
  .top-bar-menu {
    .desktop-menu {
      display: none;
      ul {
        display: flex;
        list-style: none;
        color: var(--clr-white);
        gap: 2.1rem;
        font-size: 0.8125rem;
        li {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            text-decoration-color: var(--clr-gray-200);
          }
        }
      }
    }

    .mobile-menu {
      img {
        position: relative;
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }

        &:active {
          transform: scale(0.9);
        }

        &[data-menu-open='true'] {
          z-index: 999;
        }
      }
    }

    @media screen and (min-width: 1440px) {
      .mobile-menu {
        display: none;
      }

      .desktop-menu {
        display: block;
      }
    }
  }
</style>

