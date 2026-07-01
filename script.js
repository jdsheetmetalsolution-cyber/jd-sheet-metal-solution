const canvas = document.getElementById("trailCanvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);

const particles=[];

class Particle{

    constructor(x,y){

        this.x=x;
        this.y=y;

        this.vx=(Math.random()-0.5)*5;
        this.vy=(Math.random()-0.5)*5;

        this.life=60;

        this.size=Math.random()*3+2;

    }

    update(){

        this.x+=this.vx;

        this.y+=this.vy;

        this.life--;

        this.size*=0.97;

    }

    draw(){

        ctx.beginPath();

        ctx.fillStyle="rgba(230,230,230,"+(this.life/60)+")";

        ctx.shadowBlur=20;

        ctx.shadowColor="#ffffff";

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fill();

    }

}

let comet=null;

document.querySelectorAll(".nav-link").forEach(link=>{

link.onclick=function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

const r=this.getBoundingClientRect();

const startX=r.left+r.width/2;

const startY=r.top+r.height/2;

const end=target.getBoundingClientRect();

const endX=window.innerWidth/2;

const endY=end.top+120;

comet={

x:startX,

y:startY,

tx:endX,

ty:endY,

target

};

};

});

function animate(){

requestAnimationFrame(animate);

ctx.clearRect(0,0,canvas.width,canvas.height);

if(comet){

let dx=comet.tx-comet.x;

let dy=comet.ty-comet.y;

let dist=Math.sqrt(dx*dx+dy*dy);

if(dist>8){

comet.x+=dx*0.08;

comet.y+=dy*0.08;

for(let i=0;i<8;i++){

particles.push(new Particle(comet.x,comet.y));

}

ctx.beginPath();

ctx.fillStyle="#f8f4d7";

ctx.shadowBlur=40;

ctx.shadowColor="#fff";

ctx.arc(comet.x,comet.y,7,0,Math.PI*2);

ctx.fill();

}else{

window.scrollTo({

top:comet.target.offsetTop-70,

behavior:"smooth"

});

comet=null;

}

}

for(let i=particles.length-1;i>=0;i--){

particles[i].update();

particles[i].draw();

if(particles[i].life<=0){

particles.splice(i,1);

}

}

}

animate();
