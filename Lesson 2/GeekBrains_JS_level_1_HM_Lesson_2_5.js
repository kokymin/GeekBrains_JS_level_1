// *** 2 УРОК. Основные операторы JavaScript
// ********************************************************
'use strict';

/* 5. */

let question = prompt ('Что будем делать? (+ - * /)', '');
let result = mathOperation (10, -15, question);

function mathOperation(arg1, arg2, operation){
  switch (operation) {
    case '+': 
      return alert (arg1 + arg2);
      break;
    case '-':
      return alert (arg1 - arg2);
      break;
    case '*':
      return alert (arg1 * arg2);
      break;
     case '/':
      return alert ((arg1 / arg2).toFixed(2));
      break;
    default:
      alert( 'Ошибка' );
  }; 
};