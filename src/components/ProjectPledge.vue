<script
  lang="ts"
  setup
>
import { Pledge } from '@/lib/types/Pledge'
import Button from '@/components/Button.vue'
import { computed } from 'vue'

const props = defineProps<{ pledge: Pledge }>()
const emit = defineEmits(['selected'])

const outOfStock = computed(() => props.pledge.remaining === 0)

</script>

<template>
  <div
    class="pledge"
    :class="{'out-of-stock': outOfStock}"
    v-if="pledge"
  >
    <header>
      <h3>{{ pledge.name }}</h3>
    </header>
    <div class="amount">Pledge ${{ pledge.amount }} or more</div>
    <p>
      {{ pledge.description }}
    </p>
    <div class="remaining">
      <div class="amount">
        {{ pledge.remaining }}
      </div>
      <div>left</div>
    </div>

    <div class="button-container">
      <Button
        @click="() => emit('selected', pledge)"
        class="button"
        :disabled="outOfStock"
      >
        <template v-if="outOfStock">Out of Stock</template>
        <template v-else>
          Select Reward
        </template>
      </Button>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .pledge {
    display: grid;
    grid-template-rows: 1.6rem 2.6rem 8.9rem 4.2rem auto;
    border-radius: 0.5rem;
    border: 2px solid var(--clr-gray-50);
    padding: 1.3rem 1.4rem;

    &.out-of-stock {
      opacity: .5;
    }


    header {
      h3 {
        font-size: 0.875rem;
      }
    }

    .amount {
      font-size: 0.875rem;
      color: var(--clr-green-500);
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: var(--clr-gray-300);
    }

    .remaining {
      align-self: start;
      display: flex;
      font-size: 0.9375rem;
      align-items: center;
      color: var(--clr-gray-300);
      gap: .6rem;

      .amount {
        color: black;
        font-size: 2rem;
        font-weight: 700;
      }
    }

    .button-container {
      .button {
        height: 3rem;
        font-size: 0.875rem;
        padding-left: 2.1rem;
        padding-right: 2.1rem;

        &[disabled] {
          background-color: #979797;
        }
      }
    }
  }
</style>

