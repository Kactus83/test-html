/*
* Animation lancer de confettis
*/

function lancerConfettis(callback) {
    const button = document.querySelector(".enter-button");
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 150; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 250; 

        confetti.style.left = (centerX + distance * Math.cos(angle)) + 'px';
        confetti.style.top = (centerY + distance * Math.sin(angle)) + 'px';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;

        document.body.appendChild(confetti);

        confetti.addEventListener('animationend', function() {
            confetti.remove();
        });
    }

    // Call back for redirection
    if (callback) {
        setTimeout(callback, 1300);
    }
}

/*
* Trigger
*/
function onEnterButtonClick() {
    const enterButton = document.querySelector('#landingSection');
    enterButton.style.visibility = 'hidden';

    lancerConfettis(function() {
        location.href = '../home/home.html';
    });
}

