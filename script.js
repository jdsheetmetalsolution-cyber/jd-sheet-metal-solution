document.addEventListener("DOMContentLoaded", () => {

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetID = this.getAttribute("href");
        const target = document.querySelector(targetID);

        if(!target) return;

        // Rotation Animation
        this.classList.add("rotate");

        // Spark
        createSpark(this);

        setTimeout(()=>{

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

            this.classList.remove("rotate");

        },900);

    });

});

});

function createSpark(element){

const rect = element.getBoundingClientRect();

const spark = document.createElement("div");

spark.className="spark";

spark.style.left=(rect.left+rect.width/2)+"px";
spark.style.top=(rect.top+rect.height/2)+"px";

document.body.appendChild(spark);

let angle=0;
let radius=5;

const animation=setInterval(()=>{

angle+=0.35;
radius+=2;

spark.style.left=
(rect.left+rect.width/2+
Math.cos(angle)*radius)+"px";

spark.style.top=
(rect.top+rect.height/2+
Math.sin(angle)*radius)+"px";

spark.style.opacity=1-radius/160;

if(radius>150){

clearInterval(animation);
spark.remove();

}

},15);

}
