"use strict";

// Functions

function squareRoot () {

}

function exponent () {

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

function num7 () {
    if (!operand1 &&
        !operator && 
        !operand2 &&
        !result) {
            operand1 += "7";
            updateDisplay(".operand1", operand1);

    }

}

function addListener (target, func) {
    let button = document.querySelector(target);
    button.addEventListener('click', func);
}





// START

let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";

addListener(".num-7", num7);
addListener(".clear", clear);

