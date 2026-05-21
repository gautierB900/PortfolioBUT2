<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const sections = ref([
  {
    title: 'Accueil',
    icon: 'mdi-home',
    route: '/',
  },
  {
    title: 'Technique',
    icon: 'mdi-code-braces',
    route: '/technique/description',
  },
  {
    title: 'Suivi de Projet',
    icon: 'mdi-clipboard-text',
    route: '/suivi-projet/description',
  },
  {
    title: 'Intégration en Entreprise',
    icon: 'mdi-briefcase',
    route: '/integration-entreprise/description',
  },
])

const navigateTo = (route: string) => {
  router.push(route)
  drawer.value = false
}

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const drawer = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <v-list nav>
      <v-list-item
        v-for="(section, idx) in sections"
        :key="`section-${idx}`"
        :prepend-icon="section.icon"
        class="mb-1"
        @click="navigateTo(section.route)"
      >
        <v-list-item-title>{{ section.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>
