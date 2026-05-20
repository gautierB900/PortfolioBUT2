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
    children: [
      { title: 'Description', route: '/technique/description' },
      { title: 'Bilan', route: '/technique/bilan' },
    ],
  },
  {
    title: 'Suivi de Projet',
    icon: 'mdi-clipboard-text',
    children: [
      { title: 'Description', route: '/suivi-projet/description' },
      { title: 'Bilan', route: '/suivi-projet/bilan' },
    ],
  },
  {
    title: 'Intégration en Entreprise',
    icon: 'mdi-briefcase',
    children: [
      { title: 'Description', route: '/integration-entreprise/description' },
      { title: 'Bilan', route: '/integration-entreprise/bilan' },
    ],
  },
])

const expandedItems = ref([0, 1, 2, 3])

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
      <template v-for="(section, idx) in sections" :key="`children-${idx}`">
        <v-list-item
          v-if="!section.children"
          :prepend-icon="section.icon"
          class="mb-1"
          @click="navigateTo(section.route)"
        >
          <v-list-item-title>{{ section.title }}</v-list-item-title>
        </v-list-item>
        <v-list-group v-if="section.children" :value="section.title">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="section.icon"
              class="mb-1"
            >
              {{ section.title }}
            </v-list-item>
          </template>

          <v-list-item
            v-for="child in section.children"
            :key="child.route"
            @click="navigateTo(child.route)"
            class="ml-6"
          >
            <v-list-item-title>{{ child.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>
