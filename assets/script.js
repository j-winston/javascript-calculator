

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




function clearMemory() {
    expression.clear();
   
}


function storeOperator(){
    expression.operator = this.textContent;
}



function storeValue() {
    const userInput = this.textContent;
    expression.store(userInput);

}

function displayNumber() {
    const userInput = this.textContent;
    expression.display(userInput);
}


function setOperationMode() {
    const mode = this.textContent;
    expression.setMode(mode);
  
}


function equals() {
    expression.clearDisplay();
    expression.display(expression.getAnswer());
    
}



// Object used to hold all calculations
let expression = {
    a:0,
    b:0,
    operationMode: '',
    result: 0,
    inMidCalculation: false,
    newEntry: true,

    store(userInput) {
        // Give each of the two operands their own variable
        if(expression.inMidCalculation){
            expression.b += userInput
            expression.b = parseInt(expression.b);
            
       
        }else{
            expression.a += userInput;
            expression.a = parseInt(expression.a);
        }
        
    },

    setMode(operator) {
        // If user pressed operator key after inputting second operand,
        // update the total and display 
        if(expression.inMidCalculation){
            const currentTotal = expression.getAnswer();
            expression.updateRunningTotal(currentTotal);
            expression.clearDisplay();
            expression.display(expression.result);
        }else {
            expression.inMidCalculation = true;
        }

        expression.operationMode = operator;
        // Let the program know a new operand is coming up
        expression.startNewEntry();
    },


    updateRunningTotal(previousTotal) {
        // Allows calc to display new running total after pressing +, -, *, /
        expression.result = previousTotal;
        expression.a = expression.result;
        expression.b = 0;
    },

    startNewEntry() {
        expression.newEntry = true;
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
        expression.clearDisplay();
    },


    display(inputValue) {
         // Clear display once for each new operand 
        if(expression.newEntry){
            expression.clearDisplay();
            expression.newEntry = false;
        }
        
        document.querySelector('.screen-text').textContent += inputValue; 
        
        
    },


    clearDisplay(){
        document.querySelector('.screen-text').textContent = "";

    },
    
} // End object 


// Keypad event listeners
document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', storeValue));
document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', displayNumber));

document.querySelector('.add-btn').addEventListener('click', setOperationMode);
document.querySelector('.multiply-btn').addEventListener('click', setOperationMode);
document.querySelector('.subtract-btn').addEventListener('click', setOperationMode);
document.querySelector('.divide-btn').addEventListener('click', setOperationMode);


document.querySelector('.equal-btn').addEventListener('click', equals);
document.querySelector('.clear-btn').addEventListener('click', clearMemory);


