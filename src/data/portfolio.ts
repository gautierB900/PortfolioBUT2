export const portfolioData = {
  personal: {
    nom: 'Beley ',
    prenom: 'Gautier',
    mail: 'gauteir.beley@edu.univ-fcomte.fr',
  },
  sections: {
    technique: {
      title: 'Technique',
      resume: 'Cette section présente vos savoir-faire techniques acquis lors de votre formation et expériences.',
      skills: [
        { name: 'HTML/CSS', color: '#FF6B6B' },
        { name: 'JavaScript', color: '#4ECDC4' },
        { name: 'Vue.js', color: '#45B7D1' },
        { name: 'Vuetify', color: '#96CEB4' },
      ],
      trace: {
        numero: '1',
        titre: 'Développement d\'une application web',
        legende: 'Application portfolio avec Vue 3 et Vuetify',
        descGeneral: `Cette trace représente le développement complet d'une application web moderne utilisant
        Vue 3 comme framework JavaScript et Vuetify pour les composants d'interface.
        Elle démontre la capacité à mettre en œuvre une architecture complète d'application web.`,
        descSkills: {
          'HTML/CSS': `Utilisation pour la structure et le style des composants.
          Particulièrement important dans les sections de header et navigation.`,
          'JavaScript': `Logique métier de l'application, gestion des routes et des données.
          Utilisé pour implémenter la navigation et les transitions entre pages.`,
          'Vue.js': `Framework principal de l'application, permettant la réactivité et la composabilité.
          Utilisé pour créer des composants réutilisables.`,
          'Vuetify': `Bibliothèque de composants Material Design pour Vue.js.
          Utilisée pour construire une interface professionnelle et responsive.`,
        } as Record<string, string>,
      },
      bilan: [
        {
          skillName: 'Frontend Development',
          context: 'Création d\'interfaces web interactives',
          learningContext: 'Appris en cours et consolidé lors du projet portfolio',
          difficulty: 'Moyen',
          level: 'Bon',
        },
        {
          skillName: 'Vue.js Framework',
          context: 'Utilisation de Vue 3 pour la gestion d\'état et des composants',
          learningContext: 'Appris en cours avec pratique intensive',
          difficulty: 'Moyen',
          level: 'Bon',
        },
        {
          skillName: 'Responsive Design',
          context: 'Adaptation de l\'interface pour différentes tailles d\'écran',
          learningContext: 'Compétence acquise progressivement lors des projets web',
          difficulty: 'Faible',
          level: 'Excellent',
        },
      ],
    },
    suiviProjet: {
      title: 'Suivi de Projet',
      resume: 'Présentation de votre capacité à suivre et gérer des projets, planifier et organiser le travail.',
      skills: [
        { name: 'Planification', color: '#FFE66D' },
        { name: 'Communication', color: '#95E1D3' },
        { name: 'Gestion d\'équipe', color: '#C7CEEA' },
        { name: 'Documentation', color: '#FCCB7E' },
      ],
      trace: {
        numero: '2',
        titre: 'Gestion du projet portfolio',
        legende: 'Suivi du projet de création de portfolio avec planification et documentation',
        descGeneral: `Ce projet a impliqué la planification complète, la documentation des étapes
        et le suivi régulier de la progression. Il démontre la capacité à organiser un projet
        de bout en bout, de la conception à la mise en œuvre.`,
        descSkills: {
          'Planification': `Définition des phases du projet et des jalons.
          Utilisée pour structurer le développement en étapes logiques.`,
          'Communication': `Documentation écrite du projet et communication des progrès.
          Importante pour clarifier les objectifs et les résultats.`,
          'Gestion d\'équipe': `Coordination avec les évaluateurs et feedback.
          Essentielle pour maintenir l\'alignement avec les attentes.`,
          'Documentation': `Création de documents expliquant les choix techniques et la structure.
          Critique pour la compréhension et la maintenance du projet.`,
        } as Record<string, string>,
      },
      bilan: [
        {
          skillName: 'Project Planning',
          context: 'Organisation et planification des phases du projet',
          learningContext: 'Acquis par la pratique dans les projets académiques',
          difficulty: 'Moyen',
          level: 'Bon',
        },
        {
          skillName: 'Team Communication',
          context: 'Communication avec les stakeholders et l\'équipe',
          learningContext: 'Développé en cours et lors de projet collectifs',
          difficulty: 'Faible',
          level: 'Bon',
        },
      ],
    },
    integrationEntreprise: {
      title: 'Intégration en Entreprise',
      resume: 'Description de votre expérience en entreprise, vos missions et vos apprentissages professionnels.',
      skills: [
        { name: 'Environnement professionnel', color: '#A8D8EA' },
        { name: 'Collaboration', color: '#AA96DA' },
        { name: 'Autonomie', color: '#FCBAD3' },
        { name: 'Adaptabilité', color: '#A1DE93' },
      ],
      trace: {
        numero: '3',
        titre: 'Stage/Alternance en entreprise',
        legende: 'Expérience professionnelle et missions réalisées',
        descGeneral: `Votre expérience en entreprise a permis de développer des compétences
        professionnelles dans un environnement réel. Vous avez participé à des projets concrets
        et collaboré avec une équipe professionnelle.`,
        descSkills: {
          'Environnement professionnel': `Adaptation à la culture d'entreprise et aux processus.
          Développée à travers les interactions quotidiennes en entreprise.`,
          'Collaboration': `Travail en équipe sur des projets communs.
          Essentielle pour la réussite des missions.`,
          'Autonomie': `Capacité à travailler de manière indépendante sur les tâches assignées.
          Développée progressivement pendant le stage.`,
          'Adaptabilité': `Flexibilité face aux changements et aux nouvelles situations.
          Importante dans un environnement professionnel dynamique.`,
        } as Record<string, string>,
      },
      bilan: [
        {
          skillName: 'Professional Adaptation',
          context: 'Intégration dans une équipe professionnelle',
          learningContext: 'Appris en entreprise lors du stage/alternance',
          difficulty: 'Moyen',
          level: 'Bon',
        },
        {
          skillName: 'Task Management',
          context: 'Gestion des missions assignées et respect des délais',
          learningContext: 'Développé lors de l\'expérience professionnelle',
          difficulty: 'Faible',
          level: 'Bon',
        },
      ],
    },
  },
}
