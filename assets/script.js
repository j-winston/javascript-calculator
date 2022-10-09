
console.log('wah');



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b)
    }

}

function display() {
    const number = Number(this.textContent);
    document.querySelector('.input-text').textContent += number;
}

function allClear(){
    document.querySelector('.input-text').textContent = "";
}

// Keypad event listeners

document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', display));
document.querySelector('.clear-btn').addEventListener('click', allClear);