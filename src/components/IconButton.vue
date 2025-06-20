<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { icon, onClick, size, color } = defineProps<{
  icon: object
  onClick: () => void
  size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
  color?: string
}>()
</script>

<template>
  <button @click="onClick">
    <FontAwesomeIcon :icon="icon" :size="size" :style="{ color }" />
  </button>
</template>

<style>
button {
  all: unset;
  cursor: pointer;
}
</style>
