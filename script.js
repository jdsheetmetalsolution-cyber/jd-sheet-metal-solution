<script>

document.querySelectorAll(".nav-link").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        // create airplane
        const plane=document.createElement("img");
        plane.src="images/paper-plane.png";
        plane.className="fly-plane";
        document.body.appendChild(plane);

        // start position (clicked menu)
        const start=this.getBoundingClientRect();

        let x=start.left+start.width/2;
        let y=start.top+start.height/2;

        plane.style.left=x+"px";
        plane.style.top=y+"px";

        // end position
        const end=target.getBoundingClientRect();

        const endX=window.innerWidth/2;
        const endY=end.top+window.scrollY+120;

        let progress=0;

        function fly(){

            progress+=0.012;

            if(progress>=1){

                plane.remove();

                window.scrollTo({
                    top:target.offsetTop-70,
                    behavior:"smooth"
                });

                return;
            }

            // straight flying
            const currentX=x+(endX-x)*progress;
            const currentY=y+((endY-window.scrollY)-y)*progress;

            plane.style.left=currentX+"px";
            plane.style.top=currentY+"px";

            requestAnimationFrame(fly);

        }

        fly();

    });

});

</script>
