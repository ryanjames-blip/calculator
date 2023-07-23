let firstNumber;
let secondNumber;
let operator;

const displayWindow = document.querySelector('.display');

const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

const numbers = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equals');

clearButton.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', deleteLast);

//add event listeners for each operator
operatorButtons.forEach(operatorButton => 
    operatorButton.addEventListener('click', displayOperator));

equalButton.addEventListener('click', () => operate(firstNumber, secondNumber, operator));

numbers.forEach(number => number.addEventListener('click', displayNumber));

function displayNumber() {    
    let displayLength = displayWindow.textContent.length;
    if (operator != undefined) {
        let text = this.innerHTML;
        displayWindow.textContent += text;
        if (secondNumber == undefined) {
            secondNumber = displayWindow.textContent.slice(displayLength);
        }
        else {
            secondNumber += displayWindow.textContent.slice(displayLength);
        }
    }
    else {
        let text = this.innerHTML;
        displayWindow.textContent += text;
        firstNumber = displayWindow.textContent;
    }
}

function displayOperator() {
    if (secondNumber != undefined) {
        operate(firstNumber, secondNumber, this.id);
        //operator = this.id;
    }
    console.log(this.innerHTML);
    let operatorDisplay = this.innerHTML;
    displayWindow.textContent += ` ${operatorDisplay} `;
    operator = this.id;
}

function clearDisplay() {
    displayWindow.textContent = '';
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
}

function deleteLast() {
    let currentDisplay = displayWindow.textContent;
    currentDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    displayWindow.textContent = currentDisplay;
    if (operator != undefined) {
        secondNumber = currentDisplay.slice(firstNumber.length + 2);
    }
    else {
        firstNumber = currentDisplay;
    }
}

function operate(first, second, operation) {
    let answer;
    if (operation == 'add') {
        answer = add(first, second);
    }
    else if (operation == 'subtract') {
        answer = subtract(first, second);
    }
    else if (operation == 'multiply') {
        answer = multiply(first, second);
    }
    else if (operation == 'divide') {
        answer = divide(first, second);
    }
    displayWindow.textContent = answer;
    firstNumber = answer.toString();
    secondNumber = undefined;
    operator = undefined;
}

function add(first, second) {
    return parseInt(first) + parseInt(second);
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