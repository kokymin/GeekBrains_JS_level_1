// *** 2 УРОК.
// ********************************************************
'use strict';

/* 5. */

/**
 * Функция вычисляет выражение из 2-х чисел,
 * в зависимости от выбора оператора пользователем
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation //знак операции над числами
 * @returns {alert} //сообщение с результатом вычисления
 */

let a = Number( prompt ('Введите первое число',''));
let b = Number( prompt ('Введите второе число',''));

function mathOperation(arg1, arg2, operation){
  switch (operation) {
    case '+': 
      return arg1 + arg2;
    case '-': 
      return arg1 - arg2;
    case '*': 
      return arg1 * arg2;
    case '/':
      return (arg1 / arg2).toFixed(2);
    default:
      return 'Ошибка. Введено некорректное значение';
  }; 
};

let question = prompt ('Что будем делать? (+ - * /)', '');
let result = mathOperation (a, b, question);
alert ( `Результат вычислений: ${result}` );