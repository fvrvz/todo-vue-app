<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo.store'
import type { Todo } from '@/types/todo.type'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton.vue'

const { todo } = defineProps<{ todo: Todo }>()
const store = useTodoStore()
function onRemove() {
  store.removeTodo(todo.id)
}
</script>

<template>
  <article class="todo-container">
    <input type="checkbox" :checked="todo.isCompleted" @change="store.toggleTodo(todo.id)" />
    <p>{{ todo.title }}</p>
    <IconButton :icon="faXmark" :onClick="onRemove" color="red" />
  </article>
</template>

<style scoped>
.todo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
