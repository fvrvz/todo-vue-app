<script lang="ts" setup>
import type { IconButtonProps } from '@/types/icon-button.type'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const {
  onClick,
  color,
  type,
  href,
  target = '_blank',
  tooltip,
  tooltipPosition,
  ...iconProps
} = defineProps<IconButtonProps>()
</script>

<template>
  <a
    v-if="href"
    :href="href ?? '#'"
    :target="target"
    :style="{ color }"
    :data-tooltip="tooltip"
    :data-placement="tooltipPosition"
  >
    <FontAwesomeIcon v-bind="iconProps" />
  </a>
  <button
    v-else
    @click="onClick"
    :type="type"
    :style="{ color }"
    :data-tooltip="tooltip"
    :data-placement="tooltipPosition"
  >
    <FontAwesomeIcon v-bind="iconProps" />
  </button>
</template>

<style scoped>
button,
a {
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
