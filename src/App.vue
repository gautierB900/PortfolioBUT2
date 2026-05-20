<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import SidebarNav from './components/SidebarNav.vue'

const drawer = ref(false)
</script>

<template>
  <v-app>
    <HeaderNav @toggle-drawer="drawer = !drawer" />
    <SidebarNav v-model="drawer" />
    <v-main>
      <v-container fluid class="pa-4">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
