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
        Pendant mon stage, j'ai principalement travaillé avec <strong>GALLI David</strong>, mon tuteur, qui me confiait mes missions, portait la vision métier et validait mes cas de test ; <strong>CHHEAN Sokchy</strong>, technicien informatique en alternance, qui m'a accompagné tout au long du stage, aussi bien dans la compréhension du code que dans mon intégration au sein de l'entreprise ; et <strong>CHATILLON Frédéric</strong>, chef du département SMC.
      </p>
      <br>
      <p class="text-body2">
        Pour mener à bien mes missions, je disposais d'un poste connecté au système informatique d'APRR (intranet, applications internes). J'ai dû effectuer des demandes d'accès pour pouvoir utiliser le dépôt de code partagé du projet sur Azure DevOps et l'instance SonarQube d'analyse de qualité. Les tests automatisés s'exécutaient quant à eux sur une machine virtuelle dédiée. La communication au sein de l'équipe passait par Teams, complétée par des points de suivi avec mon tuteur au fil du stage.
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
        Les missions principales de mon stage étaient d'automatiser des tests en C# avec le framework de l'entreprise, et d'assurer un reporting sur la qualité des livrables du département. L'application que je devais tester, <strong>MAESTRO</strong>, est une application de gestion de projet utilisée en interne.
        <br>
        <br>
        À mon arrivée, l'environnement de test était déjà existant et associé à MAESTRO. Cependant, il présentait plusieurs manques : aucune documentation n'accompagnait le projet, l'analyse de qualité de code SonarQube n'était plus utilisée depuis longtemps, et plusieurs écrans de l'application n'étaient pas encore couverts par des tests.
        <br>
        <br>
        Mon travail a donc consisté à compléter cet existant : écrire les cas de test puis les tests automatisés des écrans manquants, remettre en place et exploiter l'analyse SonarQube, et rédiger la documentation (technique et métier) qui faisait défaut. L'enjeu, pour le département, est d'imposer un socle de tests automatisés fiable avant la validation de chaque version d'une application.
        <br>
        <br>
        Les principales technologies utilisées étaient Azure DevOps comme plateforme de développement et de gestion de projet, et Visual Studio 2022 comme environnement de développement.
      </p>
    </v-card>
 
    <br>
 
    <v-card elevation="1" class="pa-4 h-100">
      <h2 class="text-h5 mb-2">Les savoir-faire mis en œuvre</h2>
      <p class="text-body2 mb-2">
        Mon stage m'a amené à mobiliser cinq savoir-faire généraux, répartis sur les trois axes du portfolio.
      </p>
      <p class="text-body2 mb-2">
        Sur le plan <strong>technique</strong>, j'ai d'abord appris à
        <RouterLink to="/technique/description" class="sf-link sf-tech">concevoir un cas de test répondant à un besoin métier</RouterLink>,
        c'est-à-dire traduire les besoins exprimés par le métier en cas de test structurés et exploitables.
        J'ai ensuite mis cette conception en pratique en apprenant à
        <RouterLink to="/technique/description" class="sf-link sf-tech">automatiser des tests de bout en bout pour une application web</RouterLink>,
        sur une application générée en low-code particulièrement délicate à tester. Enfin, j'ai été amené à
        <RouterLink to="/technique/description" class="sf-link sf-tech">garantir la qualité du code par l'analyse statique</RouterLink>,
        en remettant en service et en exploitant l'analyse SonarQube du projet.
      </p>
      <p class="text-body2 mb-2">
        Sur le plan du <strong>suivi de projet</strong>, j'ai développé ma capacité à
        <RouterLink to="/suivi-projet/description" class="sf-link sf-suivi">documenter et suivre mon travail</RouterLink>,
        en produisant la documentation qui manquait au projet et en tenant à jour le suivi de mes tâches.
      </p>
      <p class="text-body2 mb-2">
        Enfin, sur le plan de l'<strong>intégration en entreprise</strong>, j'ai appris à
        <RouterLink to="/integration-entreprise/description" class="sf-link sf-integ">m'intégrer dans une équipe de développement</RouterLink>,
        en travaillant sur un dépôt de code partagé et en communiquant les problèmes rencontrés à l'équipe.
      </p>
      <p class="text-body2">
        Chacun de ces savoir-faire est détaillé, à travers des traces concrètes de mon travail, dans les trois pages correspondantes.
      </p>
    </v-card>
 
    <br>
     
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
  width: min(1500px, 98vw);
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
 
.sf-link {
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.15s ease;
}
 
.sf-link:hover {
  text-decoration: underline;
  opacity: 0.85;
}
 
.sf-tech {
  color: #4ECDC4;
}
 
.sf-suivi {
  color: #FFB84D;
}
 
.sf-integ {
  color: #9B8CFF;
}
</style>