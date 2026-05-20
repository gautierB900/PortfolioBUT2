<script setup lang="ts">
import { portfolioData } from '../data/portfolio'
import { useRouter } from 'vue-router'

const router = useRouter()

const sections = [
  {
    title: 'Technique',
    icon: 'mdi-code-braces',
    description: 'Savoir-faire techniques et compétences en développement',
    route: '/technique/description',
  },
  {
    title: 'Suivi de Projet',
    icon: 'mdi-clipboard-text',
    description: 'Gestion de projet et méthodologies',
    route: '/suivi-projet/description',
  },
  {
    title: 'Intégration en Entreprise',
    icon: 'mdi-briefcase',
    description: 'Expérience professionnelle et apprentissages',
    route: '/integration-entreprise/description',
  },
]
</script>

<template>
  <div class="accueil-page">
    <v-card elevation="0" class="mb-6">
      <v-card-text class="pa-8">
        <h1 class="text-h3 mb-4">Bienvenue sur mon Portfolio</h1>
        <p class="text-body1 mb-2">
          Je suis <strong>{{ portfolioData.personal.prenom }} {{ portfolioData.personal.nom }}</strong>
        </p>
        <p class="text-body1 mb-4">
          Email: <v-chip label size="small">{{ portfolioData.personal.mail }}</v-chip>
        </p>
        <p class="text-body2">
          Ce portfolio présente mes savoir-faire, mes projets et mon expérience professionnelle.
          Explorez les différentes sections pour découvrir mes compétences et réalisations.
        </p>
      </v-card-text>
    </v-card>

   
        <v-card elevation="1" class="pa-4 h-100">
          <h2 class="text-h5 mb-2">But du site</h2>
          <p class="text-body2">
            Ce site regroupe les elements cles de mon stage et de ma formation. Il met en avant
            mes competences, mes missions et les apprentissages realises durant l'annee.
          </p>
        </v-card>
  
        <br>
 

        <v-card elevation="1" class="pa-4 h-100">
          <h2 class="text-h5 mb-2">Presentation de l'entreprise</h2>
          <p class="text-body2">
            Presentation rapide de l'entreprise d'accueil : secteur, activite principale et
            role de l'equipe dans laquelle j'ai travaille. A completer avec les informations
            de votre entreprise.
          </p>
        </v-card>

        <br>

    <v-row class="mb-6" dense>
      <v-col cols="12" md="6">
        <v-card elevation="1" class="pa-4 h-100">
          <h2 class="text-h5 mb-2">Organigramme</h2>
          <p class="text-body2 mb-2">
            Vue d'ensemble de l'organisation de l'entreprise et de mon positionnement.
          </p>
          <ul class="organigramme">
            <li>Direction / encadrement</li>
            <li>Service ou pole d'accueil</li>
            <li>Equipe projet</li>
            <li>Mon role / stage</li>
          </ul>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="1" class="pa-4 h-100">
          <h2 class="text-h5 mb-2">Contexte du stage</h2>
          <p class="text-body2">
            Contexte, objectifs et missions principales du stage. Preciser la duree, les
            outils utilises et les enjeux du projet.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-card elevation="1" class="pa-4 mb-6">
      <h2 class="text-h5 mb-2">Les 3 grandes parties</h2>
      <p class="text-body2 mb-3">
        Le portfolio est organise autour de trois axes : Technique, Suivi de projet et
        Integration en entreprise. Chaque partie detaille les competences, les traces et
        les bilans associes.
      </p>
    </v-card>

    <h2 class="text-h4 mb-4">Sections Principales</h2>

    <v-row>
      <v-col v-for="section in sections" :key="section.title" cols="12" md="6" lg="4">
        <v-card hoverable @click="router.push(section.route)" class="h-100 card-hover">
          <v-card-item>
            <template v-slot:prepend>
              <v-avatar :icon="section.icon" color="primary" size="large"></v-avatar>
            </template>
            <v-card-title>{{ section.title }}</v-card-title>
            <v-card-subtitle>{{ section.description }}</v-card-subtitle>
          </v-card-item>
          <v-card-actions>
            <v-btn color="primary" variant="outlined">
              Découvrir
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.accueil-page {
  max-width: 1200px;
  margin: 0 auto;
}

.card-hover {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  color: #ffffff;
}

.accueil-page .text-body1,
.accueil-page .text-body2 {
  color: rgba(255, 255, 255, 0.9);
}

.accueil-page .v-card-title {
  color: #ffffff;
}

.accueil-page .v-card-subtitle {
  color: rgba(255, 255, 255, 0.7);
}

.organigramme {
  padding-left: 1.2rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
}

.organigramme li {
  margin-bottom: 0.25rem;
}
</style>
