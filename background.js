var ctx = document.getElementById("iam-background");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ch = window.innerHeight;
cw = window.innerWidth;
var c = ctx.getContext("2d");
const color = ['#660708', '#161A1D'];
var x = [];
var y = [];
var velx = [];
var vely = [];
var amount = 100;
var particles = [];
var distance = 30;


function particle(x,y,size,color) {
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



function animate() {
    //background
    c.beginPath();
    c.rect(0, 0, cw, ch);
    c.fillStyle = '#F5F3F4';
    c.fill();
    //object creation
    for (var i = 0; i < (window.innerHeight/distance); i++) {
        for (var j = 0; j < (window.innerWidth/distance); j++) {
            if ((i % 2) === 0) {
                particle((j * distance)+(distance/2),(i * distance)+(distance/2), 2, '#FFFFFF', )
            } else {
                particle((j * distance),(i * distance)+(distance/2), 2, '#FFFFFF', )
            }
        }
    }
}
window.addEventListener('resize', () => {
    ctx.width = window.innerWidth;
    ctx.height = window.innerHeight;
    ch = window.innerHeight;
    cw = window.innerWidth;
    animate();
});
animate();
