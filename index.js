let questionResult = prompt("Add, subtract, multiply or divide?");
let firstNumber = prompt("Enter first number", 0);
let secondNumber = prompt("Enter second number", 0);
let addResult = +firstNumber + +secondNumber;
let subResult = firstNumber - secondNumber;
let mulResult = firstNumber * secondNumber;
let divResult = firstNumber / secondNumber;

switch (questionResult) {
    case "add": alert(addResult);
    break;
    case "subtract": alert(subResult);
    break;
    case "multiply": alert(mulResult);
    break;
    case "divide": alert(divResult);
    break;
    default: alert("You have to choose only add, subtract, multiply or divide");
}