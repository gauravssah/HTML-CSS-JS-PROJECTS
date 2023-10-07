const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

let intervalId;

start.addEventListener("click", changingTheBgColor);
stop.addEventListener("click", stopChangigTheColor);

// function startcolor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let randomColor = `rgb(${red},${green},${blue} )`;
//     document.body.style.backgroundColor = randomColor;
//     console.log(randomColor);
// }

// function changingTheBgColor() {
//     console.log("Start ...")
//     intervalId = setInterval(startcolor, 1000);
// }

// function stopChangigTheColor() {
//     clearInterval(intervalId);
//     intervalId = null;
// }


// ----------------2nd Method-----------------------------------

function changingTheBgColor() {
    intervalId = setInterval(generatingColor, 1000);
};


function generatingColor() {
    let hexcolor = "0123456789ABCDEF";
    let bgColor = "#";

    for (let i = 0; i < 6; i++) {
        bgColor += hexcolor[Math.floor(Math.random() * 16)]
    }

    document.body.style.backgroundColor = bgColor;
}

function stopChangigTheColor() {
    clearInterval(intervalId);
    intervalId = null;
}