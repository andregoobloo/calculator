"use strict";

const display = document.querySelector(".num-display");
const calculator = document.querySelector(".calculator");
const num9 = document.querySelector(".nine");
const num5 = document.querySelector(".five");
const plus = document.querySelector(".plus");
const equals = document.querySelector(".equals");

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
    display.textContent = e.target.innerText;
    console.log(e.target.innerText);
  }
  if (e.target.classList.contains("clear")) {
    display.textContent = 0;
  }
});

// num9.addEventListener("click", function (e) {
//   display.textContent = "9";
//   num1 = 9;
// });
// plus.addEventListener("click", function () {
//   operator = add;
// });
// num5.addEventListener("click", function () {
//   display.textContent = "5";
//   num2 = 5;
// });
// equals.addEventListener("click", function () {
//   console.log(num1);
//   console.log(num2);
//   console.log(operator);
//   let answer = operate(num1, num2, operator);
//   console.log(answer);
//   display.textContent = answer;
// });
