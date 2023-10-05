const time = document.querySelector(".time");
const date = document.querySelector(".date");

setInterval(() => {
    let currentTime = new Date();
    time.textContent = currentTime.toLocaleTimeString();
    date.textContent = currentTime.toLocaleDateString();
}, 1000);

