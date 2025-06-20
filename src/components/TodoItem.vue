<script lang="ts" setup>
import type { Todo } from '@/types/todo.type'

export type ToggleEmitFn = (event: 'toggle-completed', id: string) => void

const emit = defineEmits<ToggleEmitFn>()

const { todo } = defineProps<{ todo: Todo }>()

function onChange() {
  emit('toggle-completed', todo.id)
}
</script>

<template>
  <article>
    <input type="checkbox" :checked="todo.isCompleted" @change="onChange" />
    <p>{{ todo.title }}</p>
  </article>
</template>
