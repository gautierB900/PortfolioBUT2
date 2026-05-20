<script setup lang="ts">
interface Trace {
  numero: string
  titre: string
  legende: string
  image?: string
}

defineProps<{
  trace: Trace
}>()
</script>

<template>
  <v-card class="trace-card mb-4" elevation="2">
    <v-card-title class="bg-primary text-white">
      <span class="font-weight-bold">Trace {{ trace.numero }}: {{ trace.titre }}</span>
    </v-card-title>
    <v-card-text class="pa-4">
      <div v-if="trace.image" class="mb-3">
        <v-img :src="trace.image" max-height="300" cover></v-img>
      </div>
      <p class="text-caption text-light mb-2">
        <strong>Légende:</strong> {{ trace.legende }}
      </p>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.trace-card {
  border-left: 4px solid #7b1e3a;
}

.text-light {
  color: rgba(255, 255, 255, 0.75);
}
</style>
