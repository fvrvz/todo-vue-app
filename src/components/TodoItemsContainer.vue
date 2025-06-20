<script lang="ts" setup>
import TodoItem, { type ToggleEmitFn } from './TodoItem.vue'
import { type Todo } from '@/types/todo.type'

const { todos } = defineProps<{ todos: Todo[] }>()

const emit = defineEmits<ToggleEmitFn>()

function onToggle(id: string) {
  emit('toggle-completed', id)
}
</script>

<template>
  <div>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-completed="onToggle" />
  </div>
</template>
