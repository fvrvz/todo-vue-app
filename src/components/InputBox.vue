<script lang="ts" setup>
import type { Todo } from '@/types/todo.type'
import { ref } from 'vue'

export type AddEmitFn = (event: 'add', payload: Todo) => void

const inputText = ref<string>('')
const emit = defineEmits<AddEmitFn>()

function onSubmit() {
  emit('add', { id: Date.now().toString(), isCompleted: false, title: inputText.value })
  inputText.value = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="inputText" />
  </form>
</template>
