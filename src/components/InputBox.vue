<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo.store'
import type { Todo } from '@/types/todo.type'
import { ref } from 'vue'

const inputText = ref<string>('')

const store = useTodoStore()

function onSubmit() {
  const payload: Todo = {
    id: Date.now().toString(),
    isCompleted: false,
    title: inputText.value,
  }
  store.addTodo(payload)
  inputText.value = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="inputText" />
  </form>
</template>
