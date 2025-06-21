<script setup lang="ts">
import HeaderComponent from './components/common/HeaderComponent.vue'
import SidebarComponent from './components/common/SidebarComponent.vue'
import InputBox from './components/InputBox.vue'
import TodoItemsContainer from './components/TodoItemsContainer.vue'
import { useLayoutStore } from './stores/layout.store'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="main-body">
    <HeaderComponent title="Todo App" />
    <main class="layout-container" :class="{ 'sidebar-active': layoutStore.isSidebarActive }">
      <div class="main-content">
        <InputBox />
        <TodoItemsContainer />
      </div>
      <transition name="sidebar-slide">
        <SidebarComponent v-if="layoutStore.isSidebarActive" class="sidebar" />
      </transition>
    </main>
  </div>
</template>

<style scoped>
.main-body {
  height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr;
}

.layout-container {
  display: flex;
  transition: all 0.3s ease;
  overflow: hidden;
}

.main-content {
  flex-grow: 1;
  transition: width 0.3s ease;
  width: 100%;
  padding: 2rem 4rem;

  display: grid;
  grid-template-rows: auto 1fr;
}

.sidebar-active .main-content {
  width: 70%;
}

.sidebar {
  width: 30%;
  transition: width 0.3s ease;
}

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.sidebar-slide-enter-from,
.sidebar-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@media (max-width: 1023px) {
  .layout-container {
    position: relative;
  }

  .main-content {
    width: 100% !important;
  }

  .sidebar {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    z-index: 100;
  }

  .sidebar-active .main-content {
    width: 100%;
  }
}
</style>
