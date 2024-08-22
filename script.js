"use strict";

const display = document.querySelector(".display");
const smallDisplay = document.querySelector(".small-display");
const calculator = document.querySelector(".calculator");
const numberBtns = document.querySelectorAll(".num");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equals");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const subtractBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const decimalBtn = document.querySelector(".decimal");

// Variables for calculator operation
let num1,
  num2,
  operator,
  displayArray = [];

// Calculator functions
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const operate = function (num1, num2, operator) {
  return operator(num1, num2);
};

const equals = function () {
  if (operator === multiply) {
    displayArray = smallDisplay.textContent.split(`x`); //
  } else if (operator === divide) {
    displayArray = smallDisplay.textContent.split(`÷`);
  } else if (operator === add) {
    displayArray = smallDisplay.textContent.split(`+`);
  } else if (operator === subtract) {
    displayArray = smallDisplay.textContent.split(`-`);
  }
  num1 = Number(displayArray[0]);
  num2 = Number(displayArray[1]);
  let result = operate(num1, num2, operator);
  display.textContent = result;
  smallDisplay.textContent = result;
};

const operaterBtnsFunctionality = function (e) {
  if (
    smallDisplay.textContent.includes("+") ||
    smallDisplay.textContent.includes("-") ||
    smallDisplay.textContent.includes("x") ||
    smallDisplay.textContent.includes("÷")
  ) {
    equals();
  }
  display.textContent = "";
  smallDisplay.textContent += e.target.innerText;
};

// Calculator display
calculator.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("num")) {
    display.textContent += e.target.innerText;
    smallDisplay.textContent += e.target.innerText;
  }
  if (e.target.classList.contains("multiply")) {
    operaterBtnsFunctionality(e);
    operator = multiply;
  }
  if (e.target.classList.contains("divide")) {
    operaterBtnsFunctionality(e);
    operator = divide;
  }
  if (e.target.classList.contains("subtract")) {
    operaterBtnsFunctionality(e);
    operator = subtract;
  }
  if (e.target.classList.contains("add")) {
    operaterBtnsFunctionality(e);
    operator = add;
  }
  if (e.target.classList.contains("decimal")) {
    if (display.textContent.includes(".")) return;
    display.textContent += e.target.innerText;
    smallDisplay.textContent += e.target.innerText;
  }
  if (e.target.classList.contains("clear")) {
    display.textContent = "";
    smallDisplay.textContent = "";
  }
  if (e.target.classList.contains("delete")) {
    display.textContent = display.textContent.slice(0, -1);
  }
  if (e.target.classList.contains("equals")) {
    equals();
  }
});

// Then in the main display it only shows one element of the array at once
// Makes it easier to stop user from inputting multiple operators
// multiple operators can be deal with by using array length
// equal function is run when operand clicked when arraylength === 2
