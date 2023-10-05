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
          box.classList.add('hidden'); 
          box.removeChild(textElement); 

          // Passer à la box suivante ou arrêter si c'est la dernière
          currentBoxIndex++;

          // Petit moment de "silence"
          setTimeout(() => {
            // Si on a atteint la fin des box, on affiche la final-box
            if (currentBoxIndex === boxes.length) {
              showFinalBox();
            } else if (currentBoxIndex < boxes.length) {
              showBox();
            }
          }, 300); // temps de "silence" entre les box
          
        }, { once: true }); // L'eventListener se retire automatiquement après être exécuté une fois
        
      }, 200 + 300); // temps avant que la box disparaisse après le texte (+2000 pour laisser la transition se terminer)

    }, 2000); // temps avant que le texte disparaisse

  }, 500); // temps avant que le texte apparaisse
}

function showFinalBox() {
  const finalBox = document.querySelector('.final-box');
  const hugeLogo = document.querySelector('.huge-logo');
  
  finalBox.classList.remove('hidden');

  requestAnimationFrame(() => {
    finalBox.style.opacity = '1';
  });

  // Déclenchez l'animation du SVG après un certain délai
  setTimeout(() => {
    hugeLogo.classList.add('animate');
  }, 2000); // Remplacez 2000 (2s) par le délai souhaité
}


// Démarrer l'animation
showBox();





