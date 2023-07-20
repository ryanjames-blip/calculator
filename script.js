let numberInDisplay;
const displayWindow = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const addButton = document.querySelector('#add');
addButton.addEventListener('click', add);

function displayNumber() {
    let text = this.innerHTML;
    displayWindow.textContent += text;
    numberInDisplay += text;
    console.log(numberInDisplay);
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