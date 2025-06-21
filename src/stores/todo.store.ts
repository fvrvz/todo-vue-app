import { STORAGE_KEY } from '@/constants/todo-store.const'
import { getItem, setItem } from '@/helpers/local-storage'
import type { Todo } from '@/types/todo.type'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref<Todo[]>(loadTodos())

  function addTodo(title: string) {
    todos.value.push({
      id: Date.now().toString(),
      title,
      isCompleted: false,
    })
  }

  function removeTodo(id: string) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  function toggleTodo(id: string) {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.isCompleted = !todo.isCompleted
    }
  }

  function editTodo(id: string, payload: Omit<Todo, 'id'>) {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      todo.isCompleted = payload.isCompleted
      todo.title = payload.title
    }
  }

  watch(
    todos,
    (newTodos) => {
      setItem(STORAGE_KEY, newTodos)
    },
    { deep: true },
  )

  function loadTodos() {
    return getItem<Todo[]>(STORAGE_KEY, [])
  }

  return { todos, addTodo, removeTodo, toggleTodo, editTodo }
})
