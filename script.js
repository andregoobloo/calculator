"use strict";

// const fullOutput = document.querySelector(".full-output");
const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const numberBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equals");

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

// Variables for calculator operation
let num1, num2, operator;

const operate = function (num1, num2, operator) {
  return operator(num1, num2);
};

calculator.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("num")) {
    display.textContent += e.target.innerText;
    console.log(e.target.innerText);
  }
  if (e.target.classList.contains("operator")) {
    display.textContent += e.target.innerText;
  }
  if (e.target.classList.contains("clear")) {
    display.textContent = "";
  }
  if (e.target.classList.contains("delete")) {
    display.textContent = display.textContent.slice(0, -1);
  }
});
