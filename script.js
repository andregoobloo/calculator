"use strict";

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

console.log(operate(5, 4, divide));
