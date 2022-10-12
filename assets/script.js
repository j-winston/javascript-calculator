

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
    expression.clear();
   
}


function storeOperator(){
    expression.operator = this.textContent;
}


function displayNumber(value) {
    document.querySelector('.screen-text').textContent = "";
    document.querySelector('.screen-text').textContent += value;

}


function printInput() {
    document.querySelector('.screen-text').textContent += this.textContent;

}


function clearScreen(){
    document.querySelector('.screen-text').textContent = "";

}


function storeValue() {
    const userInput = this.textContent;
    expression.store(userInput);
    
    
}

function setOperationMode() {
    const mode = this.textContent;
    expression.setMode(mode);
    // remove console.log
    
    
}


function equals() {
    // remove console.log
    console.log('Equals:',expression.getAnswer());
    
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
    operationMode: '',
    result: 0,
    inMidCalculation: false,

    store(userInput) {
        if(expression.inMidCalculation){
            expression.b += userInput
            expression.b = parseInt(expression.b);

        }else{
            expression.a += userInput;
            expression.a = parseInt(expression.a);
        }
        
    },

    setMode(operator) {
        // If mid-calculation, increment result each time user presses +,-,x,/''
        if(expression.inMidCalculation){
            const answer = expression.getAnswer();
            expression.result = answer;
            expression.a = expression.result;
            expression.b = 0;
        }
        expression.inMidCalculation = true;
        expression.operationMode = operator;
        console.log(expression.result);


    },

    getAnswer() {
        const answer = operate(expression.a, expression.operationMode, expression.b);
        return answer;
        
    },

    clear() {
        expression.a = 0;
        expression.b = 0;
        expression.operationMode = '',
        expression.result = 0,
        expression.inMidCalculation = false;
    }
   
    
}


// Keypad event listeners
// Get User Input
document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', storeValue));

document.querySelector('.add-btn').addEventListener('click', setOperationMode);
document.querySelector('.multiply-btn').addEventListener('click', setOperationMode);
document.querySelector('.subtract-btn').addEventListener('click', setOperationMode);
document.querySelector('.divide-btn').addEventListener('click', setOperationMode);


document.querySelector('.equal-btn').addEventListener('click', equals);
document.querySelector('.clear-btn').addEventListener('click', allClear);


