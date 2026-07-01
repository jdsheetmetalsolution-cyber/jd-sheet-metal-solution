<script>
function updateTime(){

const now = new Date();

const time = now.toLocaleTimeString('en-IN',{

hour:'2-digit',
minute:'2-digit',
second:'2-digit',
hour12:true,
timeZone:'Asia/Kolkata'

});

document.getElementById("live-time").textContent=time;

}

updateTime();
setInterval(updateTime,1000);
</script>
