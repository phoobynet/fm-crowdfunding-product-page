<script lang="ts" setup>
import { MenuClickHandler } from '@/lib/injectionKeys'
import { useAppStore } from '@/use/useAppStore'
import { inject } from 'vue'

const menuClickHandler = inject(MenuClickHandler) as (item: string) => void

const { menuModalOpen } = useAppStore()

const items = ['About', 'Discover', 'Get Started']
</script>

<template>
  <nav class="topBarMenu">
    <div class="desktop">
      <ul class="items">
        <li
          class="item"
          v-for="item in items"
          :key="item"
          @click="(_) => menuClickHandler(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="mobile">
      <template v-if="menuModalOpen">
        <img
          src="@/assets/images/icon-close-menu.svg"
          alt=""
          :data-menu-open="menuModalOpen"
          class="icon closeMenu"
        />
      </template>
      <template v-else>
        <img
          src="@/assets/images/icon-hamburger.svg"
          alt=""
          @click="() => (menuModalOpen = true)"
          class="icon hamburger"
        />
      </template>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.topBarMenu {
  .desktop {
    @apply hidden;
    @apply desktop:block;

    .items {
      @apply flex list-none gap-[2.1rem] text-[0.8125rem] text-white;

      li {
        @apply cursor-pointer;

        &:hover {
          @apply underline decoration-gray-200;
        }
      }
    }
  }

  .mobile {
    @apply desktop:hidden;
    .icon {
      @apply relative transform cursor-pointer transition duration-200;

      &:hover {
        @apply scale-110;
      }

      &:active {
        @apply scale-90;
      }

      &[data-menu-open='true'] {
        @apply z-[999];
      }
    }
  }
}
</style>
