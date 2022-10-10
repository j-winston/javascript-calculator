

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}


function operate(a, operator, b) {
    a = Number(a);
    b = Number(b);

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




function allClear() {
    document.querySelector('.input-text').textContent = "";
    expression.a = 0;
    expression.b = 0;
    expression.result = 0;
    endExpression();
   
}

function storeOperator(){
    expression.operator = this.textContent;
}

function displayNumber() {
    document.querySelector('.input-text').textContent += this.textContent;

    
}

function storeValue() {
    if(expression.nowCalculating){
        expression.a = this.textContent;
        expression.a = parseInt(expression.a);
        console.log('expression a', expression.a);

        document.querySelector('.input-text').textContent = "";
        document.querySelector('.input-text').textContent = expression.a;
    }else {
        
        expression.b = this.textContent; 
        expression.b = parseInt(expression.b);
        

    
    }

    console.log('expression.a', expression.a, 'expression.b', expression.b);
    

    
    
}

function compute() { 
    startNewExpression();
    
    equals();
    

}

function equals() {
    expression.result = operate(expression.a, expression.operator, expression.b);
    document.querySelector('.input-text').textContent = expression.result;
    expression.a = expression.result
    endExpression();

    
}





function startNewExpression() {
    expression.nowCalculating = true;
}


function endExpression() {
    expression.nowCalculating = false;
}


let expression = {
    a:0,
    b:0,
    operator: '',
    result: 0,
    runningTotal: 0,
    nowCalculating: false,
    
}


// Keypad event listeners

// document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', storeValue));
document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', displayNumber));
document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', storeValue));

document.querySelector('.add-btn').addEventListener('click', storeOperator);
document.querySelector('.add-btn').addEventListener('click', compute);


document.querySelector('.equal-btn').addEventListener('click', equals);
document.querySelector('.clear-btn').addEventListener('click', allClear);


