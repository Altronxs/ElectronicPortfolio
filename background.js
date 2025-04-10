var ctx = document.getElementById("iam-background");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ch = window.innerHeight;
cw = window.innerWidth;
var c = ctx.getContext("2d");
const color = ['#660708', '#A4161A', '#BA181B', '#E5383B'];
var x = [];
var y = [];
var velx = [];
var vely = [];
var amount = 500;
var particles = [];
var colour = [];
var size = [];
var bounce = 3;

function Particle(x,y,size,color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;

    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    c.fill();
}
function repeat() {
    for (var o = 0; o < amount; o++) {
        x[o] = Math.random() * window.innerWidth;
        y[o] = Math.random() * window.innerHeight;
        velx[o] = (Math.random() < 0.5 ? -1 : 1) * Math.random();
        vely[o] = (Math.random() < 0.5 ? -1 : 1) * Math.random();
        colour[o] = color[Math.floor(Math.random() * 3)]
        size[o] = (Math.random() * 2) + 0.5;
    }
}
function animate() {
    requestAnimationFrame(animate);
    //background
    c.beginPath();
    c.rect(0, 0, cw, ch);
    c.fillStyle = "#f3f3f3";
    c.fill();

    //object creation
    for (var i = 0; i < amount; i++) {
        particles[i] = new Particle(x[i],y[i], size[i], colour[i]);
        x[i] = x[i] + velx[i];
        y[i] = y[i] + vely[i];
        
        //bounce
         if (x[i] < bounce || x[i] > (cw - bounce)) {
            velx[i] = velx[i] * (-1);
            if (x[i] < bounce) {
                x[i] = bounce;
            } else if (x[i] > (cw - bounce)) {
                x[i] = cw - bounce;
            }
         }
         if (y[i] < bounce || y[i] > (ch - bounce)) {
            vely[i] = vely[i] * (-1);
            if (y[i] < bounce) {
                y[i] = bounce;
            } else if (y[i] > (ch - bounce)) {
                y[i] = ch - bounce;
            }
         }
    }
}
repeat();
animate();

