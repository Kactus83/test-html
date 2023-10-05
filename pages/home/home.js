const boxes = document.querySelectorAll('.box');
let currentBoxIndex = 0;

function showBox() {
  const box = boxes[currentBoxIndex];

  box.classList.remove('hidden'); // Assurez-vous que la box est visible (display: flex)
  
  // Apparaît la box
  box.style.opacity = '1';

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
          
          currentBoxIndex++;

          // Petit moment de "silence"
          setTimeout(() => {
            if (currentBoxIndex < boxes.length) {
              showBox();
            }
          }, 1000); 
          
        }, { once: true }); 

      }, 1000 + 500); 

    }, 1000); 

  }, 2000);
}

showBox();
