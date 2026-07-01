const plane = document.getElementById("plane");

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        const start = this.getBoundingClientRect();

        const end = target.getBoundingClientRect();

        const startX = start.left + start.width/2;
        const startY = start.top + start.height/2;

        const endX = window.innerWidth/2;
        const endY = window.innerHeight/2;

        plane.style.opacity="1";
        plane.style.left=startX+"px";
        plane.style.top=startY+"px";

        let progress=0;

        function fly(){

            progress+=0.02;

            if(progress>=1){

                plane.style.opacity="0";

                window.scrollTo({

                    top:target.offsetTop-70,

                    behavior:"smooth"

                });

                return;
            }

            const curve=120;

            const x=startX+(endX-startX)*progress;

            const y=startY+(endY-startY)*progress-
                    Math.sin(progress*Math.PI)*curve;

            plane.style.left=x+"px";
            plane.style.top=y+"px";

            plane.style.transform=`rotate(${progress*720}deg)`;

            requestAnimationFrame(fly);

        }

        fly();

    });

});
