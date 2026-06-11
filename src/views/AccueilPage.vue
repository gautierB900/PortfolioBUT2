<script setup lang="ts">
</script>
 
<template>
  <div class="accueil-page"> 
    <!-- But du site : image à gauche, titre + texte à droite -->
    <v-card elevation="1" class="pa-4 mb-6">
      <div class="text-image-row image-left">
        <div class="image-col">
          <!-- TODO : remplacer le placeholder par <v-img src="image/NOM_DU_FICHIER.png" /> -->
          <v-img src="image/moi.jpg" height="220" ></v-img>
        </div>
        <div class="text-col">
          <h2 class="text-h5 mb-2">BELEY Gautier</h2>
          <p class="text-body2">
            Je suis BELEY Gautier et j'étudie actuellement en deuxième année de BUT Informatique à l'IUT Marie et Louis Pasteur à Belfort.
            Dans le cadre de ma formation, j'ai effectué un stage d'une durée de 10 semaines, du 7 avril au 12 juin 2026.
            J'ai effectué ce stage chez APRR, une société concession d'autoroutes.
            Donc ce site a pour but d'évoquer les savoir-faire que j'ai acquis durant le stage.
            <br>
            Ces savoir-faire s'articulent autour de 3 axes : <strong>Technique, Suivi de projet et Intégration & travail en entreprise</strong>.
          </p>
        </div>
      </div>
    </v-card>
 
    <!-- Contexte entreprise : texte à gauche, image à droite -->
    <v-card elevation="1" class="pa-4 mb-6">
      <h2 class="text-h5 mb-2">Description du contexte entreprise</h2>
      <div class="text-image-row">
        <div class="text-col">
          <p class="text-body2">
            <strong>APRR</strong> (Autoroutes Paris-Rhin-Rhône) est société concessionnaire d'autoroute, filiale de'Eiffage.
            Elle a été créée en 1961. C'est le deuxième groupe autoroutier en France et le quatrième d'Europe. J'ai effectué mon stage dans leur siège social à Saint-Apollinaire.
            <br><br>
            J'ai été affecté dans la direction des systèmes et opérations péages (DSOP). Plus particulièrement, dans le département études et éditions logiciels (DEEL). Dans ce département, j'ai intégré le service méthodes et contrats (SMC).
            Le service SMC est un service transverse aux différents services du département. DEEL va développer des applications destinées domaines péage, ressources humaines, la finance ou encore la sécurité et le trafic, le service SMC a pour mission d'accompagner ces équipes en y apportant son savoir faire et les méthodes du département.
            
            <br><br>
            Pendant mon stage, j'ai principalement travaillé avec <strong>GALLI David</strong>, mon tuteur, qui me confiait mes missions et portait la vision métier, <strong>CHHEAN Sokchy</strong>, technicien informatique en alternance, qui m'a accompagné tout au long du stage, aussi bien dans la compréhension du code que dans mon intégration au sein de l'entreprise. Sans oublier <strong>CHATILLON Frédéric</strong> en tant que chef de service SMC et pilote des activités au sein du département.
            <br><br>
            Pour mener à bien mes missions, je disposais d'un poste bureautique connecté au SI (système d'information) APRR (intranet, applications internes). J'ai dû effectuer des demandes d'accès pour pouvoir utiliser le dépôt de code partagé du projet sur Azure DevOps et pour obtenir les droits nécessaires à l'analyse de qualité de mon code sur le serveur SonarQube d'APRR. Les tests automatisés s'exécutaient quant à eux sur une machine virtuelle dédiée. La communication au sein de l'équipe passait par Teams, complétée par des points de suivi avec mon tuteur au fil du stage.
          </p>
        </div>
        <div class="image-col">
          <v-img src="image/aprr_logo.jpeg" height="450" ></v-img>
 
        </div>
      </div>
    </v-card>
 
    <!-- Organigramme : une seule image -->
    <v-card elevation="1" class="pa-4 mb-6">
      <h2 class="text-h5 mb-2">Organigramme</h2>
      <!-- TODO : remplacer le placeholder par <v-img src="image/NOM_DU_FICHIER.png" /> -->
      <v-img src="image/orga.jpg" height="500" ></v-img>
 
    </v-card>
 
    <!-- Contexte du stage -->
    <v-card elevation="1" class="pa-4 mb-6">
      <h2 class="text-h5 mb-2">Contexte du stage</h2>
      <p class="text-body2">
        Les missions principales de mon stage étaient d'automatiser des tests en C# sur MAESTRO, c'est une application interne APRR qui aide au pilotage des projets pour les chefs de projet chez APRR, avec le framework de l'entreprise, de faire des comptes rendus et des reportings sur le travail que j'ai réalisé et de faire du développement de pipeline. L'application que je devais tester, <strong>MAESTRO</strong>, est une application de gestion de projet utilisée en interne.
        <br><br>
        À mon arrivée, l'environnement de test était déjà existant et associé à MAESTRO. Cependant, il présentait plusieurs manques : aucune documentation n'accompagnait le projet, l'analyse de qualité de code SonarQube n'était plus utilisée depuis longtemps, et plusieurs écrans de l'application n'étaient pas encore couverts par des tests.
        <br><br>
        Mon travail a été de continuer le testing de l'application et d'adapter ce qui a été fait au changement sur le site. J'ai du écrire les cas de test puis les tests automatisés des écrans manquants, remettre en place et exploiter l'analyse SonarQube, et rédiger la documentation (technique et métier) qui faisait défaut. L'enjeu, pour le département, est d'imposer un socle de tests automatisés fiable avant la validation de chaque version d'une application.
        <br><br>
        Les principales technologies utilisées étaient Azure DevOps comme outil de collaboration et Visual Studio 2022 comme environnement de développement.
      </p>
    </v-card>
 
    <!-- Synthèse des savoir-faire (point 4 du cours) -->
    <v-card elevation="1" class="pa-4 mb-6">
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
        qui était générée en low-code particulièrement délicate à tester. Enfin, j'ai été amené à
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
  </div>
</template>
 
<style scoped>
.accueil-page {
  max-width: 1500px;
  margin: 0 auto;
}
 
h1,
h2 {
  color: #ffffff;
}
 
.accueil-page .text-body1,
.accueil-page .text-body2 {
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
}
 
/* Disposition texte + image */
.text-image-row {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 1.5rem;
  align-items: start;
}
 
.text-image-row.image-left {
  grid-template-columns: 1fr 1.6fr;
}
 
.text-col {
  min-width: 0;
}
 
.image-col {
  min-width: 0;
}
 
.aprr-logo {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}
 
/* Emplacement d'image vide */
.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 200px;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}
 
.organigramme-placeholder {
  min-height: 280px;
}
 
/* Liens colorés des savoir-faire */
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
 
/* Responsive : empile texte et image sur petits écrans */
@media (max-width: 900px) {
  .text-image-row,
  .text-image-row.image-left {
    grid-template-columns: 1fr;
  }
}
</style>