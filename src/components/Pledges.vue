<script lang="ts" setup>
import Pledge from '@/components/Pledge'
import { IPledge } from '@/lib/types'
import { computed } from 'vue'

const props = defineProps<{
  onContinueHandler?: () => void
  onSelectedHandler?: (p: IPledge) => void
  pledges: IPledge[]
  filter?: (p: IPledge) => boolean
  selectable: boolean
}>()

const filteredPledges = computed(() =>
  props.filter ? props.pledges.filter(props.filter) : props.pledges,
)

const onContinueHandler = props.onContinueHandler || (() => {})
const onSelectedHandler = props.onSelectedHandler || (() => {})
</script>

<template>
  <ul class="pledges">
    <li
      v-for="p in filteredPledges"
      :key="p.id"
      class="pledge"
    >
      <Pledge
        :pledge="p"
        :selectable="selectable"
        @continue="onContinueHandler"
        @selected="onSelectedHandler"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.pledges {
  @apply grid gap-6;
}
</style>
