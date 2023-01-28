<script
  lang="ts"
  setup
>
import { Pledge } from '@/lib/types/Pledge'
import Button from '@/components/Button.vue'
import { computed } from 'vue'
import { useAppStore } from '@/use/useAppStore'
import Checkbox from '@/components/Checkbox.vue'

const {
  selectedPledgeId,
} = useAppStore()
const props = defineProps<{ pledge: Pledge, selectable?: boolean }>()
const emit = defineEmits(['selected'])

const outOfStock = computed(() => props.pledge.remaining === 0)

const pledgeSelectedValue = computed({
  get () {
    return props.pledge.id === selectedPledgeId.value
  },
  set (checked) {
    selectedPledgeId.value = checked
      ? props.pledge.id
      : undefined
  },
})
</script>

<template>
  <div
    class="pledge"
    :class="{'out-of-stock': outOfStock, selectable, selected: pledge.id === selectedPledgeId}"
    v-if="pledge"
  >
    <div
      class="select-pledge"
      v-if="selectable"
    >
      <Checkbox
        v-model="pledgeSelectedValue"
        :disabled="outOfStock"
      />
    </div>
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

    <div v-if="selectable" class="enter-your-pledge">
      todo
    </div>
    <div class="button-container" v-else>
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
    grid-template-columns: 2.5rem repeat(2, auto);
    grid-template-areas:
      "header header header"
      "amount amount amount"
      "description description description"
      "remaining remaining remaining"
      "button-container button-container button-container";
    border-radius: 0.5rem;
    border: 2px solid var(--clr-gray-50);
    padding: 1.3rem 1.4rem;

    &.selectable {
      grid-template-areas:
      "select-pledge header header"
      "select-pledge amount amount"
      "description description description"
      "remaining remaining remaining"
      "button-container button-container button-container";
    }

    &.selected {
      border: 2px solid var(--clr-green-500);
    }

    &.out-of-stock {
      opacity: .5;
    }

    .select-pledge {
      grid-area: select-pledge;
      align-self: center;
      // TODO: This could be a problem
      padding-bottom: 1rem;
    }

    header {
      grid-area: header;

      h3 {
        font-size: 0.875rem;
      }
    }

    .amount {
      grid-area: amount;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--clr-green-500);
    }

    p {
      grid-area: description;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: var(--clr-gray-300);
    }

    .remaining {
      grid-area: remaining;
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
      grid-area: button-container;

      .button {
        height: 3rem;
        font-size: 0.875rem;
        padding-left: 2.1rem;
        padding-right: 2.1rem;
      }
    }

    .enter-your-pledge {
      border-top: 1px solid var(--clr-gray-100);
    }

    @media screen and (min-width: 1440px) {
      grid-template-rows: 2.5rem 5.1rem 4.5rem;
      grid-template-columns: repeat(2, auto);
      grid-template-areas:
      "header amount"
      "description description"
      "remaining button-container";
      padding: 1.3rem 1.8rem 1.9rem;

      header {
        align-self: end;

        h3 {
          font-size: 1.125rem;
        }
      }

      .amount {
        font-size: 0.9375rem;
        justify-self: end;
        align-self: end;
      }

      p {
        font-size: 1rem;
        line-height: 30px;
        align-self: end;
      }

      .remaining {
        align-self: end;
      }

      .button-container {
        align-self: end;
        justify-self: end;

        .button {
          min-width: 5.5rem;
        }
      }
    }
  }
</style>

