let digitsButtons = document.querySelectorAll(".digits");
let operatorButtons = document.querySelectorAll(".operators");
let firstNumber = "";
let secondNumber = "";
let total = 0;
let isFirstOperation = true;

function enterNumbers() {
  isFirstOperation ? (firstNumber += this.value) : (secondNumber += this.value);
  console.log(firstNumber);
}

function operate() {
  isFirstOperation = false;
}

digitsButtons.forEach((digitBtn) => digitBtn.addEventListener("click", enterNumbers));
operatorButtons.forEach((operatorBtn) => operatorBtn.addEventListener("click", operate));
