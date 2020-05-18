// *** 2 УРОК.
// ********************************************************
'use strict';

/* 5. */

/**
 * Функция вычисляет выражение из 2-х чисел,
 * в зависимости от выбора оператора пользователем
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {operation} operation //знак операции над числами
 * @returns {alert} //сообщение с результатом вычисления
 */

function mathOperation(arg1, arg2, operation){
  switch (operation) {
    case '+': 
      return alert ( `Результат вычислений: ${arg1 + arg2}` );
    case '-': 
      return alert ( `Результат вычислений: ${arg1 - arg2}` );
    case '*': 
      return alert ( `Результат вычислений: ${arg1 * arg2}` );
     case '/':
      return alert ( `Результат вычислений: ${(arg1 / arg2).toFixed(2)}` );
    default:
      alert( 'Ошибка' );
  }; 
};

let question = prompt ('Что будем делать? (+ - * /)', '');
let result = mathOperation (10, -15, question);