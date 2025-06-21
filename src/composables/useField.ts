import { ref, watch } from 'vue'

export function useField(initial = '') {
  const value = ref<string>(initial)
  const isDirty = ref<boolean>(false)
  const isInvalid = ref<boolean>(false)

  watch(value, (newVal) => {
    if (!isDirty.value && newVal !== '') {
      isDirty.value = true
    }

    if (isDirty.value) {
      isInvalid.value = newVal.trim() === '' && newVal.length > 0
    }
  })

  return { value, isDirty, isInvalid }
}
