let firstNumber;
let secondNumber;
let operator;

const displayWindow = document.querySelector('.display');

const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

const numbers = document.querySelectorAll('.number');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equals');

clearButton.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', deleteLast);

//add event listeners for each operator
addButton.addEventListener('click', displayOperator);
subtractButton.addEventListener('click', displayOperator);
multiplyButton.addEventListener('click', displayOperator);
divideButton.addEventListener('click', displayOperator);

numbers.forEach(number => number.addEventListener('click', displayNumber));

addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);

function displayNumber() {
    let text = this.innerHTML;
    displayWindow.textContent += text;
    firstNumber = displayWindow.textContent;
    console.log(firstNumber);
}

function displayOperator() {
    let operatorDisplay = this.innerHTML;
    console.log(this.innerHTML);
    displayWindow.textContent += ` ${operatorDisplay} `;
    operator = this.id;
    console.log(operator);
}

function clearDisplay() {
    displayWindow.textContent = '';
}

function deleteLast() {
    let currentDisplay = displayWindow.textContent;
    currentDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    displayWindow.textContent = currentDisplay;
    firstNumber = currentDisplay;
    console.log(firstNumber);
}

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(first, second, operation) {
    if (operation == 'add') add(first, second);
    else if (operation == 'subtract') subtract(first, second);
    else if (operation == 'multiply') multiply(first, second);
    else if (operation == 'divide') divide(first, second);
}