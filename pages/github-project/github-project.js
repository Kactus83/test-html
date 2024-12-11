import projects from '../../assets/projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId === null || !projects[projectId]) {
        console.error("Projet non trouvé ou ID invalide.");
        return;
    }

    const project = projects[projectId - 1];

    // Injecter les données dans la page
    document.querySelector('.project-title').textContent = project.name;
    document.querySelector('.project-summary').textContent = project.description;
    document.querySelector('.project-long-description').textContent = project.longDescription;

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
            img.classList.add('gallery-item');
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

    // Gestion des onglets
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            tab.classList.add('active');
            document.querySelector(`#${tab.dataset.tab}`).classList.add('active');
        });
    });

    // Afficher le premier onglet par défaut
    document.querySelector('.tab-content#description').classList.add('active');
});
