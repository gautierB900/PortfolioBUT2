<script setup lang="ts">
interface SkillBilan {
  skillName: string
  context: string
  learningContext: string
  difficulty: string
  level: string
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
      <div class="mb-3">
        <h4>Contexte d'utilisation</h4>
        <p>{{ bilan.context }}</p>
      </div>
      <div class="mb-3">
        <h4>Contexte d'apprentissage</h4>
        <p>{{ bilan.learningContext }}</p>
      </div>
      <div class="mb-3">
        <h4>Difficulté</h4>
        <v-chip :color="getDifficultyColor(bilan.difficulty)" text-color="white" size="small">
          {{ bilan.difficulty }}
        </v-chip>
      </div>
      <div>
        <h4>Niveau d'expertise</h4>
        <v-chip :color="getLevelColor(bilan.level)" text-color="white" size="small">
          {{ bilan.level }}
        </v-chip>
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
</style>
