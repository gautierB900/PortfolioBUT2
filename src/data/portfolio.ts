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
              name: 'Décomposer une fonctionnalité en étapes de test atomiques',
              color: '#FF6B6B',
              description: 'Traduire chaque fonctionnalité d\'un écran en une suite d\'étapes (action / résultat attendu) vérifiables et sans ambiguïté.',
            },
            {
              name: 'Rédiger un cas de test au formalisme importable d\'Azure DevOps',
              color: '#4ECDC4',
              description: 'Respecter les colonnes attendues par le module Test Plans pour qu\'un fichier Excel soit reconnu à l\'import.',
            },
            {
              name: 'Organiser les cas de test en suites thématiques',
              color: '#FFB84D',
              description: 'Regrouper les cas de test par écran de l\'application pour une couverture lisible et maintenable.',
            },
            {
              name: 'Versionner les campagnes de test',
              color: '#9B8CFF',
              description: 'Construire des plans de test incrémentaux par version pour historiser ce qui a été validé avant chaque déploiement.',
            },
          ],
          traces: [
            {
              numero: '1',
              titre: 'Cas de test au formalisme Azure DevOps',
              legende: 'Trace n°1 : cas de test « Contrôle visuellement les Jalons » rédigé sous Excel au formalisme attendu par Azure DevOps Test Plans.',
              image: `${import.meta.env.BASE_URL}image/TraceCasDeTest.png`,
              descriptionGenerale: 'La trace n°1 est une copie d\'écran d\'un de mes cas de test, rédigé dans un fichier Excel. À mon arrivée chez APRR, j\'ai d\'abord pris connaissance des écrans de l\'application MAESTRO déjà testés, puis mon tuteur, qui porte la vision métier, m\'a indiqué les écrans qu\'il souhaitait voir couverts. Pour chaque écran, je rédigeais un fichier Excel regroupant l\'ensemble des cas de test couvrant ses fonctionnalités. Le cas de test présenté dans la trace n°1 concerne l\'écran « Jalons &amp; Livrables » et vérifie l\'affichage correct des jalons.<br><br>Sur cette capture, les <strong>cadres rouges</strong> mettent en évidence les colonnes imposées par le formalisme d\'Azure DevOps (ID, Title, Test Step, Step Action, Step Expected, Area Path, State), qui doivent être présentes pour que l\'import du fichier soit reconnu. Les <strong>cadres bleus</strong> isolent un exemple d\'étape de test : l\'action « Je contrôle visuellement la présence d\'enregistrements de jalons » et son résultat attendu « Des jalons sont présents », qui illustrent le découpage de chaque fonctionnalité en couples action / résultat vérifiable.',
              descriptifSavoirFaire: [
                {
                  titre: 'Décomposer une fonctionnalité en étapes de test atomiques',
                  texte: 'La première difficulté n\'était pas d\'imaginer les scénarios, mais de <strong class="c-red">décomposer chaque fonctionnalité de l\'écran en une suite d\'étapes atomiques</strong>, où chaque action s\'accompagne d\'un résultat attendu vérifiable et sans ambiguïté. Pour le cas « Contrôle visuellement les Jalons » de la trace n°1, cela m\'a amené à vérifier successivement la présence des jalons que le test crée lui-même au préalable, leur ordre d\'affichage, la cohérence des données et l\'intitulé des colonnes du tableau applicatif. Ce découpage fin est essentiel car chaque étape deviendra plus tard une assertion dans le test automatisé : une étape mal définie produit un test infidèle.',
                },
                {
                  titre: 'Rédiger un cas de test au formalisme importable d\'Azure DevOps',
                  texte: 'Au-delà du contenu, la trace n°1 montre la contrainte de forme. Le fichier Excel devait <strong class="c-teal">respecter des colonnes précises pour être reconnu à l\'import par le module Test Plans</strong>. Lors de ma première injection dans Azure DevOps, j\'ai dû ajouter au fichier les colonnes attendues par l\'outil, comme <em>Area Path</em> ou <em>Test Step</em>, sans quoi l\'import échouait. Ce savoir-faire illustre le passage d\'un besoin exprimé oralement par le métier à un document structuré, normé et directement exploitable par la machine.',
                },
              ],
            },
            {
              numero: '2',
              titre: 'Organisation des cas de test en Test Plans versionnés',
              legende: 'Trace n°2 : arborescence des Test Plans dans Azure DevOps, organisés par version de MAESTRO et par suites thématiques.',
              image: `${import.meta.env.BASE_URL}image/TraceTestPlans.png`,
              descriptionGenerale: 'La trace n°2 montre le module Test Plans d\'Azure DevOps, où sont regroupés et organisés tous les cas de test que j\'ai rédigés. Une fois un fichier Excel validé par le métier, je l\'injectais dans Azure DevOps, ce qui créait les cas de test correspondants.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure le sélecteur de versions (MAESTRO V1.6, MAESTRO V1.7, Tests) : c\'est le premier niveau d\'organisation, par version de l\'application. Le <strong>cadre bleu</strong> entoure la liste des suites thématiques (Écran détail prestation, Écran d\'accueil, Perturbations, Gestion des risques, Plan d\'actions, Jalons &amp; Livrables), soit le second niveau, où chaque écran correspond à une suite. Le <strong>cercle jaune</strong> met en avant le compteur de la suite « Jalons &amp; Livrables (9) » : ces neuf cas de test, c\'est moi qui les ai rédigés pour couvrir cet écran.',
              descriptifSavoirFaire: [
                {
                  titre: 'Organiser les cas de test en suites thématiques',
                  texte: 'Dans la trace n°2, <strong class="c-orange">chaque écran de MAESTRO correspond à une suite</strong> (Jalons &amp; Livrables, Perturbations, Gestion des risques, Plan d\'actions…). Ce regroupement prolonge la logique de la trace n°1, où un fichier Excel correspondait déjà à un écran : la cohérence entre la phase de rédaction et la phase d\'organisation rend l\'ensemble lisible et facile à maintenir. On retrouve dans le volet de gauche le compteur de cas par suite, qui donne une vue immédiate de la couverture de chaque écran.',
                },
                {
                  titre: 'Versionner les campagnes de test',
                  texte: 'L\'organisation par version répondait à un besoin métier explicite : conserver un historique des versions testées du site, chaque version devant passer une campagne de tests automatisés avant son déploiement. J\'ai donc <strong class="c-purple">structuré les plans de façon incrémentale</strong> : le plan « MAESTRO V1.7 » reprend l\'intégralité des tests de la V1.6 et y ajoute ceux des nouvelles fonctionnalités, tandis qu\'un plan « Tests » rassemble l\'ensemble des tests existants. Cette structure permet de rejouer une campagne complète à chaque montée de version et de savoir précisément ce qui a été validé pour chaque livraison.',
                },
              ],
            },
          ],
        },
        {
          name: 'Automatiser des tests de bout en bout pour une application web',
          elementarySkills: [
            {
              name: 'Localiser des éléments graphiques sur une application low-code instable',
              color: '#FF6B6B',
              description: 'Trouver un point d\'ancrage fiable dans le DOM généré et mouvant d\'une Power App.',
            },
            {
              name: 'Concevoir des wrappers d\'éléments réutilisables et robustes',
              color: '#4ECDC4',
              description: 'Encapsuler la localisation des éléments dans des méthodes courtes, réutilisables et résistantes aux évolutions de l\'interface.',
            },
            {
              name: 'Coder un test automatisé avec le framework de l\'entreprise',
              color: '#FFB84D',
              description: 'Écrire un test de bout en bout selon le pattern Arrange / Act / Assert en mobilisant les helpers du framework.',
            },
          ],
          traces: [
            {
              numero: '3',
              titre: 'Inspection du DOM d\'une application Power Platform',
              legende: 'Trace n°3 : inspection via les outils de développement de Chrome d\'un élément de MAESTRO, application développée en low-code (Power Platform).',
              image: `${import.meta.env.BASE_URL}image/TraceConsoleGoogle.png`,
              descriptionGenerale: 'La trace n°3 montre les outils de développement de Chrome ouverts sur l\'application MAESTRO. MAESTRO étant une Power App, c\'est-à-dire une application générée en low-code, son code HTML n\'est pas écrit à la main mais produit automatiquement par la plateforme. C\'est cette inspection qui constituait la première étape de tout test : avant de pouvoir piloter un élément (un bouton, un champ, une liste), je devais d\'abord savoir comment le désigner de façon fiable.<br><br>Sur cette capture, le <strong>cadre bleu</strong> montre l\'infobulle du sélecteur généré automatiquement par le navigateur : un identifiant à rallonge et instable. Le <strong>tracé rouge</strong> illustre la profondeur d\'imbrication des éléments et la manière dont ils s\'emboîtent les uns dans les autres dans l\'arbre HTML du panneau de droite, où l\'on voit aussi les classes au nom généré (du type « fui-Radio r1siqwd8 »). En bas, le champ de recherche contient le XPath que j\'ai construit pour cibler l\'élément de façon fiable, validé par l\'indicateur « 1 of 1 ».',
              descriptifSavoirFaire: [
                {
                  titre: 'Localiser des éléments graphiques sur une application low-code instable',
                  texte: 'La trace n°3 illustre la principale difficulté technique de mon stage : sur une Power App, la plateforme <strong class="c-red">génère une arborescence HTML incontrôlable</strong>, où un simple bouton peut être enfoui sous une cinquantaine de balises imbriquées, avec des noms de classes aléatoires et des éléments parfois non interactables. Copier directement le XPath proposé par le navigateur produit un chemin interminable, illisible, et surtout fragile : la moindre modification d\'un écran change l\'imbrication et casse tous les XPath récupérés auparavant. Identifier un point d\'ancrage stable dans ce DOM mouvant était donc un travail à part entière, et la condition pour que les tests ne se cassent pas à la première évolution de l\'application.',
                },
                {
                  titre: 'Concevoir des wrappers d\'éléments réutilisables et robustes',
                  texte: 'La trace n°3 motive directement la trace n°4 : c\'est en constatant l\'instabilité de ce DOM que j\'ai compris qu\'il fallait <strong class="c-teal">une stratégie de localisation plus robuste qu\'un XPath brut</strong>. Plutôt que de coller des chemins absolus dans chaque test, j\'ai cherché un attribut stable sur lequel m\'appuyer, ce qui m\'a conduit à la solution présentée dans la trace suivante.',
                },
              ],
            },
            {
              numero: '4',
              titre: 'Wrapper d\'élément basé sur l\'attribut data-control-name',
              legende: 'Trace n°4 : méthode GetDataControlName que j\'ai codée pour générer un sélecteur court et réutilisable, et renvoyer un wrapper d\'élément.',
              image: `${import.meta.env.BASE_URL}image/TraceIGraphicElement.png`,
              descriptionGenerale: 'La trace n°4 présente une méthode que j\'ai écrite, GetDataControlName. Elle se situe dans un fichier qui rassemble l\'ensemble des méthodes chargées de « wrapper » les éléments graphiques de l\'application, c\'est-à-dire de les localiser et de les encapsuler pour les rendre utilisables dans les tests. Elle renvoie un WebElementWrapper : un objet qui encapsule l\'élément du navigateur ainsi qu\'un message de log décrivant l\'élément ciblé.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure la signature de la méthode, qui prend un texte et un index en paramètres. Le <strong>cadre bleu</strong> isole la ligne du sélecteur, construit de façon courte à partir de l\'attribut data-control-name plutôt qu\'avec un chemin absolu fragile. Le <strong>cadre violet</strong> regroupe une liste (non exhaustive, elle se prolonge au-delà de la capture) de commentaires montrant qu\'un même wrapper cible des éléments très différents (listes déroulantes statut, priorité, nom du responsable, personnage…). C\'est ce qui rend la méthode optimisée : grâce à ses deux paramètres (un texte et un index), un seul et même wrapper s\'adapte à une grande variété d\'éléments. Enfin, le <strong>repère jaune</strong> met en avant l\'indicateur « 99+ références » de Visual Studio : ce nombre élevé d\'appels prouve que cette unique méthode est réutilisée partout dans les tests, donc qu\'elle est utilisable à toutes les sauces.',
              descriptifSavoirFaire: [
                {
                  titre: 'Concevoir des wrappers d\'éléments réutilisables et robustes',
                  texte: 'La trace n°4 est ma réponse au problème posé par la trace n°3. Plutôt que de dépendre d\'un chemin absolu fragile, je m\'appuie sur l\'attribut data-control-name, qui reste stable même quand l\'imbrication des balises change. GetDataControlName n\'est qu\'un exemple parmi l\'ensemble des wrappers que j\'ai regroupés dans ce fichier dédié : selon les besoins des tests, ces méthodes <strong class="c-teal">ciblent aussi bien la détection d\'un émoji que celle d\'un bouton poubelle</strong> ou de tout autre élément de l\'interface. Pour moi, un wrapper « optimisé » répond à trois critères que ces méthodes remplissent : elles produisent <strong class="c-teal">un sélecteur court, donc bien moins sensible aux évolutions de l\'application</strong> ; elles sont <strong class="c-teal">réutilisables</strong>, puisqu\'un même appel cible de nombreux éléments différents selon ses paramètres ; et elles couvrent un grand nombre de cas sans qu\'il faille écrire un sélecteur à la main pour chacun. Cette réutilisabilité n\'est pas qu\'une intention : <strong class="c-teal">Visual Studio indique plus de 99 références à cette seule méthode</strong> dans le code, ce qui prouve qu\'elle est effectivement appelée dans l\'ensemble des tests. C\'est ce qui rend la suite de tests maintenable dans la durée : corriger la façon de cibler un élément se fait à un seul endroit, et bénéficie à tous les tests.',
                },
                {
                  titre: 'Localiser des éléments graphiques sur une application low-code instable',
                  texte: 'La trace n°4 montre aussi l\'aboutissement du travail de localisation entamé dans la trace n°3 : le wrapper <strong class="c-red">transforme une localisation fragile en une localisation fiable et nommée</strong>. Le message de log retourné (« {text} {index} détecté ») rend en plus chaque ciblage traçable lors de l\'exécution, ce qui facilite le diagnostic quand un test échoue.',
                },
              ],
            },
            {
              numero: '5',
              titre: 'Méthode de test automatisé avec le framework de l\'entreprise',
              legende: 'Trace n°5 : test automatisé ControleSuppressionJalon codé en C# selon le pattern Arrange / Act / Assert du framework de l\'entreprise.',
              image: `${import.meta.env.BASE_URL}image/TraceTestVS.png`,
              descriptionGenerale: 'La trace n°5 montre une méthode de test complète, ControleSuppressionJalon, qui vérifie que la suppression de jalons fonctionne dans MAESTRO. On y retrouve les helpers du framework (logHelper, actionHelper, assertHelper) et l\'objet iFramePage qui représente la page applicative.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure l\'annotation [Fact], qui déclare la méthode comme un test exécutable. Les <strong>cadres bleus</strong> mettent en évidence la structure du test selon le pattern du framework — les trois étapes Arrange (préparation des données), Act (actions de suppression) et Assert. Le <strong>cadre violet</strong> isole l\'assertion finale Assert.Equal, qui vérifie le nombre de jalons restants après suppression. Le <strong>cadre jaune</strong> isole l\'appel à GetDataControlName("ico_delete_jalon", 2), c\'est-à-dire le wrapper de la trace n°4 réutilisé ici pour cibler l\'icône de suppression d\'un jalon.',
              descriptifSavoirFaire: [
                {
                  titre: 'Coder un test automatisé avec le framework de l\'entreprise',
                  texte: 'La trace n°5 démontre ma capacité à <strong class="c-orange">écrire un test de bout en bout structuré selon le pattern Arrange / Act / Assert</strong>. Le test commence par régénérer un jeu de données témoin (CreerJeuDeDonnees), de sorte qu\'il parte toujours d\'un état connu et puisse être rejoué de façon fiable. Il enchaîne ensuite les actions sur l\'interface, puis se termine par une assertion qui compare l\'état obtenu à l\'état attendu. On remarque aussi les appels ThenWait, indispensables sur MAESTRO : les temps de réponse de la Power App étant imprévisibles, il faut <strong class="c-orange">temporiser explicitement entre les actions</strong> pour laisser l\'interface se mettre à jour, sans quoi le test agirait trop tôt et échouerait à tort.',
                },
                {
                  titre: 'Concevoir des wrappers d\'éléments réutilisables et robustes',
                  texte: 'La trace n°5 boucle la logique des trois traces : on y voit le wrapper GetDataControlName de la trace n°4 <strong class="c-teal">réellement mis en œuvre dans un test</strong>, ici pour cibler l\'icône de suppression d\'un jalon (« ico_delete_jalon », index 2). Ce qui était une méthode isolée dans la trace n°4 devient ici un outil concret au service d\'un cas de test, ce qui montre que le wrapper n\'est pas un exercice théorique mais une brique réutilisée au quotidien dans l\'écriture des tests.',
                },
              ],
            },
          ],
        },
        {
          name: 'Garantir la qualité du code par l\'analyse statique',
          elementarySkills: [
            {
              name: 'Mettre en place l\'analyse SonarQube via un pipeline',
              color: '#FF6B6B',
              description: 'Écrire et configurer un pipeline déclenchant l\'analyse SonarQube à chaque modification de la branche develop.',
            },
            {
              name: 'Interpréter les problèmes remontés et leur gradation',
              color: '#4ECDC4',
              description: 'Lire et hiérarchiser les problèmes par type et sévérité, et identifier leur origine.',
            },
            {
              name: 'Corriger les problèmes de qualité du code',
              color: '#FFB84D',
              description: 'Traiter concrètement dans le code les problèmes révélés par l\'analyse.',
            },
            {
              name: 'Suivre l\'évolution de la qualité dans le temps',
              color: '#9B8CFF',
              description: 'Lire la tendance de la qualité du code au fil des analyses successives.',
            },
          ],
          traces: [
            {
              numero: '6',
              titre: 'Problèmes de code remontés par l\'analyse SonarQube',
              legende: 'Trace n°6 : liste des problèmes détectés par l\'analyse SonarQube sur le projet, avec leur type et leur sévérité.',
              image: `${import.meta.env.BASE_URL}image/TraceSonarQubeProbleme.png`,
              descriptionGenerale: 'La trace n°6 montre l\'interface de SonarQube listant les problèmes détectés dans le code du projet. SonarQube est un outil d\'analyse statique : il examine le code sans l\'exécuter et signale les défauts de qualité. Cette analyse n\'était plus utilisée depuis longtemps sur le projet : c\'est moi qui l\'ai remise en service.<br><br>Sur cette capture, le <strong>cadre rouge</strong> à gauche entoure les filtres de type, qui classent les problèmes en bugs, vulnérabilités et mauvaises pratiques (avec leur compteur). Le <strong>cadre bleu</strong> met en évidence les filtres de sévérité (bloquant, critique, majeur, mineur), qui permettent de hiérarchiser ce qu\'il faut corriger en priorité. Le <strong>cadre jaune</strong> isole l\'exemple d\'un problème détecté : on y lit le fichier concerné, la description (ici un appel correspondant partiellement à une surcharge sans « params »), son type (mauvaise pratique), sa sévérité (Low), la ligne concernée et le temps de correction estimé.',
              descriptifSavoirFaire: [
                {
                  titre: 'Mettre en place l\'analyse SonarQube via un pipeline',
                  texte: 'Pour que ces problèmes apparaissent, il a d\'abord fallu <strong class="c-red">remettre en route l\'analyse de qualité du code, qui était à l\'arrêt depuis longtemps</strong>. J\'ai écrit et configuré, dans Azure DevOps, un pipeline déclenchant l\'analyse SonarQube à chaque modification de la branche develop. Le projet était relié à SonarQube mais n\'avait plus de pipeline fonctionnel : mon travail a consisté à recréer cette automatisation, de sorte que chaque évolution du code soit désormais analysée sans intervention manuelle. La trace n°6 est le résultat direct de cette mise en place : sans le pipeline, aucun de ces problèmes ne serait remonté.',
                },
                {
                  titre: 'Interpréter les problèmes remontés et leur gradation',
                  texte: 'La trace n°6 démontre aussi ma capacité à <strong class="c-teal">lire et hiérarchiser les problèmes signalés par l\'outil</strong>. Tous les problèmes n\'ont pas la même importance : SonarQube les classe par type et par sévérité, et il faut savoir distinguer un défaut mineur d\'un problème majeur à corriger en priorité. J\'ai également dû identifier l\'origine des problèmes : certains de ceux qui subsistent proviennent du code modèle ayant servi à générer le projet, et non de mon propre code — je prévois d\'ailleurs de les supprimer également. Savoir faire ce tri évite de corriger au hasard et permet de concentrer l\'effort là où il compte.',
                },
              ],
            },
            {
              numero: '7',
              titre: 'Évolution du nombre de problèmes dans le temps',
              legende: 'Trace n°7 : graphique d\'activité de SonarQube montrant l\'évolution du nombre de problèmes du projet au fil des analyses.',
              image: `${import.meta.env.BASE_URL}image/TraceSonarQubeActivite.png`,
              descriptionGenerale: 'La trace n°7 montre le graphique d\'activité de SonarQube, qui trace l\'évolution du nombre de problèmes du projet dans le temps.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure la pointe du graphique : elle correspond au moment où j\'ai remis l\'analyse en service, le pipeline ayant alors révélé d\'un coup la trentaine de problèmes accumulés et jusque-là non détectés. Le <strong>cadre bleu</strong> souligne la redescente de la courbe : après avoir remis l\'analyse en service, j\'ai corrigé un à un les problèmes ressortis, ce qui a fait baisser la courbe. En dessous, la liste des analyses successives permet de suivre la variation du nombre de problèmes d\'une analyse à l\'autre.',
              descriptifSavoirFaire: [
                {
                  titre: 'Corriger les problèmes de qualité du code',
                  texte: 'La trace n°7 démontre ma capacité à <strong class="c-orange">traiter concrètement les problèmes remontés par l\'analyse</strong>. Une fois le pipeline en place, le projet affichait une trentaine de problèmes (la pointe du graphique). Je les ai corrigés un à un dans le code, ce qui se traduit par la redescente de la courbe. Cette trace est la preuve visuelle de mon action : je ne me suis pas contenté de mettre l\'outil en place et de constater les défauts, je les ai effectivement résorbés pour améliorer la qualité du code.',
                },
                {
                  titre: 'Suivre l\'évolution de la qualité dans le temps',
                  texte: 'La trace n°7 montre aussi que je savais <strong class="c-purple">lire la tendance de la qualité du code sur la durée</strong>. Le graphique d\'activité, complété par la liste des analyses successives en bas, permet de vérifier que chaque analyse fait bien baisser le nombre de problèmes et que les corrections produisent l\'effet attendu. Ce suivi dans le temps donne une vision de l\'évolution de la qualité, au-delà d\'un simple instantané, et permet de s\'assurer que le projet va dans le bon sens.',
                },
              ],
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
              difficulty: 'Intermediaire',
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
          difficulty: 'Intermediaire',
          level: 'Bon',
          levelBefore: 'Faible',
          levelAfter: 'Bon',
          levelBeforeText: 'Je ne connaissais pas cette notion et ce formalisme',
          levelAfterText: 'Capable de créer différents cas de test pour différents écrans avec le formalisme d\'Azure DevOps',
        },
        {
          skillName: 'Automatiser des tests de bout en bout pour une application web',
          elementaryDetails: [
            {
              name: 'Localiser des éléments graphiques sur une application low-code instable',
              context: 'Identification de points d\'ancrage fiables dans le DOM généré et mouvant de MAESTRO, pour chaque élément à piloter.',
              learningContext: 'Découvert en stage ; j\'avais des bases en HTML mais je n\'avais jamais affronté un DOM aussi instable.',
              difficulty: 'Élevé',
            },
            {
              name: 'Concevoir des wrappers d\'éléments réutilisables et robustes',
              context: 'Écriture des méthodes de ciblage d\'éléments (wrappers) produisant des sélecteurs courts, réutilisables et résistants aux évolutions de l\'interface ; la méthode GetDataControlName montrée dans la trace n°4 en est un exemple représentatif parmi l\'ensemble de ceux que j\'ai implémentés.',
              learningContext: 'Découvert en stage, en réponse directe au problème de localisation.',
              difficulty: 'Intermediaire à élevé',
            },
            {
              name: 'Coder un test automatisé avec le framework de l\'entreprise',
              context: 'Rédaction des méthodes de test en C# selon le pattern Arrange / Act / Assert, en mobilisant les helpers du framework et en gérant les temporisations propres à la Power App.',
              learningContext: 'Le framework existait déjà (développé par l\'alternant présent avant moi) ; je l\'ai pris en main et utilisé, sans le modifier, mais en discutant de pistes d\'amélioration avec l\'alternant qui travaille avec moi.',
              difficulty: 'Intermediaire',
            },
          ],
          context: 'Automatisation de tests de bout en bout sur MAESTRO, application web développée en low-code (Power Platform).',
          learningContext: 'Compétence entièrement construite lors du stage sur une application particulièrement difficile à automatiser.',
          difficulty: 'Élevé',
          level: 'Bon',
          levelBefore: 'Faible',
          levelAfter: 'Bon',
          levelBeforeText: 'En BUT, j\'avais pratiqué les tests unitaires et utilisé un outil comme Jenkins pour lancer des builds, mais je ne connaissais les tests de bout en bout que de nom. Je n\'avais jamais automatisé de test pilotant un navigateur, ni manipulé Selenium, ni testé une application aussi particulière qu\'une Power App.',
          levelAfterText: 'Je suis désormais capable d\'automatiser un test de bout en bout complet sur une application web exigeante : inspecter le DOM pour localiser un élément, concevoir une stratégie de ciblage robuste face à un code instable, et coder le test dans un framework structuré en gérant les contraintes réelles d\'exécution (temporisation, état de départ reproductible). Mon principal axe de progression reste la conception du framework lui-même : je l\'ai utilisé sans le faire évoluer, et c\'est une étape que j\'aimerais franchir.',
        },
        {
          skillName: 'Garantir la qualité du code par l\'analyse statique',
          elementaryDetails: [
            {
              name: 'Mettre en place l\'analyse SonarQube via un pipeline',
              context: 'Écriture et configuration, dans Azure DevOps, d\'un pipeline déclenchant l\'analyse SonarQube à chaque modification de la branche develop.',
              learningContext: 'Découvert en stage ; je n\'avais jamais configuré de pipeline d\'analyse de qualité.',
              difficulty: 'Intermediaire à élevé',
            },
            {
              name: 'Interpréter les problèmes remontés et leur gradation',
              context: 'Lecture des problèmes signalés, tri par type et sévérité, identification de leur origine (code modèle ou code propre).',
              learningContext: 'Découvert en stage.',
              difficulty: 'Faible à intermediaire',
            },
            {
              name: 'Corriger les problèmes de qualité du code',
              context: 'Résorption de la trentaine de problèmes révélés par la remise en service de l\'analyse.',
              learningContext: 'Découvert en stage.',
              difficulty: 'Intermediaire',
            },
            {
              name: 'Suivre l\'évolution de la qualité dans le temps',
              context: 'Lecture du graphique d\'activité et des analyses successives pour vérifier la baisse du nombre de problèmes.',
              learningContext: 'Découvert en stage.',
              difficulty: 'Faible',
            },
          ],
          context: 'Mise en place et exploitation de l\'analyse statique SonarQube sur le projet MAESTRO chez APRR.',
          learningContext: 'Compétence entièrement construite en stage, sur un projet où l\'analyse de qualité était à l\'arrêt.',
          difficulty: 'Intermediaire',
          level: 'Bon',
          levelBefore: 'Faible',
          levelAfter: 'Bon',
          levelBeforeText: 'En formation, j\'avais entendu parler des outils d\'intégration continue et de la qualité de code, mais je n\'avais jamais mis en place d\'analyse statique, ni configuré de pipeline SonarQube, ni travaillé à partir des problèmes remontés par un tel outil.',
          levelAfterText: 'Je sais désormais remettre en service et configurer une analyse SonarQube via un pipeline, interpréter les problèmes qu\'elle remonte en fonction de leur type et de leur sévérité, et les corriger pour améliorer la qualité du code, tout en suivant l\'évolution dans le temps. Il me reste cependant des points à traiter, que j\'ai identifiés mais pas encore résolus : les quelques problèmes hérités du code modèle, que je compte supprimer, et un taux de duplication du code que l\'analyse a mis en évidence. J\'ai compris l\'origine de ces duplications — des tests qui suivent la même logique d\'implémentation sur des écrans différents — et leur traitement est planifié. Cette lucidité sur ce qu\'il reste à faire fait elle-même partie de la compétence.',
        },
      ],
    },
    suiviProjet: {
      title: 'Suivi de Projet',
      resume: 'Présentation de votre capacité à suivre et gérer des projets, planifier et organiser le travail.',
      generalSkills: [
        {
          name: 'Documenter et suivre son travail',
          elementarySkills: [
            {
              name: 'Synthétiser un travail réalisé',
              color: '#4ECDC4',
              description: 'Prendre du recul sur son travail, le structurer et le hiérarchiser avant de le rédiger.',
            },
            {
              name: 'Vulgariser une procédure pour le métier',
              color: '#FF6B6B',
              description: 'Rendre une procédure technique accessible et exécutable par un public non-développeur.',
            },
            {
              name: 'Documenter techniquement pour les développeurs',
              color: '#FFB84D',
              description: 'Transmettre le détail du code et de l\'architecture à ceux qui reprendront le travail.',
            },
            {
              name: 'Suivre ses tâches dans un outil de gestion de projet',
              color: '#9B8CFF',
              description: 'Renseigner et tenir à jour ses tâches (priorité, statut, échéances) dans l\'outil partagé du projet.',
            },
          ],
          traces: [
            {
              numero: '8',
              titre: 'Documentation à destination du métier',
              legende: 'Trace n°8 : page de wiki « Procédure d\'un lancement de test sur Azure Test Plans », rédigée pour permettre au métier de lancer lui-même une campagne de test.',
              image: `${import.meta.env.BASE_URL}image/TraceDocMetier.png`,
              descriptionGenerale: 'La trace n°8 montre une page du wiki que j\'ai rédigée, intitulée « Procédure d\'un lancement de test sur Azure Test Plans ». Lorsque je suis arrivé sur le projet, il n\'existait aucune documentation des tests : je suis donc parti de zéro, en m\'inspirant de ce qui se faisait sur d\'autres projets de l\'entreprise. Cette page-ci s\'adresse au métier : elle décrit, sans vocabulaire technique, comment lancer une campagne de test.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure le titre de la page. Le <strong>cadre jaune</strong> met en évidence l\'arborescence des pages du wiki : la page « Procédure d\'un lancement de test » est celle que j\'ai rédigée, tandis que les pages « Adobe Api access » et « Aide à la conduite du COSUI » sont des pages préexistantes et génériques, non spécifiques à mon travail sur le projet. Le <strong>cadre bleu</strong> isole la première étape numérotée, « 1. Se rendre sur Test Plans », illustrant le découpage de la procédure en étapes simples et accompagnées de captures, pour qu\'une personne non technique puisse la suivre seule.',
              descriptifSavoirFaire: [
                {
                  titre: 'Vulgariser une procédure pour le métier',
                  texte: 'La trace n°8 démontre ma capacité à <strong class="c-red">rendre une procédure technique accessible à un public non-développeur</strong>. L\'enjeu n\'était pas de décrire comment les tests fonctionnent, mais de permettre à une personne du métier de les lancer en toute autonomie. J\'ai donc découpé la procédure en étapes simples et numérotées, illustrées par des captures d\'écran, en évitant le vocabulaire technique inutile. Le critère de réussite était clair : quelqu\'un qui ne connaît pas l\'outil doit pouvoir suivre la page sans aide.',
                },
                {
                  titre: 'Synthétiser un travail réalisé',
                  texte: 'Avant de documenter, il fallait <strong class="c-teal">prendre du recul sur la manipulation que je faisais moi-même au quotidien et la formaliser</strong>. Une procédure que l\'on exécute machinalement n\'est pas évidente à expliquer : il faut identifier chaque étape réellement nécessaire, dans le bon ordre, et n\'en oublier aucune. Cette mise à plat est un travail de synthèse qui précède toute rédaction.',
                },
              ],
            },
            {
              numero: '9',
              titre: 'Documentation technique pour les développeurs',
              legende: 'Trace n°9 : page de wiki « Documentation Technique » présentant et commentant le code des tests, à destination des développeurs.',
              image: `${import.meta.env.BASE_URL}image/TraceDocTechnique.png`,
              descriptionGenerale: 'La trace n°9 montre une autre partie du wiki que j\'ai rédigée, la « Documentation Technique ». Contrairement à la précédente, elle s\'adresse aux développeurs qui reprendront ou maintiendront les tests.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure l\'arborescence des pages techniques (README, Introduction, Architecture, Tests Web, Automatisation d\'un test, Explication des tests), qui structure la documentation. Le <strong>cadre jaune</strong> met en évidence le texte expliquant en clair le déroulé d\'un test (« Ce test va se dérouler en 4 étapes… »). Le <strong>cadre bleu</strong> isole le bloc de code commenté correspondant : le rapprochement de l\'explication et du code permet à un développeur de comprendre précisément ce que fait chaque test.',
              descriptifSavoirFaire: [
                {
                  titre: 'Documenter techniquement pour les développeurs',
                  texte: 'La trace n°9 démontre ma capacité à <strong class="c-orange">transmettre le détail technique de mon travail à des personnes qui devront le comprendre et le faire évoluer</strong>. Ici, le registre est inverse de celui de la trace n°8 : le vocabulaire technique est non seulement permis mais nécessaire, et le niveau de détail beaucoup plus fin (architecture, fonctionnement précis de chaque test, commentaires dans le code). C\'est une documentation de transmission, pensée pour qu\'un développeur puisse reprendre les tests sans repartir de zéro.',
                },
                {
                  titre: 'Synthétiser un travail réalisé',
                  texte: 'Comme pour la trace n°8, documenter le code supposait d\'abord de <strong class="c-teal">structurer et hiérarchiser l\'information</strong> : décider quoi expliquer, dans quel ordre, et à quel niveau de détail. L\'arborescence des pages (de l\'introduction générale jusqu\'à l\'explication d\'un test précis) est elle-même le résultat de ce travail de synthèse, qui organise un ensemble de tests en une documentation lisible.',
                },
              ],
            },
            {
              numero: '10',
              titre: 'Suivi de ses tâches dans l\'outil de gestion de projet',
              legende: 'Trace n°10 : écran « Plan d\'actions » de l\'application MAESTRO, outil partagé où je renseignais et suivais mes propres tâches.',
              image: `${import.meta.env.BASE_URL}image/TraceMAESTROActions.png`,
              descriptionGenerale: 'La trace n°10 montre l\'écran « Plan d\'actions » de MAESTRO. Particularité du projet : l\'application que je testais servait aussi d\'outil de gestion partagé pour le suivi du projet. Je testais MAESTRO sur son environnement de préproduction, mais c\'est la version en production qui était utilisée au quotidien comme outil de pilotage. Chaque ligne est une action, avec un responsable, une priorité, un statut et des dates.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure plusieurs actions qui me sont assignées (Gautier BELEY), au milieu de celles des autres membres du projet. Le <strong>cadre bleu</strong> met en évidence, pour ces actions, les colonnes de statut (« Fait ») et de dates (prévue et actualisée), par lesquelles je rendais mon avancement visible. Le <strong>cadre jaune</strong> isole une note que j\'ai rédigée sur l\'une de mes actions : je n\'y indiquais pas seulement un statut, mais détaillais ce qui allait être réalisé et renvoyais vers le fichier de suivi correspondant.',
              descriptifSavoirFaire: [
                {
                  titre: 'Suivre ses tâches dans un outil de gestion de projet',
                  texte: 'La trace n°10 démontre que je <strong class="c-purple">renseignais et tenais à jour mes propres tâches dans l\'outil de suivi partagé du projet</strong>. Pour chacune, j\'indiquais son intitulé, sa priorité, son statut d\'avancement et ses échéances, ce qui donnait au métier et à l\'équipe une visibilité directe sur ce que j\'avais fait et sur ce qu\'il me restait à faire. Je ne me limitais pas au statut : comme le montre la note ouverte au centre, <strong class="c-purple">je détaillais le contenu de mes actions par des commentaires</strong> précisant ce qui allait être fait et renvoyant vers les fichiers de suivi. Tenir ce suivi à jour faisait partie intégrante de mon travail : il ne suffisait pas de réaliser une tâche, il fallait aussi la rendre visible et traçable dans l\'outil commun, au même titre que les autres membres du projet.',
                },
              ],
            },
          ],
        },
      ],
      bilan: [
        {
          skillName: 'Documenter et suivre son travail',
          elementaryDetails: [
            {
              name: 'Synthétiser un travail réalisé',
              context: 'Mise à plat et structuration de mon travail avant chaque rédaction documentaire, pour les deux types de documentation.',
              learningContext: 'Compétence travaillée en stage, en partie transférée de la rédaction de comptes rendus vue en formation.',
              difficulty: 'Intermediaire',
            },
            {
              name: 'Vulgariser une procédure pour le métier',
              context: 'Rédaction d\'une procédure de lancement de tests destinée à un public non-technique.',
              learningContext: 'Découvert en stage ; aucune documentation n\'existait, je me suis inspiré d\'autres projets.',
              difficulty: 'Intermediaire',
            },
            {
              name: 'Documenter techniquement pour les développeurs',
              context: 'Rédaction de la documentation technique du code et de l\'architecture des tests.',
              learningContext: 'Découvert en stage.',
              difficulty: 'Intermediaire',
            },
            {
              name: 'Suivre ses tâches dans un outil de gestion de projet',
              context: 'Renseignement et mise à jour de mes tâches (intitulé, priorité, statut, échéances) dans l\'outil de suivi partagé du projet.',
              learningContext: 'Découvert en stage ; j\'avais vu le principe du suivi de projet en formation, mais jamais en conditions réelles dans un outil partagé.',
              difficulty: 'Faible',
            },
          ],
          context: 'Documentation (métier et technique) et suivi de tâches sur le projet MAESTRO chez APRR.',
          learningContext: 'Compétence consolidée en stage, sur un projet où aucune documentation n\'existait au départ.',
          difficulty: 'Intermediaire',
          level: 'Bon',
          levelBefore: 'Intermediaire',
          levelAfter: 'Bon',
          levelBeforeText: 'En BUT, j\'avais rédigé des comptes rendus et abordé les principes du suivi de projet, mais je n\'avais jamais produit de documentation destinée à des publics différents, ni tenu un suivi de tâches dans un outil partagé en entreprise.',
          levelAfterText: 'Je sais désormais produire deux types de documentation pour deux publics opposés — une procédure vulgarisée pour le métier, une documentation technique pour les développeurs — en adaptant à chaque fois le registre et le niveau de détail, ce qui est le cœur de la compétence. Le fait qu\'aucune documentation n\'existait sur le projet a renforcé cet apprentissage : j\'ai dû concevoir la structure documentaire entière, et pas seulement remplir un modèle existant. Je sais aussi rendre mon travail visible et traçable dans l\'outil de suivi partagé de l\'équipe.',
        },
      ],
    },
    integrationEntreprise: {
      title: 'Intégration en Entreprise',
      resume: 'Description de votre expérience en entreprise, vos missions et vos apprentissages professionnels.',
      generalSkills: [
        {
          name: 'S\'intégrer dans une équipe de développement',
          elementarySkills: [
            {
              name: 'Remonter les problèmes détectés à l\'équipe',
              color: '#FF6B6B',
              description: 'Signaler les bugs et anomalies repérés lors de l\'implémentation et de l\'exécution des tests.',
            },
            {
              name: 'S\'approprier les outils de collaboration de l\'entreprise',
              color: '#4ECDC4',
              description: 'Utiliser les outils partagés de l\'entreprise (écran Perturbations, Teams) selon leurs usages.',
            },
            {
              name: 'Travailler en autonomie sur un dépôt de code partagé',
              color: '#FFB84D',
              description: 'Gérer ses branches et son travail sur le dépôt Azure DevOps de manière autonome.',
            },
            {
              name: 'Intégrer son code via des pull requests',
              color: '#9B8CFF',
              description: 'Fusionner son travail dans le code commun par des pull requests, sur la bonne branche du flux.',
            },
          ],
          traces: [
            {
              numero: '11',
              titre: 'Déclaration des perturbations rencontrées',
              legende: 'Trace n°11 : écran « Perturbations » de MAESTRO, où j\'ai déclaré les problèmes rencontrés lors de l\'écriture et de l\'exécution des tests.',
              image: `${import.meta.env.BASE_URL}image/TracePerturbations.png`,
              descriptionGenerale: 'La trace n°11 montre l\'écran « Perturbations » de MAESTRO. Une perturbation est un problème qui empêche ou complique la réalisation d\'un test : bug applicatif, manque, dépendance technique… Pendant mon stage, je détectais ce type de problèmes à deux moments : lors de l\'implémentation d\'un test, quand je vérifiais le scénario, et lors de l\'exécution des tests, quand un test échouait à cause d\'un comportement anormal de l\'application. J\'en ai également remonté d\'autres directement par Teams.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure les deux perturbations que j\'ai moi-même créées (les problèmes liés au bouton d\'accès aux fiches projets et au manuel d\'utilisateur). Le <strong>cadre jaune</strong> met en évidence leur date, et le <strong>cadre bleu</strong> les colonnes « Nature / Impacts » (ici un délai rendant le test non réalisable) : en renseignant ces champs, je décrivais chaque problème de façon structurée et exploitable par le reste de l\'équipe.',
              descriptifSavoirFaire: [
                {
                  titre: 'Remonter les problèmes détectés à l\'équipe',
                  texte: 'La trace n°11 démontre que je ne me contentais pas d\'écrire et d\'exécuter des tests : j\'étais aussi <strong class="c-red">une source de remontée des problèmes vers l\'équipe</strong>. Lorsqu\'un test révélait un comportement anormal de l\'application, je le signalais à mon tuteur (le métier) et au développeur, pour qu\'il puisse être corrigé. Mon travail de test devenait ainsi un moyen de détecter des anomalies que personne n\'avait repérées, et de contribuer à la qualité du produit au-delà de ma seule mission.',
                },
                {
                  titre: 'S\'approprier les outils de collaboration de l\'entreprise',
                  texte: 'La trace n°11 montre aussi que j\'ai appris à <strong class="c-teal">utiliser les outils de collaboration propres à l\'entreprise</strong> pour communiquer ces problèmes. Plutôt que de signaler un bug de façon informelle, je le déclarais dans l\'écran Perturbations partagé avec l\'équipe, en respectant le format attendu : nature du problème, impact, date. Cette déclaration structurée, complétée par des échanges sur Teams pour les cas à traiter rapidement, m\'a permis de m\'insérer dans la manière de communiquer de l\'équipe et de rendre mes remontées exploitables par les autres.',
                },
              ],
            },
            {
              numero: '12',
              titre: 'Travail sur le dépôt de code partagé',
              legende: 'Trace n°12 : vue des branches du dépôt Azure DevOps et historique des pull requests, montrant mon travail sur le code partagé du projet.',
              image: `${import.meta.env.BASE_URL}image/TraceBranchesGit.png`,
              descriptionGenerale: 'La trace n°12 montre le dépôt Azure DevOps du projet : à gauche, la liste des branches ; au centre, l\'historique des commits et des pull requests.<br><br>Sur cette capture, le <strong>cadre rouge</strong> entoure la branche develop, marquée « Default », autour de laquelle s\'organise le travail. Le <strong>cadre bleu</strong> regroupe mes propres branches feature, classées sous « Mine » (feature/SeparationTests, feature/testJalons&Livrables), parmi celles des autres membres du projet. Le <strong>cadre jaune</strong> met en évidence des pull requests que j\'ai créées et fusionnées (« Merged PR … : Adaptation de test à cause de changement dans la preprod »). Le <strong>cadre violet</strong> isole la colonne Status, où chaque intégration déclenche un build : certains réussissent (« succeeded »), d\'autres échouent (« failed »), et je m\'adapte alors pour corriger ce qui a fait échouer le build.',
              descriptifSavoirFaire: [
                {
                  titre: 'Travailler en autonomie sur un dépôt de code partagé',
                  texte: 'La trace n°12 démontre ma capacité à <strong class="c-orange">travailler de façon autonome sur une base de code commune à l\'équipe</strong>. Pour chaque sujet, je créais ma propre branche feature à partir de la branche par défaut, j\'y développais mes tests, puis j\'intégrais mon travail. J\'ai mené l\'essentiel de ce travail seul sur le projet, ce qui m\'a demandé de m\'organiser et de gérer mon dépôt de bout en bout. Nous avons toutefois pu réaliser diverses revues de code au cours de l\'implémentation : elles ont apporté un regard extérieur au mien qui m\'a aidé à produire un code de meilleure qualité.',
                },
                {
                  titre: 'Intégrer son code via des pull requests',
                  texte: 'La trace n°12 montre les nombreuses pull requests que j\'ai créées et fusionnées (les « Merged PR » de l\'historique). La pull request est le moment où mon travail rejoint le code commun : plutôt que de modifier directement la base partagée, je passais par une branche dédiée puis par une PR, ce qui <strong class="c-purple">permet d\'intégrer proprement son code et de déclencher les vérifications automatiques</strong> (on voit les builds associés réussir ou échouer dans la colonne Status). J\'ai aussi appris à quoi servait chaque branche dans ce flux : l\'exécution des tests sur la machine virtuelle se base sur main, tandis que l\'analyse SonarQube s\'effectue sur develop. Connaître cette répartition était nécessaire pour intégrer mon code sur la bonne branche selon l\'objectif visé.',
                },
              ],
            },
          ],
        },
      ],
      bilan: [
        {
          skillName: 'S\'intégrer dans une équipe de développement',
          elementaryDetails: [
            {
              name: 'Remonter les problèmes détectés à l\'équipe',
              context: 'Signalement des bugs et anomalies repérés lors de l\'implémentation et de l\'exécution des tests, auprès du tuteur et du développeur.',
              learningContext: 'Développé en stage, au contact direct de l\'équipe.',
              difficulty: 'Faible',
            },
            {
              name: 'S\'approprier les outils de collaboration de l\'entreprise',
              context: 'Déclaration structurée des perturbations dans l\'outil partagé et échanges via Teams.',
              learningContext: 'Découvert en stage ; je ne connaissais pas ces outils ni les usages de communication de l\'entreprise.',
              difficulty: 'Faible',
            },
            {
              name: 'Travailler en autonomie sur un dépôt de code partagé',
              context: 'Gestion de mes branches et de mon travail sur le dépôt Azure DevOps, majoritairement seul.',
              learningContext: 'J\'avais utilisé Git en formation, mais jamais sur un dépôt d\'entreprise partagé avec plusieurs contributeurs.',
              difficulty: 'Intermediaire',
            },
            {
              name: 'Intégrer son code via des pull requests',
              context: 'Création et fusion de pull requests sur develop et main, en tenant compte du rôle de chaque branche.',
              learningContext: 'Découvert en stage ; je connaissais les branches mais pas la pratique des pull requests ni l\'organisation main/develop/feature.',
              difficulty: 'Intermediaire',
            },
          ],
          context: 'Intégration dans l\'équipe de développement du projet MAESTRO chez APRR.',
          learningContext: 'Compétence construite en stage, au contact de l\'équipe et des outils de l\'entreprise.',
          difficulty: 'Intermediaire',
          level: 'Bon',
          levelBefore: 'Faible',
          levelAfter: 'Bon',
          levelBeforeText: 'En formation, j\'avais utilisé Git pour des projets personnels ou scolaires (commits, branches simples), mais je n\'avais jamais travaillé sur un dépôt d\'entreprise partagé, ni utilisé les pull requests, ni intégré mon code dans un flux de branches structuré. Je n\'avais pas non plus l\'expérience de la communication au sein d\'une équipe technique en entreprise.',
          levelAfterText: 'Je sais désormais m\'intégrer dans une équipe de développement : travailler sur un dépôt partagé en respectant son organisation de branches, intégrer mon code proprement via des pull requests, et remonter les problèmes que je détecte par les canaux de l\'équipe. Le fait d\'avoir souvent travaillé seul sur mon périmètre m\'a rendu autonome dans la gestion de mon code, tout en sachant solliciter des revues de code régulières pour bénéficier d\'un regard extérieur et améliorer la qualité de ce que je produisais. Mon intégration est aussi passée par de nombreux échanges que cette page ne peut pas illustrer par une trace : des discussions à l\'oral, des réunions de suivi et des remontées via Teams, qui ont fait partie de mon quotidien et de mon insertion dans l\'équipe.',
        },
      ],
    },
  },
}
 