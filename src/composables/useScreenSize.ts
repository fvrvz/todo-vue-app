import { ref, onMounted, onUnmounted } from 'vue'

export function useScreenSize() {
  const isLargeScreen = ref(false)

  const updateScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 1024 // lg breakpoint
  }

  onMounted(() => {
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize)
  })

  return { isLargeScreen }
}
