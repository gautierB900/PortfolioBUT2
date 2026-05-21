<script setup lang="ts">
interface SkillBilan {
  skillName: string
  elementaryDetails: Array<{
    name: string
    context: string
    learningContext: string
    difficulty: string
  }>
  context: string
  learningContext: string
  difficulty: string
  level: string
  levelBefore?: string
  levelAfter?: string
  levelBeforeText?: string
  levelAfterText?: string
}

defineProps<{
  bilan: SkillBilan
}>()

const getDifficultyColor = (difficulty: string) => {
  const colors: Record<string, string> = {
    'Faible': 'green',
    'Moyen': 'orange',
    'Difficile': 'red',
  }
  return colors[difficulty] || 'grey'
}

const getLevelColor = (level: string) => {
  const colors: Record<string, string> = {
    'Mauvais': 'red',
    'Moyen': 'orange',
    'Bon': 'primary',
    'Excellent': 'green',
  }
  return colors[level] || 'grey'
}
</script>

<template>
  <v-card class="skill-bilan-card mb-3" elevation="1">
    <v-card-title class="bg-primary text-white">
      {{ bilan.skillName }}
    </v-card-title>
    <v-card-text class="pa-4">
        <div class="mb-4">
          <h4>Savoir-faire elementaires</h4>
          <div class="elementary-grid">
            <div
              v-for="(detail, idx) in bilan.elementaryDetails"
              :key="`${detail.name}-${idx}`"
              class="elementary-card"
            >
              <h5 class="elementary-title">{{ detail.name }}</h5>
              <p class="elementary-item">
                <strong>Contexte d'utilisation:</strong> {{ detail.context }}
              </p>
              <p class="elementary-item">
                <strong>Contexte d'apprentissage:</strong> {{ detail.learningContext }}
              </p>
              <p class="elementary-item">
                <strong>Difficulte:</strong> {{ detail.difficulty }}
              </p>
            </div>
          </div>
        </div>
      <div class="mb-3">
        <h4>Niveau d'expertise</h4>
        <div class="level-compare">
          <div class="level-block" v-if="bilan.levelBefore || bilan.levelBeforeText">
            <div class="level-label">Avant</div>
            <div class="level-badge-line" v-if="bilan.levelBefore">
              <span class="level-pill">Niveau</span>
              <v-chip :color="getLevelColor(bilan.levelBefore)" text-color="white" size="small">
                {{ bilan.levelBefore }}
              </v-chip>
            </div>
            <p v-if="bilan.levelBeforeText" class="level-text">
              {{ bilan.levelBeforeText }}
            </p>
          </div>

          <div class="level-block">
            <div class="level-label">Apres</div>
            <div class="level-badge-line">
              <span class="level-pill">Niveau</span>
              <v-chip :color="getLevelColor(bilan.levelAfter || bilan.level)" text-color="white" size="small">
                {{ bilan.levelAfter || bilan.level }}
              </v-chip>
            </div>
            <p v-if="bilan.levelAfterText" class="level-text">
              {{ bilan.levelAfterText }}
            </p>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.skill-bilan-card {
  border-top: 3px solid #7b1e3a;
}

h4 {
  color: #7b1e3a;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.elementary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
}

.elementary-card {
  background-color: #1f1f1f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.75rem;
}

.elementary-title {
  margin: 0 0 0.5rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
}

.elementary-item {
  margin: 0 0 0.35rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.level-compare {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.level-block {
  background-color: #1f1f1f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.75rem;
}

.level-label {
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.level-badge-line {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background-color: rgba(123, 30, 58, 0.18);
  border: 1px solid rgba(123, 30, 58, 0.35);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
}

.level-pill {
  font-weight: 600;
}

.level-text {
  margin: 0.6rem 0 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
}
</style>
