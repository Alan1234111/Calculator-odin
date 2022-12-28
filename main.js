const digitsButtons = document.querySelectorAll(".digits");
const operatorButtons = document.querySelectorAll(".operators");
const operationsInput = document.querySelector(".operations-input");
const result = document.querySelector(".result");
let firstNumber = "";
let secondNumber = "";
let total = 0;
let mathOperator = "";
let isFirstOperation = true;

function displayResult() {
  if (isFirstOperation) return (result.textContent = firstNumber);

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
