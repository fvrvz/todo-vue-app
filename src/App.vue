<script setup lang="ts">
import { ref } from 'vue'
import InputBox from './components/InputBox.vue'
import TodoItemsContainer from './components/TodoItemsContainer.vue'
import type { Todo } from './types/todo.type'

const todos = ref<Todo[]>([])

function onAdd(payload: Todo) {
  todos.value.push(payload)
}

function onToggle(id: string) {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo) {
    todo.isCompleted = !todo.isCompleted
  }
}
</script>

<template>
  <h1>Todo Vue App</h1>
  <InputBox @add="onAdd" />
  <TodoItemsContainer :todos="todos" @toggle-completed="onToggle" />
</template>
