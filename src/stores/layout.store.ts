import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout-store', () => {
  const isSidebarActive = ref<boolean>(false)

  function toggleSidebar() {
    isSidebarActive.value = !isSidebarActive.value
  }

  return { isSidebarActive, toggleSidebar }
})
