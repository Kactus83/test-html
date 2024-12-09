import projects from '../../assets/projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId === null || !projects[projectId]) {
        console.error("Projet non trouvé ou ID invalide.");
        return;
    }

    const project = projects[projectId];

    // Injecter les données dans la page
    document.querySelector('.project-title').textContent = project.title;
    document.querySelector('.project-summary').textContent = project.description;

    // Galerie
    const gallery = document.querySelector('.gallery');
    project.gallery.forEach(item => {
        if (item.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.setAttribute('controls', true);
            video.innerHTML = `<source src="${item}" type="video/mp4">`;
            gallery.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.setAttribute('src', item);
            gallery.appendChild(img);
        }
    });

    // Technologies
    const techList = document.querySelector('.tech-list');
    project.technologies.forEach(tech => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="tech-name">${tech}</span>`;
        techList.appendChild(li);
    });

    // Statut et prochaines étapes
    document.querySelector('.project-status p strong').textContent = project.status;
    const nextStepsList = document.querySelector('.next-steps');
    project.nextSteps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        nextStepsList.appendChild(li);
    });

    // Documentation & Liens
    const resourcesList = document.querySelector('.resources-list');
    if (project.resources.github) {
        resourcesList.innerHTML += `<li><a href="${project.resources.github}" target="_blank">Code Source sur GitHub</a></li>`;
    }
    if (project.resources.documentation) {
        resourcesList.innerHTML += `<li><a href="${project.resources.documentation}" target="_blank">Documentation Technique</a></li>`;
    }
    if (project.resources.demo) {
        resourcesList.innerHTML += `<li><a href="${project.resources.demo}" target="_blank">Démonstration en Ligne</a></li>`;
    }
});
