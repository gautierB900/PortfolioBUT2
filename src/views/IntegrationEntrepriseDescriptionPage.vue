<script setup lang="ts">
import { ref } from 'vue'
import { portfolioData } from '../data/portfolio'
import SkillBilan from '../components/SkillBilan.vue'
import TraceCard from '../components/TraceCard.vue'
import SkillsList from '../components/SkillsList.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const data = portfolioData.sections.integrationEntreprise

const scrollToSection = (sectionId: string) => {
  const target = document.getElementById(sectionId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const activeTab = ref('trace')

const setTab = (value: string) => {
  activeTab.value = value
  if (value === 'trace') {
    scrollToSection('trace-section')
  } else {
    scrollToSection('bilan-section')
  }
}
</script>

<template>
  <div class="page-container">
    <div class="mb-6">
      <v-btn color="primary" variant="outlined" @click="router.back()" prepend-icon="mdi-arrow-left">
        Retour
      </v-btn>
    </div>

    <h1 class="text-h3 mb-2">{{ data.title }} - Description</h1>
    <p class="text-body2 text-grey mb-6">{{ data.resume }}</p>

    <v-card class="mb-4" elevation="1">
      <v-card-title class="text-h6">Rappel</v-card-title>
      <v-card-text>
        {{ data.resume }}
      </v-card-text>
    </v-card>

    <v-card class="mb-6" elevation="1">
      <v-tabs
        v-model="activeTab"
        color="primary"
        align-tabs="start"
        density="compact"
        @update:modelValue="setTab"
      >
        <v-tab value="trace">Trace</v-tab>
        <v-tab value="bilan">Bilan & Evaluation</v-tab>
      </v-tabs>
    </v-card>

    <div v-show="activeTab === 'trace'" id="trace-section">
      <!-- Skills List -->
      <SkillsList :skills="data.skills" />

      <!-- Trace Card -->
      <TraceCard :trace="data.trace" />

      <!-- Description Générale -->
      <v-card class="mb-4" elevation="1">
        <v-card-title class="bg-light-grey">Descriptif Général</v-card-title>
        <v-card-text class="pa-4">
          {{ data.trace.descGeneral }}
        </v-card-text>
      </v-card>

      <!-- Skills Descriptions -->
      <h3 class="text-h5 mb-3">Détail des Savoir-faire</h3>
      <div v-for="(skill, idx) in data.skills" :key="idx" class="mb-4">
        <v-card elevation="0" class="border-left">
          <v-card-item>
            <template v-slot:prepend>
              <v-chip :color="skill.color" text-color="white">
                {{ skill.name }}
              </v-chip>
            </template>
          </v-card-item>
          <v-card-text>
            {{ data.trace.descSkills[skill.name] || 'Description non disponible' }}
          </v-card-text>
        </v-card>
      </div>
    </div>

    <div v-show="activeTab === 'bilan'" id="bilan-section" class="mt-6">
      <h3 class="text-h5 mb-3">Bilan & Evaluation</h3>
      <div class="bilans-container">
        <SkillBilan v-for="(bilan, idx) in data.bilan" :key="idx" :bilan="bilan" />
      </div>
    </div>

    <!-- Navigation -->
    <div class="mt-6 d-flex justify-space-between">
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
  color: #ffffff;
}

h3 {
  color: #ffffff;
}

.border-left {
  border-left: 4px solid #7b1e3a;
}

.bg-light-grey {
  background-color: #1f1f1f;
  color: #ffffff;
}

.text-grey {
  color: rgba(255, 255, 255, 0.8) !important;
}
</style>
