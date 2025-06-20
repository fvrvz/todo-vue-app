import type { Todo } from '@/types/todo.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([])

  function addTodo(todo: Todo) {
    todos.value.push(todo)
  }

  function removeTodo(id: string) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
    console.log({ id, todos: todos.value })
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

  return { todos, addTodo, removeTodo, toggleTodo, editTodo }
})
