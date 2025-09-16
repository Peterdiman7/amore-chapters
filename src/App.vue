<template>
<div class="app-wrapper">
    <RouterView class="page-layout" />
</div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow-x: hidden;
}

.app-wrapper {
  min-height: 100vh;
  width: 100%;
}

.page-layout {
  width: 100%;
  min-height: 100vh;
}
</style>