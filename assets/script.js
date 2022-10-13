

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
    // TODO--Change to expression.clearMemory()
    expression.clear();
   
}


function storeOperator(){
    expression.operator = this.textContent;
}

 // TODO--Remove this, see line 76
function displayNumber(value) {
    document.querySelector('.screen-text').textContent = "";
    document.querySelector('.screen-text').textContent += value;

}

// TODO-- Delete this 
function printInput() {
    document.querySelector('.screen-text').textContent += this.textContent;

}

// TODO-- Delete this
function clearScreen(){
    document.querySelector('.screen-text').textContent = "";

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
    // TODO--output to screen here
    
}


// TODO--Remove both of these, not used anywhere
function startNewExpression() {
    expression.nowCalculating = true;
}


function endExpression() {
    expression.nowCalculating = false;
}

// Expression's functions

let expression = {
    a:0,
    b:0,
    operationMode: '',
    result: 0,
    inMidCalculation: false,
    newEntry: true,

    store(userInput) {
        // TODO--Change to function call inMidCalculation()
        if(expression.inMidCalculation){
            expression.b += userInput
            expression.b = parseInt(expression.b);
<<<<<<< HEAD

=======
            
       
>>>>>>> display
        }else{
            expression.a += userInput;
            expression.a = parseInt(expression.a);
        }
        
        
    },

    setMode(operator) {
        // If mid-calculation, increment result each time user presses +,-,x,/''
        // TODO--Decouple this create a function that checks if in middle of calculation
        if(expression.inMidCalculation){
            const answer = expression.getAnswer();
            console.log('result:', answer);
            expression.result = answer;
            expression.a = expression.result;
            // TODO--This might adversely impact history of expressions and 
            // may not be necessary 
            expression.b = 0;
            expression.clearDisplay();
            expression.display(answer);
        } 
        expression.inMidCalculation = true;
        expression.operationMode = operator;
        console.log(expression.result);
<<<<<<< HEAD
=======

        // To clear screen for next entry
        // Change to startNewEntry()
        expression.newEntry = true;
>>>>>>> display


    },

    getAnswer() {
        const answer = operate(expression.a, expression.operationMode, expression.b);
        return answer;
        // TODO--Create a function that saves the last expression
    },

    // TODO--Change name to clearMemory()
    clear() {
        expression.a = 0;
        expression.b = 0;
        expression.operationMode = '',
        expression.result = 0,
        expression.inMidCalculation = false;
        expression.clearDisplay();
    },


    display(inputValue) {
         // TODO--Create a function isNewEntry() that checks if it should clear display
        if(expression.newEntry){
            expression.clearDisplay();
            expression.newEntry = false;
            
        }
        
        document.querySelector('.screen-text').textContent += inputValue; 
        
        
    },


    clearDisplay(){
        document.querySelector('.screen-text').textContent = "";

    }
    
} // End main object


// Keypad event listeners
// Get User Input
document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', storeValue));
document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', displayNumber));

document.querySelector('.add-btn').addEventListener('click', setOperationMode);
document.querySelector('.multiply-btn').addEventListener('click', setOperationMode);
document.querySelector('.subtract-btn').addEventListener('click', setOperationMode);
document.querySelector('.divide-btn').addEventListener('click', setOperationMode);


document.querySelector('.equal-btn').addEventListener('click', equals);
document.querySelector('.clear-btn').addEventListener('click', allClear);


