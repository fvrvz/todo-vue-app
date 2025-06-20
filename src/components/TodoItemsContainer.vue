<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo.store'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()
</script>

<template>
  <div class="container">
    <TodoItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
  </div>
</template>
