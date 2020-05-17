// *** 2 УРОК.
// ********************************************************
'use strict';
/* 4. */

var addition = function addition(a, b) {
  return a + b;
};

var subtraction = function subtraction(a, b) {
  return a - b;
};

var composition = function composition(a, b) {
  return a * b;
};

var division = function division(a, b) {
  return a / b;
};

console.log('Проверка сложения: ' + addition(5, 8));
console.log('Проверка вычитания: ' + subtraction(5, 8));
console.log('Проверка умножения: ' + composition(5, 8));
console.log('Проверка деления: ' + division(5, 8).toFixed(2)); // Вариант со switch для себя на пробу:

/*let a = +prompt ('Введите первое число','');
let b = +prompt ('Введите второе число','');
let askForOperation = prompt('a = 2, b = -8. Введите знак операции над числами (+, -, /, *):');

switch (askForOperation) {
    case '+': 
       alert ('Складываем. Получим: ' + (a + b));
       break;
    case '-':
        alert ('Вычитаем. Получим: ' + (a - b));
        break;
    case '*':
        alert ('Умножаем. Получим: ' + (a * b));
        break;
     case '/':
         alert ('Делим. Получим: ' + (a / b));
         break;
  }*/