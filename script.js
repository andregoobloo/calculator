"use strict";

const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const numberBtns = document.querySelectorAll(".num");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equals");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const subtractBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");

// Variables for calculator operation
let num1, num2, operator, displayArray;

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

const equals = function () {
  if (operator === multiply) {
    displayArray = display.textContent.split(`x`);
  } else if (operator === divide) {
    displayArray = display.textContent.split(`÷`);
  } else if (operator === add) {
    displayArray = display.textContent.split(`+`);
  } else if (operator === subtract) {
    displayArray = display.textContent.split(`-`);
  }
  num1 = Number(displayArray[0]);
  num2 = Number(displayArray[1]);
  let result = operate(num1, num2, operator);
  display.textContent = result;
};

const operate = function (num1, num2, operator) {
  return operator(num1, num2);
};

// Calculator display
calculator.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("num")) {
    display.textContent += e.target.innerText;
  }
  if (e.target.classList.contains("multiply")) {
    display.textContent += e.target.innerText;
    operator = multiply;
  }
  if (e.target.classList.contains("divide")) {
    display.textContent += e.target.innerText;
    operator = divide;
  }
  if (e.target.classList.contains("subtract")) {
    display.textContent += e.target.innerText;
    operator = subtract;
  }
  if (e.target.classList.contains("add")) {
    display.textContent += e.target.innerText;
    operator = add;
  }
  if (e.target.classList.contains("clear")) {
    display.textContent = "";
  }
  if (e.target.classList.contains("delete")) {
    display.textContent = display.textContent.slice(0, -1);
  }
  if (e.target.classList.contains("equals")) {
    equals();
  }
});
