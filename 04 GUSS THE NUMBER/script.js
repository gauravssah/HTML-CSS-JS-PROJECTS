let randomNumber = Math.floor(Math.random() * 100 + 1)
let userNumber = document.querySelector("#inputfild");
let btn = document.querySelector(".btn");
let mess = document.querySelector(".mess");
let attempt = document.querySelector(".attempt");
let usenumberDisplay = document.querySelector(".usenumberDisplay");
// console.log(randomNumber);







// let userEnterNumbers = [];

totaAttemped = 10;


btn.addEventListener("click", () => {
    checkNumber()
});

function checkNumber() {
    if (!isNaN(userNumber.value) && userNumber.value !== "") {
        uservalue = Number(userNumber.value);
        mess.textContent = "";
        userNumber.value = "";
        usenumberDisplay.textContent += `${uservalue}, `;
        matchNumber(uservalue)
        // console.log(uservalue);
    } else {
        mess.textContent = `Wrong Input: ${userNumber.value}`;
        userNumber.value = "";
    }
}


function matchNumber(usernumbers) {
    if (usernumbers === randomNumber) {
        mess.textContent = `Hurry You Win The Game.`;
        totaAttemped--;
        attempt.textContent = totaAttemped;
        gameEnd();
    } else if (usernumbers < randomNumber) {
        mess.textContent = `You Enter Too Small Number`;
        totaAttemped--;
        attempt.textContent = totaAttemped;
        if (totaAttemped == 0) {
            mess.textContent = `Noo, You Loose The Game, The Number is : ${randomNumber}`;
            gameEnd();
        }
    } else if (usernumbers > randomNumber) {
        mess.textContent = `You Enter Too High Number`;
        totaAttemped--;
        attempt.textContent = totaAttemped;
        if (totaAttemped == 0) {
            mess.textContent = `Noo, You Loose The Game, The Number is : ${randomNumber}`;
            gameEnd();
        }
    }
}




function gameEnd() {
    userNumber.setAttribute("disabled", "");
    btn.textContent = "Play Again";

    if (btn.textContent == "Play Again") {
        btn.addEventListener("click", () => {
            restartGame()
        })
    }
}


function restartGame() {
    window.location.reload();
}