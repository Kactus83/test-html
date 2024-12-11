/*
* Cinematic animation of the boxes
*/

// Number of boxes
const boxes = document.querySelectorAll('.box');

// Index for loop
let currentBoxIndex = 0;

// Function to animate text letter by letter
function typeWriter(text, element, delay = 50) {
    let index = 0;
    function addLetter() {
        if (index < text.length) {
            element.innerHTML += text[index] === ' ' ? '&nbsp;' : text[index];
            index++;
            setTimeout(addLetter, delay);
        }
    }
    addLetter();
}

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
    const textElement = document.createElement('p');
    textElement.className = 'text';
    box.appendChild(textElement);

    // Delay before starting the typewriter effect
    setTimeout(() => {
        // Animate text letter by letter
        typeWriter(box.getAttribute('data-text'), textElement, 50);

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
                        // Make box disappear
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
                        }, 100); // Silence delay
                        
                    }, { once: true }); // Event listener
                    
                }, 200); // Box fadeout delay

            }, 2000); // Text fadeout delay

        }, 500); // Text fadein delay

    }, 800); // Delay before starting the typewriter effect
}

// Final box is big svg logo that doesn't disappear
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
