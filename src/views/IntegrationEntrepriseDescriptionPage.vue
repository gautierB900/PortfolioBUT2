<script setup lang="ts">
import { computed, ref } from 'vue'
import { portfolioData } from '../data/portfolio'
import SkillBilan from '../components/SkillBilan.vue'
import TraceCard from '../components/TraceCard.vue'
 
const data = portfolioData.sections.integrationEntreprise
 
// Liste plate de toutes les traces, en gardant le savoir-faire général parent
const flatTraces = computed(() =>
  data.generalSkills.flatMap((skill) =>
    skill.traces.map((trace) => ({ trace, skill })),
  ),
)
 
// Onglet actif : index de trace (string) ou 'bilan'
const activeTab = ref<string>('0')
 
const isBilanTab = computed(() => activeTab.value === 'bilan')
 
const current = computed(() => {
  if (isBilanTab.value) return null
  const idx = Number(activeTab.value)
  return flatTraces.value[idx] ?? flatTraces.value[0]
})
 
// Chips : uniquement les savoir-faire élémentaires démontrés sur la trace affichée
const currentChips = computed(() => {
  if (!current.value) return []
  const trace = current.value.trace
  const skill = current.value.skill
  const demontres = (trace.descriptifSavoirFaire ?? []).map((d) => d.titre)
  // On garde l'ordre et les couleurs des elementarySkills, filtrés sur ceux démontrés
  return skill.elementarySkills.filter((es) => demontres.includes(es.name))
})
</script>
 
<template>
  <div class="page-container">
    <h1 class="text-h3 mb-2">{{ data.title }}</h1>
    <p class="text-body2 text-grey mb-6">{{ data.resume }}</p>
 
    <v-card class="general-shell mb-6" elevation="1">
      <!-- Barre d'onglets : une trace par onglet, puis le bilan -->
      <v-tabs v-model="activeTab" color="primary" align-tabs="start" density="compact" show-arrows>
        <v-tab
          v-for="(item, idx) in flatTraces"
          :key="item.trace.numero"
          :value="String(idx)"
        >
          Trace {{ item.trace.numero }}
        </v-tab>
        <v-tab value="bilan">Bilan &amp; Analyse</v-tab>
      </v-tabs>
 
      <v-card-text>
        <!-- Affichage d'une trace -->
        <div v-if="current">
          <!-- Titre = nom de la trace -->
          <h2 class="text-h5 mb-3 general-title">Trace {{ current.trace.numero }} : {{ current.trace.titre }}</h2>
 
          <div class="sf-line">
            <span class="sf-line-label">Savoir-faire élémentaires :</span>
            <v-chip
              v-for="skill in currentChips"
              :key="skill.name"
              :color="skill.color"
              text-color="white"
              size="small"
              class="font-weight-medium"
            >
              {{ skill.name }}
            </v-chip>
          </div>
 
          <div class="section-divider"></div>
 
          <TraceCard :trace="current.trace" />
        </div>
 
        <!-- Affichage du bilan -->
        <div v-else>
          <h2 class="text-h4 mb-3 general-title">Bilan &amp; Analyse</h2>
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
  width: min(1600px, 96vw);
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
 
.sf-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
 
.sf-line-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin-right: 0.25rem;
}
 
.bilans-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
 
.text-grey {
  color: rgba(255, 255, 255, 0.8) !important;
}
 
.section-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 1.5rem 0;
}
</style>