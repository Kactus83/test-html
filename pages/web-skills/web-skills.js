function toggleSettings(id) {
    const settingsArea = document.getElementById(id);
    settingsArea.style.display = settingsArea.style.display === 'none' ? 'flex' : 'none';
}


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
            this.life = 100;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 1;
        }
        
        draw() {
            ctx.fillStyle = 'rgba(150, 150, 150, 1)';
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