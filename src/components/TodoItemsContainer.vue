<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo.store'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()
</script>

<template>
  <article class="overflow-auto" style="margin: unset">
    <p v-if="!store.todos.length">No Data available</p>
    <TodoItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
  </article>
</template>
