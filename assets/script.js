

function add(a, b) {
    return Number(a + b);
}

function subtract(a, b) {
    return Number(a - b);
}

function multiply(a, b) {
    return Number(a * b);
}

function divide(a, b) {
    return Number(a / b);
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

function displayNumber() {
    const number = Number(this.textContent);
    if(expression['operand']) {
        document.querySelector('.input-text').textContent = number;
    } else {
        document.querySelector('.input-text').textContent += number;
    }

}

function allClear() {
    document.querySelector('.input-text').textContent = "";
    expression["operand"] = 0;
    expression["operator"] = '';
    expression["result"] = 0;
}


function storeValue() {
    const input = Number(document.querySelector('.input-text').textContent);
    expression["operand"] = input;
    expression["operator"] = this.textContent;
    
    }


function compute() {
    const a = expression["result"]; 
    const b = expression["operand"];
    const operator = expression["operator"];

    expression["result"] = operate(a, operator, b);
    console.log(expression["result"]);
    
}

function displayResult(result) {
    
    document.querySelector('.input-text').textContent = result;
   
}

function equal() {
    const result = expression['result'];
    displayResult(result);

}


let expression = {
    operand: 0,
    operator: '',
    result: 0,
}


// Keypad event listeners

document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', displayNumber));

document.querySelector('.add-btn').addEventListener('click', storeValue);
document.querySelector('.add-btn').addEventListener('click', compute);

document.querySelector('.clear-btn').addEventListener('click', allClear);