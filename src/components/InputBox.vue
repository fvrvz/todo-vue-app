<script lang="ts" setup>
import { useField } from '@/composables/useField'
import { useTodoStore } from '@/stores/todo.store'
import type { Todo } from '@/types/todo.type'

const { value: inputText, isInvalid } = useField('')

const store = useTodoStore()

function onSubmit() {
  if (isInvalid.value) {
    return
  }

  const payload: Todo = {
    id: Date.now().toString(),
    isCompleted: false,
    title: inputText.value.trim(),
  }
  store.addTodo(payload)
  inputText.value = ''
}
</script>

<template>
  <article>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        v-model="inputText"
        placeholder="Add todo"
        v-bind="{ ...(isInvalid ? { 'aria-invalid': true } : {}) }"
      />
      <div>
        <small v-if="isInvalid" class="pico-color-red-500">Only whitespace is not allowed.</small>
      </div>
    </form>
  </article>
</template>

<style scoped>
input {
  margin: unset;
}
</style>
