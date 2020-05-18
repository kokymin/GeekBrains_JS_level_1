// *** 2 УРОК.
// ********************************************************
'use strict';

/* 4. */
/**
 * Функции: складывает/вычитает/умножает/делит 2 числа
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */

let addition = function(a,b) {
  return a + b;
};

let subtraction = function(a,b) {
  return a - b;
};

let composition = function(a,b) {
  return a * b;
};

let division = function(a,b) {
  return a / b;
};

// console.log (`Проверка сложения: ${addition(5, 8)}`);
// console.log (`Проверка вычитания: ${subtraction(5, 8)}`);
// console.log (`Проверка умножения: ${composition(5, 8)}`);  
// console.log (`Проверка деления: ${division(5, 8).toFixed(2)}`);

// Вариант со switch для себя на пробу:

/*let a = Number( prompt ('Введите первое число',''));
let b = Number ( prompt ('Введите второе число',''));
let askForOperation = prompt('Введите знак операции над числами (+, -, /, *):');

switch (askForOperation) {
    case '+': 
      alert (`Складываем. Получим: ${a + b}`);
      break;
    case '-':
      alert (`Вычитаем. Получим: ${a - b}`);
      break;
    case '*':
      alert (`Умножаем. Получим: ${a * b}`);
      break;
    case '/':
      alert (`Делим. Получим: ${a / b}`);
      break;
    default:
      alert( 'Ошибка' );
  }*/
