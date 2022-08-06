"use strict";

// Functions

function exp () {
    if (operand1 &&
        !operand2 &&
        !operator &&
        !result) {
            operator = "x^";
            updateDisplay(".operator", operator);

    }
}

function add () {
    if (operand1 &&
        !operand2 &&
        !operator &&
        !result) {
            operator = "+";
            updateDisplay(".operator", operator);

    }
}

function subtract () {
    if (operand1 &&
        !operand2 &&
        !operator &&
        !result) {
            operator = "-";
            updateDisplay(".operator", operator);

    }
}

function multiply () {
    if (operand1 &&
        !operand2 &&
        !operator &&
        !result) {
            operator = "x";
            updateDisplay(".operator", operator);

    }
}

function divide () {
    if (operand1 &&
        !operand2 &&
        !operator &&
        !result) {
            operator = "÷";
            updateDisplay(".operator", operator);

    }
}

function clear () {
    operand1 = "";
    operand2 = "";
    operator = "";
    result = "";
    updateDisplay(".operand1", operand1);
    updateDisplay(".operand2", operand2);
    updateDisplay(".operator", operator);
    updateDisplay(".result", result);

}

function updateDisplay (display, value) {
    // display should be .operand1 or .operand2 or .operator or .result
    let targetDisplay = document.querySelector(display);
    targetDisplay.textContent = value;
}

function addListener (target, func) {
    let button = document.querySelector(target);
    button.addEventListener('click', func);
}

function num7 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "7";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "7";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "7";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "7";
                updateDisplay(".operand2", operand2);
    }

}

function num8 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "8";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "8";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "8";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "8";
                updateDisplay(".operand2", operand2);
    }

}

function num9 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "9";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "9";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "9";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "9";
                updateDisplay(".operand2", operand2);
    }
}

function num4 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "4";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "4";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "4";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "4";
                updateDisplay(".operand2", operand2);
    }
}

function num5 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "5";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "5";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "5";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "5";
                updateDisplay(".operand2", operand2);
    }
}

function num6 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "6";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "6";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "6";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "6";
                updateDisplay(".operand2", operand2);
    }
}

function num1 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "1";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "1";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "1";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "1";
                updateDisplay(".operand2", operand2);
    }
}

function num2 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "2";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "2";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "2";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "2";
                updateDisplay(".operand2", operand2);
    }
}

function num3 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "3";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "3";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "3";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "3";
                updateDisplay(".operand2", operand2);
    }
}

function num0 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "0";
            updateDisplay(".operand1", operand1);

    } else if (operand1 &&
               !operator && 
               !operand2 &&
               !result &&
               operand1.length < 28) {
                operand1 += "0";
                updateDisplay(".operand1", operand1);
    
    } else if (operand1 &&
               operator &&
               !operand2 &&
               !result) {
                operand2 += "0";
                updateDisplay(".operand2", operand2);

    } else if (operand1 &&
               operator &&
               operand2 &&
               !result &&
               operand2.length < 25) {
                operand2 += "0";
                updateDisplay(".operand2", operand2);
    }
}










// START

let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";

addListener(".num-7", num7);
addListener(".num-8", num8);
addListener(".num-9", num9);
addListener(".num-4", num4);
addListener(".num-5", num5);
addListener(".num-6", num6);
addListener(".num-1", num1);
addListener(".num-2", num2);
addListener(".num-3", num3);
addListener(".num-0", num0);

addListener(".clear", clear);

addListener(".exp", exp);
addListener(".add", add);
addListener(".subtract", subtract);
addListener(".multiply", multiply);
addListener(".divide", divide);

