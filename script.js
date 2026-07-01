document.querySelectorAll(".nav-link").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

const plane=document.createElement("img");

plane.src="images/paper-plane.png";

plane.className="fly-plane";

document.body.appendChild(plane);

const start=this.getBoundingClientRect();

const sx=start.left+start.width/2;

const sy=start.top+start.height/2;

plane.style.left=sx+"px";

plane.style.top=sy+"px";

const endY=target.offsetTop;

let x=sx;

let y=sy;

const endX=window.innerWidth/2;

function fly(){

x+=(endX-x)*0.04;

y+=((endY-window.scrollY)-y)*0.04;

plane.style.left=x+"px";

plane.style.top=y+"px";

window.scrollTo(0,window.scrollY+8);

if(window.scrollY>=endY-80){

plane.remove();

return;

}

requestAnimationFrame(fly);

}

fly();

});

});
