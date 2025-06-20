<script setup lang="ts">
import InputBox from './components/InputBox.vue'
import TodoItemsContainer from './components/TodoItemsContainer.vue'
</script>

<template>
  <header class="container">
    <h1>Todo Vue App</h1>
  </header>
  <main class="container">
    <InputBox />
    <TodoItemsContainer />
  </main>
</template>
