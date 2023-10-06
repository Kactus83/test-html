/*
* Cinematic animation of the boxes
*/

// Number of boxes
const boxes = document.querySelectorAll('.box');

// Index for loop
let currentBoxIndex = 0;


// Make box visible one after one
function showBox() {
  const box = boxes[currentBoxIndex];
  
  // Remove hidden from current index box
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
          box.classList.add('hidden'); 
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

    }, 2000); // Text fadeout delay

  }, 500); // Text fadein delay
}

// Final box is big svg logo that doesn't disapear
function showFinalBox() {
  const finalBox = document.querySelector('.final-box');
  const hugeLogo = document.querySelector('.huge-logo');
  const nav = document.querySelector('nav'); 
  
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
}

// Animation start
showBox();





