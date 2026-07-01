<script>

document.querySelectorAll(".nav-link").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

const plane=document.createElement("img");

plane.src="images/paper-plane.png";

plane.className="fly-plane";

document.body.appendChild(plane);

const start=this.getBoundingClientRect();

const sx=start.left+start.width/2;
const sy=start.top+start.height/2;

const end=target.getBoundingClientRect();

const ex=window.innerWidth/2;
const ey=end.top+120;

let t=0;

function animate(){

t+=0.015;

if(t>=1){

plane.style.opacity=0;

setTimeout(()=>{

plane.remove();

window.scrollTo({
top:target.offsetTop-70,
behavior:"smooth"
});

},150);

return;

}

// Bezier Curve (Smooth Arc)

const cx=(sx+ex)/2;
const cy=Math.min(sy,ey)-180;

const x=(1-t)*(1-t)*sx+2*(1-t)*t*cx+t*t*ex;
const y=(1-t)*(1-t)*sy+2*(1-t)*t*cy+t*t*ey;

plane.style.left=x+"px";
plane.style.top=y+"px";

requestAnimationFrame(animate);

}

animate();

});

});

</script>
