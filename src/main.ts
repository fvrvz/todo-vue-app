import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { configService, loadConfig } from './services/config.service'

async function bootstrap() {
  await loadConfig()

  const app = createApp(App)
  app.provide('configService', configService)
  app.use(createPinia())
  app.mount('#app')
}

bootstrap()
