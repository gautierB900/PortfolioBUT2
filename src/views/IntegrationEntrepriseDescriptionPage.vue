<script setup lang="ts">
import { computed, ref } from 'vue'
import { portfolioData } from '../data/portfolio'
import SkillBilan from '../components/SkillBilan.vue'
import TraceCard from '../components/TraceCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const data = portfolioData.sections.integrationEntreprise

const activeTab = ref(data.generalSkills[0]?.name || '')

const isBilanTab = computed(() => activeTab.value === 'bilan')

const currentGeneral = computed(() => {
  if (isBilanTab.value) {
    return null
  }
  return data.generalSkills.find((skill) => skill.name === activeTab.value) ?? data.generalSkills[0]
})
</script>

<template>
  <div class="page-container">
   

    <h1 class="text-h3 mb-2">{{ data.title }}</h1>
    <p class="text-body2 text-grey mb-6">{{ data.resume }}</p>

    <v-card class="mb-4" elevation="1">
      <v-card-title class="text-h6">Rappel</v-card-title>
      <v-card-text>
        {{ data.resume }}
      </v-card-text>
    </v-card>

    <v-card class="general-shell mb-6" elevation="1">
      <v-tabs v-model="activeTab" color="primary" align-tabs="start" density="compact">
        <v-tab v-for="skill in data.generalSkills" :key="skill.name" :value="skill.name">
          {{ skill.name }}
        </v-tab>
        <v-tab value="bilan">Bilan & Analyse</v-tab>
      </v-tabs>

      <v-card-text>
        <div v-if="currentGeneral">
          <h2 class="text-h4 mb-3 general-title">{{ currentGeneral.name }}</h2>

          <div class="skills-capsules">
            <v-chip
              v-for="skill in currentGeneral.elementarySkills"
              :key="skill.name"
              :color="skill.color"
              text-color="white"
              class="font-weight-medium"
            >
              {{ skill.name }}
            </v-chip>
          </div>

          <div class="section-divider"></div>

          <div class="trace-section">
            <h3 class="text-h6 mb-3">Traces</h3>
            <div class="trace-list">
              <TraceCard
                v-for="(trace, idx) in currentGeneral.traces"
                :key="trace.titre"
                :trace="trace"
                :reverse="idx % 2 === 1"
              />
            </div>
          </div>

          <div class="section-divider"></div>

          <div class="elementary-section">
            <h3 class="text-h6 mb-3">Descriptif des savoir-faire elementaires</h3>
            <ul class="elementary-list">
              <li v-for="skill in currentGeneral.elementarySkills" :key="skill.name">
                <strong>{{ skill.name }}:</strong> {{ skill.description }}
              </li>
            </ul>
          </div>
        </div>

        <div v-else>
          <h2 class="text-h4 mb-3 general-title">Bilan & Analyse</h2>
          <div class="bilans-container">
            <SkillBilan v-for="(bilan, idx) in data.bilan" :key="idx" :bilan="bilan" />
          </div>
        </div>
      </v-card-text>
    </v-card>

    
  </div>
</template>

<style scoped>
.page-container {
  width: min(1500px, 98vw);
  margin: 0 auto;
}

h1 {
  color: #ffffff;
}

.general-title {
  color: #ffffff;
}

.general-shell {
  background-color: #1f1f1f;
  color: #ffffff;
}

.skills-capsules {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.trace-section {
  margin-bottom: 2rem;
}

.trace-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.elementary-list {
  margin: 0;
  padding-left: 1.25rem;
}

.elementary-list li {
  margin-bottom: 0.5rem;
}

.text-grey {
  color: rgba(255, 255, 255, 0.8) !important;
}

.section-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 1.5rem 0;
}

</style>
