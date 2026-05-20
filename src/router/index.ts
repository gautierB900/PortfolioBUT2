import { createRouter, createWebHistory } from 'vue-router'

// Views
import AccueilPage from '../views/AccueilPage.vue'
import TechniqueDescriptionPage from '../views/TechniqueDescriptionPage.vue'
import TechniqueBilanPage from '../views/TechniqueBilanPage.vue'
import SuiviProjetDescriptionPage from '../views/SuiviProjetDescriptionPage.vue'
import SuiviProjetBilanPage from '../views/SuiviProjetBilanPage.vue'
import IntegrationEntrepriseDescriptionPage from '../views/IntegrationEntrepriseDescriptionPage.vue'
import IntegrationEntrepriseBilanPage from '../views/IntegrationEntrepriseBilanPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilPage,
    },
    {
      path: '/technique/description',
      name: 'techniqueDescription',
      component: TechniqueDescriptionPage,
    },
    {
      path: '/technique/bilan',
      name: 'techniqueBilan',
      component: TechniqueBilanPage,
    },
    {
      path: '/suivi-projet/description',
      name: 'suiviProjetDescription',
      component: SuiviProjetDescriptionPage,
    },
    {
      path: '/suivi-projet/bilan',
      name: 'suiviProjetBilan',
      component: SuiviProjetBilanPage,
    },
    {
      path: '/integration-entreprise/description',
      name: 'integrationEntrepriseDescription',
      component: IntegrationEntrepriseDescriptionPage,
    },
    {
      path: '/integration-entreprise/bilan',
      name: 'integrationEntrepriseBilan',
      component: IntegrationEntrepriseBilanPage,
    },
  ],
})

export default router
