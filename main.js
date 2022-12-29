const digitsButtons = document.querySelectorAll(".digits");
const decimal = document.querySelector(".decimal");
const operatorButtons = document.querySelectorAll(".operators");
const operationsInput = document.querySelector(".operations-input");
const result = document.querySelector(".result");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const allClear = document.querySelector(".allclear");

let firstNumber = "";
let secondNumber = "";
let total = 0;
let mathOperator = "";
let isFirstOperation = true;

function displayFinalResult() {
  if (secondNumber == "") return;
  operationsInput.textContent = `${total} ${mathOperator} ${secondNumber} =`;
  operate();
  result.textContent = total;
}

function displayResult() {
  if (isFirstOperation) return (result.textContent = firstNumber);

  if (!mathOperator) return;

  if (this.value == "=") {
    return displayFinalResult();
  }

  operationsInput.textContent = `${total} ${mathOperator}`;
  result.textContent = secondNumber;
}

function enterNumbers() {
  if (isFirstOperation) {
    if ((firstNumber === "" && this.value === "0") || (firstNumber.includes(".") && this.value === ".")) return;
    firstNumber += this.value;
  } else {
    if (secondNumber.includes(".") && this.value == ".") return;
    secondNumber += this.value;
  }

  displayResult();
}

function removeLastDigit() {
  if (isFirstOperation) {
    firstNumber = firstNumber.slice(0, -1);
    result.textContent = firstNumber;
    return;
  }

  secondNumber = secondNumber.slice(0, -1);
  result.textContent = secondNumber;
}

function reset() {
  // &nbsp make operationInput visible to site
  operationsInput.innerHTML = "&nbsp";
  result.textContent = "";
  firstNumber = "";
  secondNumber = "";
  total = 0;
  mathOperator = "";
  isFirstOperation = true;
  isClickedEquals = false;
}

function operate() {
  if (!firstNumber) return;

  if (isFirstOperation) {
    total = firstNumber;
    mathOperator = this.value;
    isFirstOperation = false;
    return displayResult();
  }

  if (secondNumber == "") {
    mathOperator = this.value;
    return displayResult();
  }

  parseSecond = parseFloat(secondNumber);
  parseTotal = parseFloat(total);

  if (mathOperator == "+") total = parseTotal + parseSecond;
  if (mathOperator == "-") total = parseTotal - parseSecond;
  if (mathOperator == "x") total = parseTotal * parseSecond;
  if (mathOperator == "/" && secondNumber !== "0") total = parseTotal / parseSecond;
  if (mathOperator == "%") total = parseTotal % parseSecond;

  secondNumber = "";

  mathOperator = this.value;
  displayResult();
}

digitsButtons.forEach((digitBtn) => digitBtn.addEventListener("click", enterNumbers));
decimal.addEventListener("click", enterNumbers);
operatorButtons.forEach((operatorBtn) => operatorBtn.addEventListener("click", operate));
equals.addEventListener("click", displayResult);
clear.addEventListener("click", removeLastDigit);
allClear.addEventListener("click", reset);
