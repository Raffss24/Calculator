const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");

const specialChars = ["%", "*", "-", "+", "/", "="];

let output = "";

const calculate = (btnValue) => {

       if (btnValue === "=" && btnValue !== "") {

              output = eval(output.replace("%", "/100"));

       } else if (btnValue === "AC") {
              output = "";
       } else {
              if (output === "" && specialChars.includes(btnValue)) return;
              output += btnValue;
       }

       input.value = output;
};

buttons.forEach((button) => {

       button.addEventListener("click", e => calculate(e.target.dataset.value));

});