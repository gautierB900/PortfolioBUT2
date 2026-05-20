<script setup lang="ts">

interface Skill {
  name: string
  color: string
}

const props = defineProps<{
  skills: Skill[]
}>()

</script>

<template>
  <div class="skills-container">
    <h3 class="mb-3 skills-title">Savoir-faire élémentaires</h3>
    <div class="d-flex flex-wrap gap-2">
      <v-chip
        v-for="skill in skills"
        :key="skill.name"
        :color="skill.color"
        text-color="white"
        class="font-weight-medium"
      >
        {{ skill.name }}
      </v-chip>
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  background-color: #1f1f1f;
  color: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.skills-title {
  color: #ffffff;
}
</style>
