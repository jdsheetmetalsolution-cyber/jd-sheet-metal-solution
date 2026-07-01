// J&D Navigation Animation

const links = document.querySelectorAll(".nav-link");

let isFlying = false;

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        if(isFlying) return;

        isFlying = true;

        const target = document.querySelector(this.getAttribute("href"));

        if(!target){
            isFlying = false;
            return;
        }

        // Remove previous airplane
        const oldPlane = document.getElementById("plane");
        if(oldPlane) oldPlane.remove();

        // Create airplane
        const plane = document.createElement("img");

        plane.id = "plane";

        plane.src = "images/paper-plane.png";

        document.body.appendChild(plane);

        // Menu position
        const menu = this.getBoundingClientRect();

        const startX = menu.left + menu.width/2;

        const startY = menu.top + window.scrollY + menu.height/2;

        plane.style.left = startX + "px";
        plane.style.top = startY + "px";

        // Destination
        const destination = target.getBoundingClientRect();

        const endX = window.innerWidth/2;

        const endY = destination.top + window.scrollY + 80;

        // Fly airplane
        plane.animate([

            {
                left:startX+"px",
                top:startY+"px",
                opacity:1
            },

            {
                left:endX+"px",
                top:endY+"px",
                opacity:1
            }

        ],{

            duration:1800,

            easing:"ease-in-out",

            fill:"forwards"

        });

        setTimeout(()=>{

            window.scrollTo({

                top:target.offsetTop-70,

                behavior:"smooth"

            });

        },1800);

        setTimeout(()=>{

            plane.remove();

            isFlying=false;

        },2600);

    });

});
