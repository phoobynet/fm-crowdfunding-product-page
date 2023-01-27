<script
  lang="ts"
  setup
>
import { inject } from 'vue'
import { Bookmarked } from '@/lib/injectionKeys'

const bookmarked = inject(Bookmarked)
</script>

<template>
  <div
    class="bookmark-button"
    role="button"
    :data-bookmarked="bookmarked"
    @click="() => bookmarked = !bookmarked"
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
      <transition name="switch" mode="out-in">
      <span
        v-if="bookmarked"
      >
        Bookmarked
      </span>
        <span
          v-else
        >Bookmark</span>
      </transition>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .bookmark-button {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.9rem;
    color: var(--clr-gray-400);
    background-color: var(--clr-gray-50);
    font-size: 1rem;
    font-weight: 700;
    height: 3.5rem;
    min-width: 3.5rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: all .5s;

    &[data-bookmarked='true'] {
      color: var(--clr-green-700);
      background-color: var(--clr-green-100);

      @media screen and (min-width: 1440px) {
        min-width: 11.7rem;
      }
    }

    @media (hover: hover) {
      &:hover {
        .icon-container {
          transition: all 0.3s;
          opacity: 0.5;

          svg {
            circle {
              color: var(--clr-gray-400);
            }
          }
        }
      }
    }

    &[data-bookmarked='true'] {
      .icon-container {
        transition: all 0.3s;

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
      display: none;
    }

    @media screen and (min-width: 1440px) {
      width: 10.775rem;
      .text-container {
        display: block;
      }
    }
  }

  .switch-enter-from, .switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  .switch-enter-active, .switch-leave-active {
    transition: all 0.2s ease;
  }

  .switch-leave {
    transition: all 0.2s ease;
  }
</style>

