<script lang="ts" setup>
import { IPledge } from '@/lib/types/IPledge'
import { computed } from 'vue'

const props = defineProps<{
  onContinueHandler: () => void
  pledges: IPledge[]
  filter?: (p: IPledge) => boolean
  selectable: boolean
  listStyle?: Record<string, unknown>
  itemStyle?: Record<string, unknown>
}>()

const filteredPledges = computed(() =>
  props.filter ? props.pledges.filter(props.filter) : props.pledges,
)
</script>

<template>
  <ul :style="listStyle">
    <li
      v-for="p in filteredPledges"
      :key="p.id"
      :style="itemStyle"
    >
      <Pledge
        :pledge="p"
        :selectable="selectable"
        @continue="onContinueHandler"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
