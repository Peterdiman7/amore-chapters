<template>
<div class="app-wrapper">
    <AppHeader />
    <main class="page-layout">
        <RouterView />
    </main>
    <AppFooter />
</div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
import AppHeader from "@/components/Header.vue"
import AppFooter from "@/components/Footer.vue"
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.app-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.page-layout {
  flex: 1;
  width: 100%;
}
</style>