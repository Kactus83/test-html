const projectsData = [
    {
        id: 1,
        name: "Memory Game",
        description: "Un jeu de mémoire interactif développé en JavaScript.",
        languages: ["JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/memory-game",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/memory-game/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/memory-game/main/screenshot1.png",
            "https://raw.githubusercontent.com/Kactus83/memory-game/main/screenshot2.png"
        ],
        technologies: ["JavaScript", "HTML", "CSS"],
        status: "Terminé",
        nextSteps: ["Amélioration de la compatibilité mobile."],
        resources: {
            documentation: "",
            demo: "https://memorygame.demo.com"
        }
    },
    {
        id: 2,
        name: "Space Invaders",
        description: "Une version moderne du classique jeu Space Invaders, utilisant JavaScript et p5.js.",
        languages: ["JavaScript", "p5.js"],
        githubUrl: "https://github.com/Kactus83/space-invaders",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/space-invaders/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/space-invaders/main/screenshot1.png",
            "https://raw.githubusercontent.com/Kactus83/space-invaders/main/screenshot2.png"
        ],
        technologies: ["JavaScript", "p5.js"],
        status: "En cours",
        nextSteps: ["Ajout de niveaux supplémentaires.", "Amélioration du design des ennemis."],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 3,
        name: "Custom Logger",
        description: "Un module de journalisation personnalisée en TypeScript.",
        languages: ["TypeScript"],
        githubUrl: "https://github.com/Kactus83/custom-logger",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/custom-logger/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/custom-logger/main/screenshot1.png"
        ],
        technologies: ["TypeScript"],
        status: "Terminé",
        nextSteps: ["Documentation complète des exemples."],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 4,
        name: "Custom Logging Module TEST",
        description: "Un module de test pour la journalisation personnalisée en TypeScript.",
        languages: ["TypeScript"],
        githubUrl: "https://github.com/Kactus83/custom-logging-module-TEST",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/custom-logging-module-TEST/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/custom-logging-module-TEST/main/screenshot1.png"
        ],
        technologies: ["TypeScript"],
        status: "En cours",
        nextSteps: ["Ajout de tests unitaires."],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 5,
        name: "Theme Color Generator",
        description: "Un générateur de palettes de couleurs thématiques.",
        languages: ["JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/theme-color-generator",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/theme-color-generator/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/theme-color-generator/main/screenshot1.png",
            "https://raw.githubusercontent.com/Kactus83/theme-color-generator/main/screenshot2.png"
        ],
        technologies: ["JavaScript", "HTML", "CSS"],
        status: "En cours",
        nextSteps: ["Optimisation de l'interface utilisateur.", "Ajout de palettes générées dynamiquement."],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 6,
        name: "Simple HTML Web Boilerplate",
        description: "Un modèle de base pour les projets web en HTML.",
        languages: ["HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/simple-html-web-boilerplate",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/simple-html-web-boilerplate/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/simple-html-web-boilerplate/main/screenshot1.png"
        ],
        technologies: ["HTML", "CSS"],
        status: "Terminé",
        nextSteps: ["Intégration de templates dynamiques."],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 7,
        name: "Taxes Calculator",
        description: "Une application pour calculer les taxes sur les revenus.",
        languages: ["JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/TaxesCalculator",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/TaxesCalculator/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/TaxesCalculator/main/screenshot1.png"
        ],
        technologies: ["JavaScript", "HTML", "CSS"],
        status: "En cours",
        nextSteps: ["Ajout d'une interface utilisateur graphique."],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 8,
        name: "Chrome GPT Extension",
        description: "Une extension Chrome intégrant GPT pour améliorer la navigation.",
        languages: ["JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/chrome-gpt-extension",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/chrome-gpt-extension/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/chrome-gpt-extension/main/screenshot1.png"
        ],
        technologies: ["JavaScript", "HTML", "CSS"],
        status: "Terminé",
        nextSteps: ["Amélioration des performances."],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 9,
        name: "Chrome Slither Score Extension",
        description: "Une extension Chrome pour suivre les scores dans le jeu Slither.io.",
        languages: ["JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/Kactus83/chrome-slither-score-extension",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/chrome-slither-score-extension/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/chrome-slither-score-extension/main/screenshot1.png"
        ],
        technologies: ["JavaScript", "HTML", "CSS"],
        status: "En cours",
        nextSteps: ["Ajouter une intégration avec un tableau de bord."],
        resources: {
            documentation: "",
            demo: ""
        }
    },
    {
        id: 10,
        name: "IoT",
        description: "Un projet explorant l'Internet des objets avec des capteurs connectés.",
        languages: ["Python", "C++"],
        githubUrl: "https://github.com/Kactus83/IoT",
        imageUrl: "https://raw.githubusercontent.com/Kactus83/IoT/main/screenshot.png",
        gallery: [
            "https://raw.githubusercontent.com/Kactus83/IoT/main/screenshot1.png"
        ],
        technologies: ["Python", "C++"],
        status: "En cours",
        nextSteps: ["Intégration avec des plateformes cloud."],
        resources: {
            documentation: "",
            demo: ""
        }
    }
];

export default projectsData;
