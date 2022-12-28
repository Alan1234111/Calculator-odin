const digitsButtons = document.querySelectorAll(".digits");
const operatorButtons = document.querySelectorAll(".operators");
const operationsInput = document.querySelector(".operations-input");
const result = document.querySelector(".result");
const equals = document.querySelector(".equals");
let firstNumber = "";
let secondNumber = "";
let total = 0;
let mathOperator = "";
let isFirstOperation = true;
let isClickedEquals = false;

function displayFinalResult() {
  if (secondNumber == "") return;
  isClickedEquals = true;
  operationsInput.textContent = `${total} ${mathOperator} ${secondNumber} =`;
  operate();
  result.textContent = total;
}

function displayResult() {
  if (isFirstOperation) return (result.textContent = firstNumber);

  if (isClickedEquals) return (isClickedEquals = false);

  if (this.value == "=") {
    return displayFinalResult();
  }

  operationsInput.textContent = `${total} ${mathOperator}`;
  result.textContent = secondNumber;
}

function enterNumbers() {
  isFirstOperation ? (firstNumber += this.value) : (secondNumber += this.value);
  displayResult();
}

function operate() {
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
  if (mathOperator == "/") total = parseTotal / parseSecond;
  if (mathOperator == "%") total = parseTotal % parseSecond;

  secondNumber = "";
  mathOperator = this.value;
  displayResult();
}

digitsButtons.forEach((digitBtn) => digitBtn.addEventListener("click", enterNumbers));
operatorButtons.forEach((operatorBtn) => operatorBtn.addEventListener("click", operate));
equals.addEventListener("click", displayResult);
