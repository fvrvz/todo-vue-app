import { type ConfigService } from '@/types/config.type'
import { inject } from 'vue'

let config: Record<string, unknown>

export async function loadConfig(): Promise<void> {
  const res = await fetch(`${import.meta.env.BASE_URL}config.json`)
  config = await res.json()
}

function getConfig(): Record<string, unknown> {
  if (!config) {
    throw new Error('Config not loaded yet!')
  }
  return config
}

function getProperty<T = string>(key: string): T {
  return config[key] as T
}

export const configService = { getConfig, getProperty }

export function injectConfigService() {
  return inject<ConfigService>('configService')
}
