/*
* Function to toogle panels visibility with their id
*/

function toggleSettings(id) {
    const settingsArea = document.getElementById(id);
    if(settingsArea.style.display != 'none' && settingsArea.style.display != 'flex' ) {
        settingsArea.style.display = 'flex';
        return;  
    }
    settingsArea.style.display = settingsArea.style.display === 'none' ? 'flex' : 'none';
}

/*
* Listener to change theme and store it in local storage
*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme]').forEach(button => {
        button.addEventListener('click', (e) => {
            const themeName = e.currentTarget.getAttribute('data-theme');
            changeTheme(themeName);
            localStorage.setItem('theme', themeName);
        });
    });
});

/*
* Usefull change theme immediately (should be imported from main.js)
*/
function changeTheme(themeName) {
    const root = document.documentElement;
    root.className = themeName;
}

/*
* Particle Cloud animation with theme's colors (only on Web skills page -> animation panel)
*/

// Starts when page is loaded
document.addEventListener('DOMContentLoaded', () => {

    
    /*
    * Canvas section
    */

    // Get canvas
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // Resize canvas according to window's size changes
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
        
    /*
    * Particle section
    */

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = this.getRandomColor();
            this.life = 100;
        }
        
        // Select a random color from the theme
        getRandomColor() {
            const colors = [
                getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--primary-color-accent').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--primary-color-super-accent').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim(),
                getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-accent').trim(),
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        // Update particle position
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 1;
        }
        
        // Draw particle
        draw() {
            ctx.fillStyle = this.color; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Array to store the particles
    let particles = [];
    
    // Particle creation
    const createParticle = (e) => {
        const posX = e.x;
        const posY = e.y;
        particles.push(new Particle(posX, posY));
    };
    canvas.addEventListener('mousemove', createParticle);
    
    // Animation of existing particles
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
    animate();
});