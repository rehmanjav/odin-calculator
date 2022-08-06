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







// START

let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";

addListener(".num-7", num7);

addListener(".clear", clear);

addListener(".exp", exp);
addListener(".add", add);
addListener(".subtract", subtract);
addListener(".multiply", multiply);
addListener(".divide", divide);

