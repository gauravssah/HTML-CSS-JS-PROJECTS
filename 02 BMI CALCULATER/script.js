const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");


btn.addEventListener("click", () => {

    if (height.value === "" || isNaN(height.value) || height.value < 0) {
        alert("Plese Enter Valid Height");
    } else if (weight.value === "" || isNaN(weight.value) || weight.value < 0) {
        alert("Plese Enter Valid weight");
    } else {
        let bmi = weight.value / (height.value * height.value) * 10000;
        let bmivalu = bmi.toFixed(2)
        result.textContent = bmivalu;

        if (bmivalu < 16) {
            message.textContent = "(Severe Thinness)";
            message.style.color = "rgb(159, 44, 44)";
        } else if (bmivalu >= 16 && bmivalu <= 17) {
            message.textContent = "(Moderate Thinness)";
            message.style.color = "rgb(159, 44, 44)";
        } else if (bmivalu >= 17 && bmivalu <= 18.5) {
            message.textContent = "(Mild Thinness)";
            message.style.color = "rgb(159, 44, 44)";
        } else if (bmivalu > 18.5 && bmivalu <= 25) {
            message.textContent = "(Normal)";
            message.style.color = "rgb(0, 255, 51)";
        } else if (bmivalu > 25 && bmivalu <= 30) {
            message.textContent = "(Overweight)";
            message.style.color = "red";
        } else if (bmivalu > 30 && bmivalu <= 35) {
            message.textContent = "(Obese Class I)";
            message.style.color = "red";
        } else if (bmivalu > 35 && bmivalu <= 40) {
            message.textContent = "(Obese Class II)";
            message.style.color = "red";
        } else {
            message.textContent = "(Obese Class III)";
            message.style.color = "red";
        }

    }
})




