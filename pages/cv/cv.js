document.addEventListener("DOMContentLoaded", function() {
    let blocks = document.querySelectorAll('.column-block');
    let isHovered = false;
    let animatedBlocksIndices = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function animateRandomBlock() {
        if(isHovered) {
            // Si un bloc est survolé, retirez l'animation de tous les blocs
            blocks.forEach(block => {
                block.classList.remove('animate-bg');
            });
            return;  // Ne continuez pas à ajouter une nouvelle animation
        }

        // Si tous les blocs ont été animés, réinitialiser le tableau
        if(animatedBlocksIndices.length === blocks.length) {
            animatedBlocksIndices = [];
        }

        // Choix d'un bloc qui n'a pas encore été animé
        let newBlockIndex;
        do {
            newBlockIndex = getRandomInt(blocks.length);
        } while (animatedBlocksIndices.includes(newBlockIndex));

        // Ajouter l'index du nouveau bloc au tableau et appliquer l'animation
        animatedBlocksIndices.push(newBlockIndex);
        blocks.forEach((block, index) => {
            block.classList.toggle('animate-bg', index === newBlockIndex);
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            isHovered = true;
            block.classList.add('hover-bg');
        });

        block.addEventListener('mouseleave', () => {
            isHovered = false;
            block.classList.remove('hover-bg');
        });
    });

    setInterval(animateRandomBlock, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    let childBlocks = document.querySelectorAll('.column-child-block');

    childBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            let listItems = block.querySelectorAll('.info-list li');
            listItems.forEach((li, index) => {
                // Définissez un délai basé sur l'index pour que chaque élément commence à clignoter après le précédent
                li.style.animationDelay = `${index * 0.333333}s`;
                li.classList.add('blinking');
            });
        });

        block.addEventListener('mouseleave', () => {
            let listItems = block.querySelectorAll('.info-list li');
            listItems.forEach(li => {
                // Réinitialisez le délai d'animation et retirez la classe de clignotement
                li.style.animationDelay = `0s`;
                li.classList.remove('blinking');
            });
        });
    });
});

