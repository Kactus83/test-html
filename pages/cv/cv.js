document.addEventListener("DOMContentLoaded", function() {

    // Array to store column blocks and thoses wich have been animated
    let blocks = document.querySelectorAll('.column-block');
    let animatedBlocksIndices = [];
    // Flag to state if one block is hovered
    let isHovered = false;

    // Util function to get random numer
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function animateRandomBlock() {

        // If one block is hovered, no animation on the others
        if(isHovered) {
            blocks.forEach(block => {
                block.classList.remove('animate-bg');
            });
            return; 
        }

        // If all blocks have been animated, clean array
        if(animatedBlocksIndices.length === blocks.length) {
            animatedBlocksIndices = [];
        }

        // Choose new random block
        let newBlockIndex;
        do {
            newBlockIndex = getRandomInt(blocks.length);
        } while (animatedBlocksIndices.includes(newBlockIndex));

        // Animate block and store index in animated blocks array
        animatedBlocksIndices.push(newBlockIndex);
        blocks.forEach((block, index) => {
            block.classList.toggle('animate-bg', index === newBlockIndex);
        });
    }

    // Add listeners to edit isHovered flag
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

    // Launch animations and listeners
    setInterval(animateRandomBlock, 5000);
});


/*
* List elements blink animation when parent block is hovered
*/
document.addEventListener("DOMContentLoaded", function() {
    let childBlocks = document.querySelectorAll('.column-child-block');

    childBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            let listItems = block.querySelectorAll('.info-list li');
            listItems.forEach((li, index) => {
                // TODO : dynamic time of delay (calculated with number of blocs)
                li.style.animationDelay = `${index * 0.333333}s`;
                li.classList.add('blinking');
            });
        });

        block.addEventListener('mouseleave', () => {
            let listItems = block.querySelectorAll('.info-list li');
            listItems.forEach(li => {
                li.style.animationDelay = `0s`;
                li.classList.remove('blinking');
            });
        });
    });
});

