function updateClock(){

const india=new Date().toLocaleTimeString("en-IN",{

timeZone:"Asia/Kolkata",

hour:"2-digit",

minute:"2-digit",

second:"2-digit"

});

document.getElementById("clock").innerHTML=india;

}

updateClock();

setInterval(updateClock,1000);
