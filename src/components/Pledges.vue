<script lang="ts" setup>
import Pledge from '@/components/Pledge'
import { IPledge } from '@/lib/types/IPledge'
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
</script>

<template>
  <ul class="grid gap-6">
    <li
      v-for="p in filteredPledges"
      :key="p.id"
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
