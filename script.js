function updateIndianTime() {

    const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    const time = new Date().toLocaleTimeString("en-IN", options);

    document.getElementById("live-time").textContent = time;
}

updateIndianTime();

setInterval(updateIndianTime, 1000);
