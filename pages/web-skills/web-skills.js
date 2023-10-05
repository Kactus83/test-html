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
* Particle Cloud with theme's colors (only on canvas)
*/

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
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
                getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim(),
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 1;
        }
        
        draw() {
            ctx.fillStyle = this.color; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    
    const createParticle = (e) => {
        const posX = e.x;
        const posY = e.y;
        particles.push(new Particle(posX, posY));
    };
    
    canvas.addEventListener('mousemove', createParticle);
    
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