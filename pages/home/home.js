/*
* Cinematic animation of the boxes
*/

// Number of boxes
const boxes = document.querySelectorAll('.box');

// Index for loop
let currentBoxIndex = 0;


// Make box visible one after one
function showBox() {

  // Hide pointer
  document.getElementById('cursor').style.opacity = 0;

  // Select the good box
  const box = boxes[currentBoxIndex];
  
  // Remove hidden and no-display from current index box
  // Two steps are needed to avoid display bugs
  box.classList.add('hidden');
  box.classList.remove('no-display');
  box.classList.remove('hidden');

  requestAnimationFrame(() => {
    box.style.opacity = '1';
  });

  // Create the text element
  // TODO : Write letter after letter with animation //=========>
  const textElement = document.createElement('p');
  textElement.className = 'text';
  textElement.innerText = box.getAttribute('data-text');
  box.appendChild(textElement);

  // Text fadein delay
  setTimeout(() => {
    textElement.style.opacity = '1';

    // Text fadeout delay
    setTimeout(() => {
      textElement.style.opacity = '0';

      // Box fadeout delay
      setTimeout(() => {
        box.style.opacity = '0';
        
        box.addEventListener('transitionend', () => {
          // Make bloc disapear
          // Two steps to avoid animations display bugs
          box.classList.add('hidden'); 
          box.classList.add('no-display'); 
          box.classList.remove('hidden'); 
          box.removeChild(textElement); 

          // Silence
          setTimeout(() => {

            // Increment box index
            currentBoxIndex++;

            // If last box, show final box
            if (currentBoxIndex === boxes.length) {
              showFinalBox();
            } else if (currentBoxIndex < boxes.length) {
              showBox();
            }
          }, 300); // Silence delay
          
        }, { once: true }); // Event listener
        
      }, 200 + 300); // Box fadeout delay

    }, 3500); // Text fadeout delay

  }, 500); // Text fadein delay
}

// Final box is big svg logo that doesn't disapear
function showFinalBox() {
  const finalBox = document.querySelector('.final-box');
  const hugeLogo = document.querySelector('.huge-logo');
  const nav = document.querySelector('nav'); 
  
  finalBox.classList.add('hidden');
  finalBox.classList.remove('no-display');
  finalBox.classList.remove('hidden');

  requestAnimationFrame(() => {
      finalBox.style.opacity = '1';
  });

  setTimeout(() => {
      hugeLogo.classList.add('animate');
  }, 100);

  setTimeout(() => {
      nav.classList.add('visible');
  }, 4000); 
    
  // Show pointer
  document.getElementById('cursor').style.opacity = 1;
}

// Animation start
showBox();




