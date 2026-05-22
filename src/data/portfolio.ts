export const portfolioData = {
  personal: {
    nom: 'Beley ',
    prenom: 'Gautier',
    mail: 'gautier.beley@edu.univ-fcomte.fr',
  },
  sections: {
    technique: {
      title: ' Savoir-faire Techniques',
      resume: 'Cette section présente vos savoir-faire techniques acquis lors de votre formation et expériences.',
      generalSkills: [
        {
          name: 'Concevoir un cas de test répondant à un besoin métier',
          elementarySkills: [
            {
              name: 'Rédiger un cas de test avec la bonne norme',
              color: '#FF6B6B',
              description: 'Choisir des sélecteurs robustes pour cibler les éléments de l’interface.',
            },
            {
              name: 'Créer un Test Plan via un cas de test',
              color: '#4ECDC4',
              description: 'Écrire des parcours utilisateurs clairs (connexion, navigation, erreurs).',
            },
          ],
          traces: [
            {
              numero: '1',
              titre: 'Cas de teste au formalisme Azure DevOps',
              legende: 'J\'ai rédigé ce cas de test après discussion avec le métier et après analyse des fonctionnalité du site. Un cas de test représente un chemin utilisateur, il va ensuite représenter un test.',
              image:'../public/image/TraceCasDeTest.png'

            },
            {
              numero: '2',
              titre: 'Création des tests plans et implémentation des cas de test',
              legende: 'J\ai créé des Tests Plans pour pouvoir rassembler les cas de test et créer des campagnes de test par version. Cela a pour but de créer un historique des anciens tests effectués',
              image:'../public/image/TraceTestPlans.png'
            },
          ],
        },
        {
          name: 'Concevoir des tests de bout en bout pour une application web',
          elementarySkills: [
            {
              name: 'Savoir utiliser le framework de l\'entreprise',
              color: '#96CEB4',
              description: 'Structurer l’UI en composants cohérents et maintenables.',
            },
            {
              name: 'Créer des méthodes de tests Selenium',
              color: '#C7CEEA',
              description: 'Mettre en place une navigation claire et hiérarchisée.',
            },
            {
              name: 'Journaliser son code',
              color: '#C7CEEA',
              description: 'Mettre en place une navigation claire et hiérarchisée.',
            },
          ],
          traces: [
            {
              numero: '3',
              titre: 'Méthodes de test en c# via le framework de l\'entreprise',
              legende: 'L\'appellation [Fact] sert a déclarer la class comme étant de type test. Le test ce consitue en plusieurs parties : Nettoyage des données et Déroulement des tests',
              image: '../public/image/TraceFrameWorkNormeEntreprise.png'
            },
            {
              numero: '4',
              titre: 'Système de navigation',
              legende: 'Mise en place de routes et d’un menu cohérent.',
            },
          ],
        },
        {
          name: 'Manipuler des éléments graphiques pour un environnement de test',
          elementarySkills: [
            {
              name: 'Récupérer les chemins des éléments graphiques optimisés',
              color: '#96CEB4',
              description: 'Structurer l’UI en composants cohérents et maintenables.',
            },
            {
              name: 'Créer des wrappeurs d`éléments graphiques Web',
              color: '#C7CEEA',
              description: 'Mettre en place une navigation claire et hiérarchisée.',
            },
            {
              name: 'Design system',
              color: '#FCCB7E',
              description: 'Appliquer des styles et des règles visuelles homogènes.',
            },
          ],
          traces: [
            {
              numero: '5',
              titre: 'Récupération d\'un élément graphique depuis une page Web',
              legende: 'Cette trace montre comment récupérer le lien d\'un élément graphique Web, en créant son selector.Mais, il faut que le selector soit optimal et réutilisable, pouvoir être utiliser sur différent élément.',
              image: '../public/image/TraceConsoleGoogle.png'

            },
            {
              numero: '6',
              titre: 'Stockage des éléments graphiques',
              legende: 'Création d\'un fichier spécifique pour stocker tous les éléments. Cette méthode de récupération car elle a plus de 99 appels ce qui la rend très efficace et optimal.',
              image: '../public/image/TraceIGraphicElement.png'

            },
          ],
        },
        {
          name: 'Être capable d\'automatiser des tests web',
          elementarySkills: [
            {
              name: 'Lier les tests codés au dépôts Azure DevOps',
              color: '#96CEB4',
              description: 'Structurer l’UI en composants cohérents et maintenables.',
            },
            {
              name: 'Exécuter les tests automatisés sur une machine virtuelle',
              color: '#C7CEEA',
              description: 'Mettre en place une navigation claire et hiérarchisée.',
            },

          ],
          traces: [
            {
              numero: '7',
              titre: 'Association des tests développés au cas de test associé',
              legende: 'Une fois le test implémenté et fonctionnel, il faut le lier à son cas de test pour pouvoir le lancer depuis Azure DevOps. On les lie en les connectants via l\'ID du cas de test',
              image: '../public/image/TraceAssociationTest.png'

            },
            {
              numero: '8',
              titre: 'Lancement du test automatisé',
              legende: 'Quand le test est automatisé, il faut le lancer sur la VM, et on a un compte rendu sur l\'exécution du test parties par parties ',
              image: '../public/image/TraceTestRun.png'

            },
          ],
        },
      ],
      bilan: [
        {
          skillName: 'Concevoir un cas de test répondant à un besoin métier',
          elementaryDetails: [
            {
              name: 'Rédiger un cas de test avec la bonne norme',
              context: 'Création de cas de test pour le métier.',
              learningContext: 'Appris en stage, je ne connaissais pas cette notion auparavant.',
              difficulty: 'Moyen',
            },
            {
              name: 'Créer un Test Plan via un cas de test',
              context: 'Une fois les cas de tests validé par le métier, j\'ai du créer des test plans selon les versions du sites.',
              learningContext: 'Les Tests Plans, étant dédiés à Azure DevOps, je n\'y avais pas connaissance avant le stage.',
              difficulty: 'Faible',
            },
          ],
          context: 'Création d\'interfaces web interactives',
          learningContext: 'Appris en cours et consolidé lors du projet portfolio',
          difficulty: 'Moyen',
          level: 'Bon',
          levelBefore: 'Faible',
          levelAfter: 'Bon',
          levelBeforeText: 'Je ne connaissais pas cette notion et ce formalisme',
          levelAfterText: 'Capable de créer différents cas de test pour différents écrans avec le formalisme d\'Azure DevOps',
        },
        {
          skillName: 'Concevoir des tests de bout en bout pour une application web',
          elementaryDetails: [
            {
              name: 'Composants',
              context: 'Decouper les ecrans en blocs reutilisables.',
              learningContext: 'Vu en cours puis applique en projet.',
              difficulty: 'Moyen',
            },
            {
              name: 'Routing',
              context: 'Navigation entre les pages et sections.',
              learningContext: 'Appris en cours, renforce en pratique.',
              difficulty: 'Moyen',
            },
            {
              name: 'Design system',
              context: 'Harmoniser les styles et composants UI.',
              learningContext: 'Appris lors du portfolio.',
              difficulty: 'Faible',
            },
          ],
          context: 'Utilisation de Vue 3 pour la gestion d\'état et des composants',
          learningContext: 'Appris en cours avec pratique intensive',
          difficulty: 'Moyen',
          level: 'Bon',
          levelBefore: 'Mauvais',
          levelAfter: 'Bon',
          levelBeforeText: 'Difficulte a structurer les composants et routes.',
          levelAfterText: 'Mise en place claire des vues et navigation.',
        },
        {
          skillName: 'Manipuler des éléments graphiques pour un environnement de test',
          elementaryDetails: [
            {
              name: 'Mise en page adaptable',
              context: 'Ajuster les grilles et espacements.',
              learningContext: 'Vu en cours puis teste sur le portfolio.',
              difficulty: 'Faible',
            },
            {
              name: 'Priorisation mobile',
              context: 'Organiser les contenus pour petits ecrans.',
              learningContext: 'Appris par pratique personnelle.',
              difficulty: 'Faible',
            },
            {
              name: 'Lisibilite',
              context: 'Assurer une lecture confortable sur mobile.',
              learningContext: 'Appris en cours et par retours utilisateurs.',
              difficulty: 'Faible',
            },
          ],
          context: 'Adaptation de l\'interface pour différentes tailles d\'écran',
          learningContext: 'Compétence acquise progressivement lors des projets web',
          difficulty: 'Faible',
          level: 'Excellent',
          levelBefore: 'Moyen',
          levelAfter: 'Excellent',
          levelBeforeText: 'Adaptations ponctuelles sans methode.',
          levelAfterText: 'Ajustements systematiques et verification multi-ecrans.',
        },
        {
          skillName: 'Être capable d\'automatiser des tests web',
          elementaryDetails: [
            {
              name: 'Mise en page adaptable',
              context: 'Ajuster les grilles et espacements.',
              learningContext: 'Vu en cours puis teste sur le portfolio.',
              difficulty: 'Faible',
            },
            {
              name: 'Priorisation mobile',
              context: 'Organiser les contenus pour petits ecrans.',
              learningContext: 'Appris par pratique personnelle.',
              difficulty: 'Faible',
            },
            {
              name: 'Lisibilite',
              context: 'Assurer une lecture confortable sur mobile.',
              learningContext: 'Appris en cours et par retours utilisateurs.',
              difficulty: 'Faible',
            },
          ],
          context: 'Adaptation de l\'interface pour différentes tailles d\'écran',
          learningContext: 'Compétence acquise progressivement lors des projets web',
          difficulty: 'Faible',
          level: 'Excellent',
          levelBefore: 'Moyen',
          levelAfter: 'Excellent',
          levelBeforeText: 'Adaptations ponctuelles sans methode.',
          levelAfterText: 'Ajustements systematiques et verification multi-ecrans.',
        },
      ],
    },
    suiviProjet: {
      title: 'Suivi de Projet',
      resume: 'Présentation de votre capacité à suivre et gérer des projets, planifier et organiser le travail.',
      generalSkills: [
        {
          name: 'Collaborer sur du code via Azure DevOps',
          elementarySkills: [
            {
              name: 'Planification',
              color: '#FFE66D',
              description: 'Découper le projet en phases avec des objectifs mesurables.',
            },
            {
              name: 'Priorisation',
              color: '#95E1D3',
              description: 'Classer les tâches selon l’impact et l’urgence.',
            },
            {
              name: 'Suivi d’avancement',
              color: '#C7CEEA',
              description: 'Mettre à jour l’état des tâches et gérer les écarts.',
            },
          ],
          traces: [
            {
              numero: '1',
              titre: 'Planning de projet',
              legende: 'Organisation des étapes et estimation des charges.',
            },
            {
              numero: '2',
              titre: 'Suivi hebdomadaire',
              legende: 'Tableau d’avancement avec actions correctives.',
            },
          ],
        },
        {
          name: 'Rédiger une documentation technique',
          elementarySkills: [
            {
              name: 'Compte-rendu',
              color: '#FCCB7E',
              description: 'Rédiger des synthèses claires pour les parties prenantes.',
            },
            {
              name: 'Gestion des retours',
              color: '#A8D8EA',
              description: 'Intégrer les feedbacks et ajuster la trajectoire.',
            },
            {
              name: 'Documentation technique',
              color: '#AA96DA',
              description: 'Structurer les choix et les livrables pour la maintenance.',
            },
          ],
          traces: [
            {
              numero: '1',
              titre: 'Journal de bord',
              legende: 'Suivi des décisions et des validations.',
            },
            {
              numero: '2',
              titre: 'Dossier de présentation',
              legende: 'Synthèse des objectifs, résultats et perspectives.',
            },
          ],
        },
        {
          name: 'Faire un reporting régulier des actions réalisés',
          elementarySkills: [
            {
              name: 'Planification',
              color: '#FFE66D',
              description: 'Découper le projet en phases avec des objectifs mesurables.',
            },
            {
              name: 'Priorisation',
              color: '#95E1D3',
              description: 'Classer les tâches selon l’impact et l’urgence.',
            },
            {
              name: 'Suivi d’avancement',
              color: '#C7CEEA',
              description: 'Mettre à jour l’état des tâches et gérer les écarts.',
            },
          ],
          traces: [
            {
              numero: '1',
              titre: 'Planning de projet',
              legende: 'Organisation des étapes et estimation des charges.',
            },
            {
              numero: '2',
              titre: 'Suivi hebdomadaire',
              legende: 'Tableau d’avancement avec actions correctives.',
            },
          ],
        },
      ],
      bilan: [
        {
          skillName: 'Collaborer sur du code via Azure DevOps',
          elementaryDetails: [
            {
              name: 'Decoupage en phases',
              context: 'Creation d\'un planning par etapes.',
              learningContext: 'Vu en cours puis applique en projet.',
              difficulty: 'Moyen',
            },
            {
              name: 'Priorisation',
              context: 'Classer les taches par urgence et impact.',
              learningContext: 'Appris en cours et en pratique.',
              difficulty: 'Moyen',
            },
            {
              name: 'Suivi d\'avancement',
              context: 'Mettre a jour les taches et livrables.',
              learningContext: 'Appris lors des projets collectifs.',
              difficulty: 'Moyen',
            },
          ],
          context: 'Organisation et planification des phases du projet',
          learningContext: 'Acquis par la pratique dans les projets académiques',
          difficulty: 'Moyen',
          level: 'Bon',
          levelBefore: 'Moyen',
          levelAfter: 'Bon',
          levelBeforeText: 'Planification basique avec suivi limite.',
          levelAfterText: 'Suivi plus rigoureux avec jalons clairs.',
        },
        {
          skillName: 'Rédiger une documentation technique',
          elementaryDetails: [
            {
              name: 'Comptes-rendus',
              context: 'Partager les avancees au groupe.',
              learningContext: 'Vu en cours puis pratique en equipe.',
              difficulty: 'Faible',
            },
            {
              name: 'Gestion des retours',
              context: 'Integrer les remarques et ajuster.',
              learningContext: 'Appris en projet collectif.',
              difficulty: 'Faible',
            },
            {
              name: 'Documentation',
              context: 'Structurer les livrables et notes.',
              learningContext: 'Appris en cours et renforce en projet.',
              difficulty: 'Faible',
            },
          ],
          context: 'Communication avec les stakeholders et l\'équipe',
          learningContext: 'Développé en cours et lors de projet collectifs',
          difficulty: 'Faible',
          level: 'Bon',
          levelBefore: 'Moyen',
          levelAfter: 'Bon',
          levelBeforeText: 'Communication parfois incomplete ou tardive.',
          levelAfterText: 'Echanges plus regulier et comptes-rendus fiables.',
        },
        {
          skillName: 'Faire un reporting régulier des actions réalisés',
          elementaryDetails: [
            {
              name: 'Comptes-rendus',
              context: 'Partager les avancees au groupe.',
              learningContext: 'Vu en cours puis pratique en equipe.',
              difficulty: 'Faible',
            },
            {
              name: 'Gestion des retours',
              context: 'Integrer les remarques et ajuster.',
              learningContext: 'Appris en projet collectif.',
              difficulty: 'Faible',
            },
            {
              name: 'Documentation',
              context: 'Structurer les livrables et notes.',
              learningContext: 'Appris en cours et renforce en projet.',
              difficulty: 'Faible',
            },
          ],
          context: 'Communication avec les stakeholders et l\'équipe',
          learningContext: 'Développé en cours et lors de projet collectifs',
          difficulty: 'Faible',
          level: 'Bon',
          levelBefore: 'Moyen',
          levelAfter: 'Bon',
          levelBeforeText: 'Communication parfois incomplete ou tardive.',
          levelAfterText: 'Echanges plus regulier et comptes-rendus fiables.',
        },
      ],
    },
    integrationEntreprise: {
      title: 'Intégration en Entreprise',
      resume: 'Description de votre expérience en entreprise, vos missions et vos apprentissages professionnels.',
      generalSkills: [
        {
          name: 'S’intégrer à une équipe',
          elementarySkills: [
            {
              name: 'Communication professionnelle',
              color: '#A8D8EA',
              description: 'Adapter son discours et ses échanges au contexte professionnel.',
            },
            {
              name: 'Collaboration',
              color: '#AA96DA',
              description: 'Travailler en coordination avec l’équipe et partager l’avancement.',
            },
            {
              name: 'Culture d’entreprise',
              color: '#A1DE93',
              description: 'Comprendre les règles, outils et méthodes de l’organisation.',
            },
          ],
          traces: [
            {
              numero: '1',
              titre: 'Prise en main des outils',
              legende: 'Découverte de l’environnement et des rituels d’équipe.',
            },
            {
              numero: '2',
              titre: 'Participation aux réunions',
              legende: 'Contributions aux échanges et comptes-rendus.',
            },
          ],
        },
        {
          name: 'Travailler en autonomie',
          elementarySkills: [
            {
              name: 'Organisation personnelle',
              color: '#FCBAD3',
              description: 'Gérer son temps et ses priorités au quotidien.',
            },
            {
              name: 'Prise d’initiative',
              color: '#FFE66D',
              description: 'Proposer des solutions et anticiper les besoins.',
            },
            {
              name: 'Adaptabilité',
              color: '#4ECDC4',
              description: 'S’ajuster aux imprévus et contraintes du terrain.',
            },
          ],
          traces: [
            {
              numero: '1',
              titre: 'Mission en responsabilité',
              legende: 'Réalisation d’une tâche complète avec retours réguliers.',
            },
            {
              numero: '2',
              titre: 'Amélioration continue',
              legende: 'Proposition d’optimisations suite aux observations terrain.',
            },
          ],
        },
      ],
      bilan: [
        {
          skillName: 'Professional Adaptation',
          elementaryDetails: [
            {
              name: 'Rituels d\'equipe',
              context: 'Participation aux reunions et standups.',
              learningContext: 'Appris en stage.',
              difficulty: 'Moyen',
            },
            {
              name: 'Communication',
              context: 'Echanges avec l\'equipe et le tuteur.',
              learningContext: 'Appris en entreprise.',
              difficulty: 'Moyen',
            },
            {
              name: 'Pratiques internes',
              context: 'Respect des outils et process.',
              learningContext: 'Appris en stage.',
              difficulty: 'Moyen',
            },
          ],
          context: 'Intégration dans une équipe professionnelle',
          learningContext: 'Appris en entreprise lors du stage/alternance',
          difficulty: 'Moyen',
          level: 'Bon',
          levelBefore: 'Moyen',
          levelAfter: 'Bon',
          levelBeforeText: 'Besoin d\'accompagnement sur les usages internes.',
          levelAfterText: 'Autonomie progressive dans les rituels d\'equipe.',
        },
        {
          skillName: 'Task Management',
          elementaryDetails: [
            {
              name: 'Organisation',
              context: 'Planifier les taches quotidiennes.',
              learningContext: 'Appris en entreprise.',
              difficulty: 'Faible',
            },
            {
              name: 'Prise d\'initiative',
              context: 'Proposer des solutions simples.',
              learningContext: 'Appris en stage.',
              difficulty: 'Faible',
            },
            {
              name: 'Adaptabilite',
              context: 'Ajuster les priorites selon les urgences.',
              learningContext: 'Appris en entreprise.',
              difficulty: 'Faible',
            },
          ],
          context: 'Gestion des missions assignées et respect des délais',
          learningContext: 'Développé lors de l\'expérience professionnelle',
          difficulty: 'Faible',
          level: 'Bon',
          levelBefore: 'Moyen',
          levelAfter: 'Bon',
          levelBeforeText: 'Organisation parfois re-active.',
          levelAfterText: 'Priorisation plus claire et initiatives ciblees.',
        },
      ],
    },
  },
}
