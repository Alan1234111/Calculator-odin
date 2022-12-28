let digitsButtons = document.querySelectorAll(".digits");
let operatorButtons = document.querySelectorAll(".operators");
let firstNumber = "";
let secondNumber = "";
let total = 0;
let mathOperator = "";
let isFirstOperation = true;

function enterNumbers() {
  isFirstOperation ? (firstNumber += this.value) : (secondNumber += this.value);
  console.log(total);
}

function operate() {
  if (isFirstOperation) {
    total = firstNumber;
    mathOperator = this.value;
    return (isFirstOperation = false);
  }

  if (secondNumber == "") return (mathOperator = this.value);

  parseSecond = parseFloat(secondNumber);
  parseTotal = parseFloat(total);

  if (mathOperator == "+") total = parseTotal + parseSecond;
  if (mathOperator == "-") total = parseTotal - parseSecond;
  if (mathOperator == "x") total = parseTotal * parseSecond;
  if (mathOperator == "/") total = parseTotal / parseSecond;
  if (mathOperator == "%") total = parseTotal % parseSecond;

  secondNumber = "";
  mathOperator = this.value;
}

digitsButtons.forEach((digitBtn) => digitBtn.addEventListener("click", enterNumbers));
operatorButtons.forEach((operatorBtn) => operatorBtn.addEventListener("click", operate));
