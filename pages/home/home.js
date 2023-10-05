const boxes = document.querySelectorAll('.box');
let currentBoxIndex = 0;

function showBox() {
  const box = boxes[currentBoxIndex];
  
  // Assurez-vous que la box est visible (display: flex)
  box.classList.remove('hidden');

  // Donnez un petit délai pour permettre au navigateur de faire le layout avant de commencer la transition
  requestAnimationFrame(() => {
    // Apparaît la box
    box.style.opacity = '1';
  });

  const textElement = document.createElement('p');
  textElement.className = 'text';
  textElement.innerText = box.getAttribute('data-text');
  box.appendChild(textElement);

  // Attendre un moment avant de montrer le texte
  setTimeout(() => {
    textElement.style.opacity = '1';

    // Attendre un moment avant de cacher le texte
    setTimeout(() => {
      textElement.style.opacity = '0';

      // Attendre un moment puis cacher la box
      setTimeout(() => {
        box.style.opacity = '0';
        
        box.addEventListener('transitionend', () => {
          box.classList.add('hidden'); // La transition d'opacité est terminée, cacher la box (display: none)
          box.removeChild(textElement); // Nettoyer le texte pour la prochaine fois

          // Passer à la box suivante ou arrêter si c'est la dernière
          currentBoxIndex++;

          // Petit moment de "silence"
          setTimeout(() => {
            if (currentBoxIndex < boxes.length) {
              showBox();
            }
          }, 1000); // temps de "silence" entre les box
          
        }, { once: true }); // L'eventListener se retire automatiquement après être exécuté une fois
        
      }, 500 + 2500); // temps avant que la box disparaisse après le texte (+2000 pour laisser la transition se terminer)

    }, 2500); // temps avant que le texte disparaisse

  }, 1500); // temps avant que le texte apparaisse
}

// Démarrer l'animation
showBox();
