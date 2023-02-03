<script lang="ts" setup>
import { useAppStore } from '@/use/useAppStore'

const { bookmarked } = useAppStore()
</script>

<template>
  <div
    class="bookmark-button"
    role="button"
    :data-bookmarked="bookmarked"
    @click="() => (bookmarked = !bookmarked)"
  >
    <div class="icon-container">
      <svg
        width="56"
        height="56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          fill-rule="evenodd"
        >
          <circle
            fill="#2F2F2F"
            cx="28"
            cy="28"
            r="28"
          />
          <path
            fill="#B1B1B1"
            d="M23 19v18l5-5.058L33 37V19z"
          />
        </g>
      </svg>
    </div>
    <div class="text-container">
      <transition
        name="switch"
        mode="out-in"
      >
        <span v-if="bookmarked"> Bookmarked </span>
        <span v-else>Bookmark</span>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bookmark-button {
  @apply flex h-[3.5rem] min-w-[3.5rem] items-center justify-start gap-2 bg-gray-50 text-sm font-bold text-gray-400;
  @apply cursor-pointer rounded-full transition-all duration-500;

  &[data-bookmarked='true'] {
    @apply bg-green-100 text-green-700;

    @media (min-width: 1440px) {
      @apply min-w-[11.7rem];
    }
  }

  @media (hover: hover) {
    &:hover {
      .icon-container {
        @apply opacity-50 transition-all duration-300;

        svg {
          circle {
            @apply bg-gray-400;
          }
        }
      }
    }
  }

  &[data-bookmarked='true'] {
    .icon-container {
      @apply transition-all duration-300;

      svg {
        circle {
          fill: var(--clr-green-700);
        }

        path {
          fill: var(--clr-white);
        }
      }
    }
  }

  .icon-container {
  }

  .text-container {
    @apply hidden;
  }

  @media (min-width: 1440px) {
    @apply w-[10.775rem];
    .text-container {
      @apply block;
    }
  }
}

.switch-enter-from,
.switch-leave-to {
  @apply translate-y-[20px] transform opacity-0;
}

.switch-enter-active,
.switch-leave-active {
  @apply transition-all duration-300 ease-in;
}

.switch-leave {
  @apply transition-all duration-200 ease-out;
}
</style>
