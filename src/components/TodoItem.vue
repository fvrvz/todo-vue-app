<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo.store'
import type { Todo } from '@/types/todo.type'
import { faXmark, faPen, faFloppyDisk, faTrash } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton.vue'
import { ref } from 'vue'

const { todo } = defineProps<{ todo: Todo }>()
const store = useTodoStore()
function onRemove() {
  store.removeTodo(todo.id)
}

const isEditMode = ref<boolean>(false)
const todoTitle = ref<string>(todo.title)

function onSave() {
  const _todo: Todo = {
    ...todo,
    title: todoTitle.value,
  }

  store.editTodo(todo.id, _todo)
  todoTitle.value = ''
  isEditMode.value = false
}

function toggleEdit() {
  isEditMode.value = !isEditMode.value
  todoTitle.value = todo.title
}
</script>

<template>
  <article class="todo-container">
    <input type="checkbox" :checked="todo.isCompleted" @change="store.toggleTodo(todo.id)" />
    <form v-if="isEditMode" @submit.prevent="onSave" class="todo-container" style="flex: 1">
      <input type="text" v-model="todoTitle" style="margin-bottom: unset" />
      <IconButton type="submit" :icon="faFloppyDisk" color="blue" />
    </form>
    <p style="margin-bottom: unset; flex: 1" v-else>{{ todo.title }}</p>
    <div class="todo-container" style="margin-left: 1rem">
      <IconButton
        :icon="isEditMode ? faXmark : faPen"
        :onClick="toggleEdit"
        :color="isEditMode ? 'brown' : 'blue'"
      />
      <IconButton :icon="faTrash" :onClick="onRemove" color="red" />
    </div>
  </article>
</template>

<style scoped>
.todo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
</style>
