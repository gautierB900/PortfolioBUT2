<script setup lang="ts">
import { portfolioData } from '../data/portfolio'
import SkillBilan from '../components/SkillBilan.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const data = portfolioData.sections.integrationEntreprise
</script>

<template>
  <div class="page-container">
    <div class="mb-6">
      <v-btn color="primary" variant="outlined" @click="router.back()" prepend-icon="mdi-arrow-left">
        Retour
      </v-btn>
    </div>

    <h1 class="text-h3 mb-2">{{ data.title }} - Bilan & Analyse</h1>
    <p class="text-body2 text-grey mb-6">
      Analyse des savoir-faire généraux et de votre progression dans ces domaines.
    </p>

    <!-- Bilans -->
    <div class="bilans-container">
      <SkillBilan v-for="(bilan, idx) in data.bilan" :key="idx" :bilan="bilan" />
    </div>

    <!-- Navigation -->
    <div class="mt-6 d-flex justify-space-between">
      <v-btn color="primary" variant="outlined" @click="router.push('/integration-entreprise/description')">
        Voir la Description
      </v-btn>
      <v-btn color="primary" variant="outlined" @click="router.back()">
        Retour
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  color: #7b1e3a;
}

.bilans-container {
  margin-top: 2rem;
}
</style>
