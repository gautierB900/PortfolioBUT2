<script setup lang="ts">
import { portfolioData } from '../data/portfolio'

const emit = defineEmits<{
  (e: 'toggle-drawer'): void
}>()

const toggleDrawer = () => {
  emit('toggle-drawer')
}
</script>

<template>
  <v-app-bar color="primary" elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </template>

    <v-toolbar-title>
      <div class="title-row">
        <span class="text-white title-name">
          {{ portfolioData.personal.prenom }} {{ portfolioData.personal.nom }}
        </span>
        <span class="text-white-70 title-mail">
          {{ portfolioData.personal.mail }}
        </span>
      </div>
    </v-toolbar-title>
  </v-app-bar>
</template>

<style scoped>
.title-row {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.title-name {
  font-weight: 600;
}

.title-mail {
  font-size: 0.8rem;
}

.text-white {
  color: #ffffff;
}

.text-white-70 {
  color: rgba(255, 255, 255, 0.7);
}
</style>
