

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

	const ans = (a/b);

	if(b===0){
		return "That's naughty.";
	}
	// Handle fractions gracefully
	return parseFloat(ans.toFixed(6));
}




    


function operate(a, operator, b) {
    if(a % Math.floor(a) != 0 || b % Math.floor(b) != 0) {
        // If it's a float, parse it accordingly
        a = parseFloat(a);
        b = parseFloat(b);
    }else {
        a = parseInt(a);
        b = parseInt(b);
    }
    
   
    switch (operator) {
        case '+': return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    } 

}


function changeToPercent() {
	expression.makeItPercent();
}


function clearMemory() {
    expression.clear();
   
}


function storeOperator(){
    expression.operator = this.textContent;
}

function parseInput() {
	const input = this.textContent;
	expression.parse(input);
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
    const opObject = this;
    expression.opButtonInstance = this;
    expression.setMode(mode, opObject);
    
  
}


function equals() {
    expression.clearDisplay();
    expression.display(expression.getAnswer());
    
}



// Object used to hold all calculations
let expression = {
    a:0,
    b:0,
    operationMode: '+',
    result: 0,
    inMidCalculation: false,
    newEntry: true,
    opButtonInstance: "", // Keeps track which +,-,*,/ button is activated
    decimalPointOn: false, // Becomes true when user types in a decimal point
   
	parse(userInput) {
		// Ensure decimal is only entered once
		if((userInput === '.') && (expression.decimalPointOn == true)) {
		 	userInput = '';
		} else if(userInput === '.') {
			expression.decimalPointOn = true;
		} else {
			expression.decimalPointOn = false;
		}

		expression.store(userInput);
		expression.display(userInput);
	},



    store(userInput) {
	    	
        // The first operand of the expression
        if(expression.inMidCalculation){
            expression.b += userInput
	     // Remove highlight after user types second number
	    expression.opButtonInstance.style.backgroundColor = "rgb(255, 190, 60)";
	    expression.opButtonInstance.style.color = "white";
    
            
       // The second half of the expression
        }else{
            expression.a += userInput;
        }
        
    },

    setMode(operator, operatorButton) {


	 // Reset any decimal points that were entered
	    //expression.decimalPointOn = false;

	// Highlight active button when user clicks operation key
	operatorButton.style.backgroundColor = "white";
	operatorButton.style.color = "orange";
	  

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
	
    makeItPercent() {
 	    // Clear any previously entered data
	    document.querySelector('.screen-text').textContent = "";

	    if(expression.inMidCalculation) {
		    expression.b = ((expression.b) / 100).toFixed(2);
		    expression.display(expression.b);
		   
	    }else {
		    expression.a = ((expression.a) / 100).toFixed(2);
		    expression.display(expression.a);
		   	
	    }
	   
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
        expression.operationMode = '+',
        expression.result = 0,
        expression.inMidCalculation = false;
        expression.clearDisplay();
	// Clear highlighted mode
        expression.opButtonInstance.style.backgroundColor = "rgb(255, 190, 60)";
	expression.opButtonInstance.style.color = "white";
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
document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', parseInput));
// document.querySelectorAll('.num-btn').forEach((btn) => btn.addEventListener('click', displayNumber));

document.querySelector('.add-btn').addEventListener('click', setOperationMode);
document.querySelector('.multiply-btn').addEventListener('click', setOperationMode);
document.querySelector('.subtract-btn').addEventListener('click', setOperationMode);
document.querySelector('.divide-btn').addEventListener('click', setOperationMode);

document.querySelector('.equal-btn').addEventListener('click', equals);
document.querySelector('.clear-btn').addEventListener('click', clearMemory);
document.querySelector('.percent-btn').addEventListener('click', changeToPercent);


