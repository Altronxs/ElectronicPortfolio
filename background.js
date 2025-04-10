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
var amount = 150;
var particles = [];
var colour = [];
var size = [];
var bounce = 3;
var xm;
var ym;

const grad=c.createLinearGradient(0,0, cw,cw);
grad.addColorStop(0, "#FFFFFF");
grad.addColorStop(1, "#161A1D");
console.log(ch,cw);

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
        colour[o] = "#F5F3F4";
        size[o] = 0.5;
    }
}
var iam = document.getElementById('iam');

iam.addEventListener("mousemove", (event) => {
  const rect = iam.getBoundingClientRect();
  xm = event.clientX - rect.left;
  ym = event.clientY - rect.top;

});
  
function animate() {
    requestAnimationFrame(animate);
    //background
    c.beginPath();
    c.rect(0, 0, cw, ch);
    c.fillStyle = grad;
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
         
        
         for (var j = 0; j < amount; j++) {
            //console.log(getDistance(x[i],y[i], x[j],y[j]));
            if (getDistance(x[i],y[i], x[j],y[j]) <= 100) {
                c.moveTo(x[i],y[i]);
                c.lineTo(x[j],y[j]);
                c.strokeStyle = "#D3D3D3";
                c.stroke();
            }
            if (getDistance(x[i],y[i], xm, ym) <= 150) {
                c.moveTo(x[i],y[i]);
                c.lineTo(xm,ym);
                c.strokeStyle = "#D3D3D3";
                c.stroke();
            }
         }

    }
}

function diff (num1, num2) {
    if (num1 > num2) {
      return (num1 - num2);
    } else {
      return (num2 - num1);
    }
}

function getDistance(x1, y1, x2, y2) {
    var deltaX = diff(x1, x2);
    var deltaY = diff(y1, y2);
    var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    return (dist);
}
repeat();
animate();
