import projects from '../../assets/projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.querySelector('.projects-grid');

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="Capture d'écran du projet ${project.name}" class="project-thumbnail">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
            <div class="project-actions">
                <a href="${project.githubUrl}" target="_blank" class="btn-view-github">Voir sur GitHub</a>
                <a href="/pages/github-project/github-project.html?id=${index}" class="btn-details">Détails</a>
            </div>
        `;

        projectGrid.appendChild(projectCard);
    });
});
