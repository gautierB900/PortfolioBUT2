<script setup lang="ts">
import { ref } from 'vue'
 
interface DescriptifSavoirFaire {
  titre: string
  texte: string
}
 
interface Trace {
  numero: string
  titre: string
  legende: string
  image?: string
  descriptionGenerale?: string
  descriptifSavoirFaire?: DescriptifSavoirFaire[]
}
 
defineProps<{
  trace: Trace
  reverse?: boolean
}>()
 
const zoomOpen = ref(false)
 
function openZoom() {
  zoomOpen.value = true
}
function closeZoom() {
  zoomOpen.value = false
}
</script>
 
<template>
  <v-card class="trace-card" elevation="2">
    <div class="trace-row" :class="{ 'is-reversed': reverse }">
      <div class="trace-media">
        <div v-if="trace.image" class="trace-img-wrapper" @click="openZoom">
          <v-img :src="trace.image" cover></v-img>
          <div class="zoom-hint">
            <v-icon size="18">mdi-magnify-plus-outline</v-icon>
            <span>Agrandir</span>
          </div>
        </div>
        <div v-else class="trace-media-placeholder">
          <v-icon size="28">mdi-image-outline</v-icon>
          <span>Aucune image</span>
        </div>
        <p class="trace-legend">{{ trace.legende }}</p>
      </div>
      <div class="trace-content">
        <h4 class="trace-title">Trace {{ trace.numero }} : {{ trace.titre }}</h4>
 
        <p
          v-if="trace.descriptionGenerale"
          class="trace-desc"
          v-html="trace.descriptionGenerale"
        ></p>
 
        <div v-if="trace.descriptifSavoirFaire && trace.descriptifSavoirFaire.length" class="sf-block">
          <div
            v-for="sf in trace.descriptifSavoirFaire"
            :key="sf.titre"
            class="sf-item"
          >
            <h5 class="sf-title">{{ sf.titre }}</h5>
            <p class="sf-text" v-html="sf.texte"></p>
          </div>
        </div>
      </div>
    </div>
  </v-card>
 
  <!-- Lightbox : image agrandie -->
  <v-overlay
    v-model="zoomOpen"
    class="zoom-overlay"
    @click="closeZoom"
  >
    <div class="zoom-content" @click.stop>
      <v-btn
        icon="mdi-close"
        variant="text"
        color="white"
        class="zoom-close"
        @click="closeZoom"
      ></v-btn>
      <img :src="trace.image" :alt="trace.titre" class="zoom-img" @click="closeZoom" />
      <p class="zoom-caption">{{ trace.legende }}</p>
    </div>
  </v-overlay>
</template>
 
<style scoped>
.trace-card {
  border-left: 4px solid #7b1e3a;
  background-color: #242424;
  color: #ffffff;
}
 
.trace-row {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) 1.4fr;
  gap: 1.5rem;
  padding: 1.25rem 1.5rem;
  align-items: start;
}
 
.trace-row.is-reversed {
  grid-template-columns: 1.4fr minmax(280px, 1fr);
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
  position: sticky;
  top: 1rem;
}
 
.trace-img-wrapper {
  position: relative;
  cursor: zoom-in;
}
 
.zoom-hint {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.75rem;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
 
.trace-img-wrapper:hover .zoom-hint {
  opacity: 1;
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
 
.trace-legend {
  margin: 0;
  padding: 0.5rem 0.75rem;
  font-size: 0.82rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.7);
  background-color: #1b1b1b;
}
 
.trace-title {
  margin: 0 0 0.75rem;
  font-size: 1.15rem;
  font-weight: 700;
}
 
.trace-desc {
  margin: 0 0 1rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.5;
}
 
.sf-block {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
 
.sf-item {
  background-color: #1f1f1f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
}
 
.sf-title {
  margin: 0 0 0.4rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
}
 
.sf-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.5;
  font-size: 0.92rem;
}
 
/* Coloration inline des savoir-faire dans le texte */
.trace-content :deep(.c-red) {
  color: #FF6B6B;
}
.trace-content :deep(.c-teal) {
  color: #4ECDC4;
}
.trace-content :deep(.c-orange) {
  color: #FFB84D;
}
.trace-content :deep(.c-purple) {
  color: #9B8CFF;
}
 
/* Lightbox */
.zoom-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
 
.zoom-overlay :deep(.v-overlay__scrim) {
  background: rgba(0, 0, 0, 0.85);
  opacity: 1 !important;
}
 
.zoom-content {
  position: relative;
  max-width: 92vw;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 
.zoom-close {
  position: absolute;
  top: -3rem;
  right: 0;
}
 
.zoom-img {
  max-width: 92vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 6px;
  cursor: zoom-out;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}
 
.zoom-caption {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  font-style: italic;
  text-align: center;
  max-width: 80ch;
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
 
  .trace-media {
    position: static;
  }
}
</style>