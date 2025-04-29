var ctx = document.getElementById("iam-background");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ch = window.innerHeight;
cw = window.innerWidth;
var c = ctx.getContext("2d");

const distance = 30;
let particles = [];
let currentColor = RandomColor();
let nextColor = RandomColor();
let mixFactor = 0;
let transitionSpeed = 0.01;


function hexToRgb(hex) {
    let bigint = parseInt(hex.substring(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return [r, g, b];
}

function lerpColor(color1, color2, factor) {
    let c1 = hexToRgb(color1);
    let c2 = hexToRgb(color2);

    let r = Math.round(c1[0] * (1 - factor) + c2[0] * factor);
    let g = Math.round(c1[1] * (1 - factor) + c2[1] * factor);
    let b = Math.round(c1[2] * (1 - factor) + c2[2] * factor);

    return `rgb(${r}, ${g}, ${b})`;
}


class Particle {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = currentColor;
    }
    
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
    }
}

function RandomColor() {
    const colours = ['#FFFFFF', '#D3D3D3', '#B1A7A6'];
    return colours[Math.floor(Math.random() * 3)];
}

function initParticles() {
    particles = [];
    for (let i = 0; i < (window.innerHeight / distance); i++) {
        for (let j = 0; j < (window.innerWidth / distance); j++) {
            if ((i % 2) === 0) {
                let x = (j * distance)+(distance/2);
                let y = (i * distance)+(distance/2);
                particles.push(new Particle(x, y, 2));
            } else {
                let x = (j * distance);
                let y = (i * distance)+(distance/2);
                particles.push(new Particle(x, y, 2));
            }
            
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    //background
    c.beginPath();
    c.rect(0, 0, cw, ch);
    c.fillStyle = '#F5F3F4';
    c.fill();

    let blendedColor = lerpColor(currentColor, nextColor, mixFactor);

    // Update particles with the blended color
    particles.forEach(particle => {
        particle.color = blendedColor;
        particle.draw();
    });

    // Color blending logic
    mixFactor += transitionSpeed;
    if (mixFactor >= 1) {
        mixFactor = 0;
        currentColor = nextColor;
        nextColor = RandomColor(); // Pick either #0B090A or #E5383B
    }


    
    
}
window.addEventListener('resize', () => {
    ctx.width = window.innerWidth;
    ctx.height = window.innerHeight;
    ch = window.innerHeight;
    cw = window.innerWidth;
    initParticles();
    animate();
});

initParticles();
animate()
