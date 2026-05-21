<script setup lang="ts">
interface Trace {
  numero: string
  titre: string
  legende: string
  image?: string
}

defineProps<{
  trace: Trace
  reverse?: boolean
}>()
</script>

<template>
  <v-card class="trace-card" elevation="2">
    <div class="trace-row" :class="{ 'is-reversed': reverse }">
      <div class="trace-media">
        <v-img v-if="trace.image" :src="trace.image" height="180" cover></v-img>
        <div v-else class="trace-media-placeholder">
          <v-icon size="28">mdi-image-outline</v-icon>
          <span>Aucune image</span>
        </div>
      </div>
      <div class="trace-content">
        <h4 class="trace-title">Trace {{ trace.numero }}: {{ trace.titre }}</h4>
        <p class="trace-legend">
          <strong>Legende:</strong> {{ trace.legende }}
        </p>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.trace-card {
  border-left: 4px solid #7b1e3a;
  background-color: #242424;
  color: #ffffff;
}

.trace-row {
  display: grid;
  grid-template-columns: minmax(180px, 1fr) 1.2fr;
  gap: 1.25rem;
  padding: 1rem 1.25rem;
  align-items: center;
}

.trace-row.is-reversed {
  grid-template-columns: 1.2fr minmax(180px, 1fr);
}

.trace-row.is-reversed .trace-media {
  order: 2;
}

.trace-row.is-reversed .trace-content {
  order: 1;
}

.trace-media {
  border-radius: 8px;
  overflow: hidden;
  background-color: #1b1b1b;
}

.trace-media-placeholder {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.trace-title {
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.trace-legend {
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 900px) {
  .trace-row,
  .trace-row.is-reversed {
    grid-template-columns: 1fr;
  }

  .trace-row.is-reversed .trace-media,
  .trace-row.is-reversed .trace-content {
    order: initial;
  }
}
</style>
