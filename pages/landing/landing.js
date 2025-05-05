let canvas, ctx; // Déclare canvas et ctx en dehors de toute fonction pour qu'ils soient accessibles partout
let particles = [];
let particleCreationEnabled = true; // Variable de contrôle pour la création de particules

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

    // Stop particle creation
    particleCreationEnabled = false;

    // Clear existing particles and canvas
    particles = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lancerConfettis(function() {
        location.href = '../home/home.html';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    /*
    * Canvas setup
    */
    canvas = document.getElementById('particleCanvas'); // Initialise canvas ici
    ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    let mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };

    // Update mouse position
    canvas.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    /*
    * Particle class
    */
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = -Math.random() * 3 - 1; // Particles move upwards
            this.color = this.getRandomColor();
            this.life = 250;
            this.attracted = false;
        }
        
        getRandomColor() {
            const colors = [
                getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-accent').trim(),
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
            // Calculate distance to mouse
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            // Apply attraction force
            if (distance < 500) {
                this.attracted = true;
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = 500;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * 0.1; // Adjust force strength
                let directionY = forceDirectionY * force * 0.1;

                this.speedX += directionX;
                this.speedY += directionY;
            } else {
                this.attracted = false;
            }

            this.x += this.speedX;
            this.y += this.speedY;
            
            // Reduce life faster if attracted
            if (this.attracted) {
                this.life -= 2;
            } else {
                this.life -= 1;
            }
        }
        
        draw() {
            ctx.fillStyle = this.color; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    const createParticle = () => {
        if (particleCreationEnabled) {
            const posX = Math.random() * canvas.width;
            const posY = canvas.height; // Start from the bottom
            particles.push(new Particle(posX, posY));
        }
    };

    const createParticleBurst = () => {
        const burstInterval = setInterval(() => {
            if (particleCreationEnabled) {
                for (let i = 0; i < 10; i++) {
                    createParticle();
                }
            }
        }, 50);

        setTimeout(() => {
            clearInterval(burstInterval);
            scheduleNextBurst(); // Schedule the next burst after this one ends
        }, 500);
    };
    
    const scheduleNextBurst = () => {
        const randomDelay = Math.random() * (20000 - 3000) + 3000;
        setTimeout(createParticleBurst, randomDelay);
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.update();
            p.draw();
            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        });
        requestAnimationFrame(animate);
    };
    
    // Create particles at a regular interval
    const particleInterval = setInterval(createParticle, 150);
    
    // Schedule the first particle burst
    scheduleNextBurst();
    
    animate();
});
