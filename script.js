
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const displayWindow = document.querySelector('.display');

function displayNumber() {
    let text = this.innerHTML;
    displayWindow.textContent += text;
}