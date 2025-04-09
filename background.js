var ctx = document.getElementById("iam-background");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
var c = ctx.getContext("2d");
const color = ['#660708', '#A4161A', '#BA181B', '#E5383B'];


function Particle(x,y,size,color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;

    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = (Math.random() * 2) + 2;

    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    c.fill();
}

var particles = []
for (var i = 0; i < 100; i++) {
    particles[i] = new Particle(0,0,2, color[Math.floor(Math.random() * 3)]);
}
