let questionResult = prompt("Add, subtract, multiply or divide?");
let firstNumber = prompt("Enter first number", 0);
let secondNumber = prompt("Enter second number", 0);
let firstResult = +firstNumber + +secondNumber;
let secontResult = firstNumber - secondNumber;
let thirdResult = firstNumber * secondNumber;
let fourthResult = firstNumber / secondNumber;
if (questionResult === "add") {
    alert(firstResult);
} else if (questionResult === "subtract") {
    alert(secondResult);
} else if (questionResult === "multiply") {
    alert(thirdResult);
} else if (questionResult === "divide") {
    alert(fourthResult);
} else {
    alert("You have to choose only add, subtract, multiply or divide");
}