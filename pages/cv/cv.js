document.addEventListener("DOMContentLoaded", function() {
    let blocks = document.querySelectorAll('.column-block');
    let isHovered = false;
    let animatedBlocksIndices = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function animateRandomBlock() {
        if(isHovered) return;

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
