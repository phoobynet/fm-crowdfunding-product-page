<script lang="ts" setup>
import { MenuClickHandler } from '@/lib/dependency-injection'
import { useAppStore } from '@/use'
import { inject } from 'vue'

const menuClickHandler = inject(MenuClickHandler) as (item: string) => void

const { menuModalOpen } = useAppStore()

const items = ['About', 'Discover', 'Get Started']

const closeMenuHandler = () => {
  menuModalOpen.value = false
}
</script>

<template>
  <nav class="topBarMenu">
    <div class="desktop">
      <ul class="items">
        <li
          v-for="item in items"
          :key="item"
          class="item"
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
          class="icon hamburger"
          @click="closeMenuHandler"
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

      .item {
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
