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
        <h1 class="text-h3 mb-4">Bienvenue sur le Portfolio de BELEY Gautier</h1>
      </v-card-text>
    </v-card>


    <v-card elevation="1" class="pa-4 h-100">
      <h2 class="text-h5 mb-2">But du site</h2>
      <p class="text-body2">
        Le site a pour but d'évoquer mes savoir-faire acquis durant le stage de deuxième année de deuxième année de BUT Informatique à l'IUT Marie et Louis Pasteur à Belort.
      Les savoir-faire énumérés sur ce site s'articulent autour de 3 axes : <strong>Technique, Suivi de projet et Intégration et travail en entreprise</strong>.
      J'ai effectué ce stage chez APRR qui est une filiale de Eiffage à Saint-Apollinaire. 
      Ce stage s'est fait sur une durée de 10 semaines, du 7 avril au 12 juin 2026.
      </p>
    </v-card>

    <br>


    <v-card elevation="1" class="pa-4 h-100">
      <h2 class="text-h5 mb-2">Description du contexte entreprise du stage </h2>
      <p class="text-body2">
        <strong>APRR</strong> (Autoroutes Paris-Rhin-Rhône) est une filiale d'Eiffage, une concession d'autoroute.
        Elle a été créé en 1961. C'est le deuxième groupe autoroutier en France et le quatrième d'Europe.
        <br>
        <br>
        Je prends place dans le département des services méthodes et contrats (SMC) qui se situe dans le départment études et éditions logiciels (DEEL) qui est lui dans le département des systèmes et opérations péages (DSOP).
        La mission du département SMC est de faire des tests automatisés sur des applications de l'entreprise. Le département a pour but d'imposer un minimum de tests automatisés pour la validation d'une version d'application.
        <br>
        <br>
        Pendant mon stage, j'ai notamment travaillé avec <strong>GALLI David</strong>, qui est mon tuteur, <strong>CHHEAN Sokchy</strong>, qui est un technicien informatique en alternance, et <strong>CHATILLON Frédéric</strong>, qui est le chef du département SMC.
      </p>
    </v-card>

    <br>

    <v-card elevation="1" class="pa-4 h-100">
      <h2 class="text-h5 mb-2">Organigramme</h2>
      <p class="text-body2 mb-2">
        Voici l'organigramme d'APRR, en commençant de la présidente jusqu'à mon département : 
      </p>
      <!--TODO mettre les images de l'organigramme-->
    </v-card>

    <br>

    <v-card elevation="1" class="pa-4 h-100">
      <h2 class="text-h5 mb-2">Contexte du stage</h2>
      <p class="text-body2">
        Les missions principales de mon stage sont d'automatisés des tests en c# avec le Framework de l'entreprise et le reporting sur la qualités des livrables du département.
        Les technologies utilisées sont Azure DevOps comme plateforme de développement, Visual Studio 2022 comme IDE.
      </p>
    </v-card>

    <br>

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
  width: min(1400px, 96vw);
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
