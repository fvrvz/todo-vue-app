import { isPrimitive } from './is-primitive'

export function getItem<T>(key: string, defaultValue: T): T {
  const raw = localStorage.getItem(key) ?? defaultValue

  try {
    const parsed = JSON.parse(raw as string)
    return parsed as T
  } catch {
    return raw as T
  }
}

export function setItem(key: string, payload: unknown): void {
  if (payload === undefined || typeof payload === 'function') return

  const value = isPrimitive(payload) ? `${payload}` : JSON.stringify(payload)

  localStorage.setItem(key, value)
}

export function deleteItem(key: string) {
  localStorage.removeItem(key)
}
