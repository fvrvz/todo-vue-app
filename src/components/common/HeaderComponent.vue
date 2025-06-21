<script lang="ts" setup>
import type { HeaderComponentProps } from '@/types/header.type'
import IconButton from './IconButton.vue'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useLayoutStore } from '@/stores/layout.store'

const props = defineProps<HeaderComponentProps>()

const layoutStore = useLayoutStore()
</script>

<template>
  <header class="container-fluid pico-background-cyan-300">
    <nav>
      <ul>
        <li>
          <strong v-if="props.title">{{ props.title }}</strong>
          <img v-if="props.image" :src="props.image" alt="logo" />
        </li>
      </ul>
      <ul>
        <li>
          <IconButton :icon="faBars" class="secondary" :onClick="layoutStore.toggleSidebar" />
        </li>
      </ul>
    </nav>
  </header>
</template>
