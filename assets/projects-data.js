const projectsData = [
    {
        id: 1,
        name: "Memory Game",
        description: "Un jeu de mémoire interactif développé en JavaScript.",
        longDescription: "Le Memory Game est un projet réalisé dans le cadre des études. Les joueurs doivent associer des paires de cartes identiques dans un temps limité, géré via un simple setInterval en JavaScript. Ce projet a permis de développer des compétences en manipulation DOM et en gestion de l'état. Les prochaines étapes incluent l'ajout de niveaux de difficulté et d'un système de stockage des scores des joueurs.",
        languages: ["JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/memory-game",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/memory-game/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/memory-game/main/screenshot1.png",
            "https://raw.githubusercontent.com/Kactus83/memory-game/main/screenshot2.png"
        ],
        technologies: ["React"],
        status: "Terminé",
        nextSteps: ["Ajout de niveaux de difficulté", "Stockage des scores des joueurs"],
        resources: {
            documentation: "",
            demo: "https://memorygame.demo.com"
        }
    },
    {
        id: 2,
        name: "Space Invaders",
        description: "Une version moderne du classique jeu Space Invaders, utilisant JavaScript et p5.js.",
        longDescription: "Space Invaders revisité est une version modernisée du jeu classique avec des fonctionnalités avancées. Les thèmes graphiques sont dynamiques et peuvent être ajoutés par les joueurs, car ils reposent sur des SVG standardisés. En développement, un système de compétences permet de gagner des boosts tels que le double coup ou l'armure réfléchissante. Le moteur de jeu, écrit en TypeScript, utilise Fabric.js pour l'affichage et intègre une gestion optimisée des collisions basée sur des zones.",
        languages: ["JavaScript", "TypeScript", "p5.js"],
        githubUrl: "https://github.com/Kactus83/space-invaders",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/space-invaders/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/space-invaders/main/screenshot1.png",
            "https://raw.githubusercontent.com/Kactus83/space-invaders/main/screenshot2.png"
        ],
        technologies: ["FabricJS"],
        status: "En cours",
        nextSteps: ["Ajout de niveaux", "Finalisation du système de compétences"],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 3,
        name: "Custom Logger",
        description: "Un module de journalisation personnalisée en TypeScript.",
        longDescription: "Ce module est conçu pour s'intégrer dans des environnements Docker, avec un affichage adapté aux consoles Docker centralisées. Il prend en charge les journaux classiques (erreurs, débogage, suivi) et est actuellement implémenté via un modèle d'héritage. Une démonstration d'utilisation est disponible dans un projet fictif. À l'avenir, une refonte pour utiliser la composition est envisagée pour améliorer la modularité.",
        languages: ["TypeScript"],
        githubUrl: "https://github.com/Kactus83/custom-logger",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/custom-logger/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/custom-logger/main/screenshot1.png"
        ],
        technologies: [],
        status: "Terminé",
        nextSteps: ["Migration vers un modèle basé sur la composition"],
        resources: {
            documentation: "",
            demo: "https://github.com/Kactus83/custom-logging-module-TEST"
        }
    },
    {
        id: 4,
        name: "Custom Logging Module TEST",
        description: "Un module de test pour la journalisation personnalisée en TypeScript.",
        longDescription: "Ce projet est une application fictive illustrant l'utilisation du module Custom Logger. Bien qu'aucun test unitaire ou fonctionnel n'ait été implémenté, l'application simule plusieurs services pour démontrer l'efficacité du logger dans un contexte réel.",
        languages: ["TypeScript"],
        githubUrl: "https://github.com/Kactus83/custom-logging-module-TEST",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/custom-logging-module-TEST/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/custom-logging-module-TEST/main/screenshot1.png"
        ],
        technologies: [],
        status: "En cours",
        nextSteps: ["Ajout de tests unitaires"],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 5,
        name: "Theme Color Generator",
        description: "Un générateur de palettes de couleurs thématiques.",
        longDescription: "Ce projet génère dynamiquement des palettes de couleurs basées sur des algorithmes de nuances spécifiques. Il offre une prévisualisation en temps réel et exporte des styles CSS prêts à être intégrés manuellement dans des projets. Les prochaines étapes incluent l'intégration avec des frameworks comme React et Angular.",
        languages: ["TypeScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/theme-color-generator",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/theme-color-generator/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/theme-color-generator/main/screenshot1.png",
            "https://raw.githubusercontent.com/Kactus83/theme-color-generator/main/screenshot2.png"
        ],
        technologies: [],
        status: "En cours",
        nextSteps: ["Intégration avec des frameworks", "Export direct pour React/Angular"],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 6,
        name: "Simple HTML Web Boilerplate",
        description: "Un modèle de base pour les projets web en HTML.",
        longDescription: "Ce boilerplate offre une base légère pour des sites vitrines ou des portfolios. Il inclut une gestion CSS des thèmes dynamiques et propose plusieurs mises en page standard. Destiné aux débutants, il peut être utilisé comme point de départ pour des projets simples sans framework.",
        languages: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Kactus83/simple-html-web-boilerplate",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/simple-html-web-boilerplate/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/simple-html-web-boilerplate/main/screenshot1.png"
        ],
        technologies: ["CSS Variables"],
        status: "Terminé",
        nextSteps: ["Ajout de templates dynamiques"],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 7,
        name: "Taxes Calculator",
        description: "Une application pour calculer les taxes sur les revenus.",
        longDescription: "Ce projet académique est une démonstration des compétences en Java et en conception d'interfaces graphiques. L'application permet de calculer des taxes ou des réductions en fonction d'un taux donné. Bien qu'elle ne soit pas destinée à un usage professionnel, elle illustre les bases du développement de calculatrices interactives.",
        languages: ["Java", "CSS"],
        githubUrl: "https://github.com/Kactus83/TaxesCalculator",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/TaxesCalculator/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/TaxesCalculator/main/screenshot1.png"
        ],
        technologies: ["JavaFX"],
        status: "En cours",
        nextSteps: ["Ajout de cas d'utilisation fictifs"],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 8,
        name: "Chrome GPT Extension",
        description: "Une extension Chrome intégrant GPT pour améliorer la navigation.",
        longDescription: "Cette extension permet d'effectuer quatre actions sur du texte sélectionné : expliquer, résumer, résoudre un problème, ou répondre à un message. Les actions sont accessibles via un menu contextuel, et les résultats sont affichés dans une fenêtre pop-up. Bien que fonctionnelle, l'extension est avant tout un projet expérimental personnel.",
        languages: ["TypeScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/chrome-gpt-extension",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/chrome-gpt-extension/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/chrome-gpt-extension/main/screenshot1.png"
        ],
        technologies: ["Chrome Extension API"],
        status: "Terminé",
        nextSteps: ["Amélioration des performances"],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 9,
        name: "Chrome Slither Score Extension",
        description: "Une extension Chrome pour suivre les scores dans le jeu Slither.io.",
        longDescription: "Cette extension permet de jouer à plusieurs joueurs en mode alterné, en stockant les scores et temps de jeu dans le local storage. Elle gère également la rotation automatique des joueurs. À l'avenir, des fonctionnalités sociales comme le partage et les compétitions pourraient être ajoutées.",
        languages: ["TypeScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/chrome-slither-score-extension",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/chrome-slither-score-extension/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/chrome-slither-score-extension/main/screenshot1.png"
        ],
        technologies: ["Chrome Extension API"],
        status: "En cours",
        nextSteps: ["Ajout de fonctionnalités sociales"],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 10,
        name: "IoT",
        description: "Un projet explorant l'Internet des objets avec des capteurs connectés.",
        longDescription: "Ce projet vise à standardiser les interactions entre des objets connectés et Home Assistant. Organisé en trois parties principales (modules hardware, communication, logique métier), il permet de gérer des capteurs variés comme les capteurs de CO2, de température, et des bandeaux LED WS2812. Le projet facilite également la création d'objets connectés en adaptant automatiquement les services et modules aux spécifications matérielles.",
        languages: ["Python", "C++"],
        githubUrl: "https://github.com/Kactus83/IoT",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/IoT/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/IoT/main/screenshot1.png"
        ],
        technologies: ["Platform IO", "MQTT"],
        status: "En cours",
        nextSteps: ["Intégration avec plus de protocoles", "Documentation pour développeurs"],
        resources: {
            documentation: "",
            demo: ""
        }
    }
];

export default projectsData;
