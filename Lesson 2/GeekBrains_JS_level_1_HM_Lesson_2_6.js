// *** 2 УРОК. Основные операторы JavaScript
// ********************************************************
'use strict';

/* 6. */
// Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
// положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
// То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
// числа.

let number = parseInt( prompt('Давайте положим на счет деньги?\nВведите количество рублей: ', ''));
let last = number.toString().slice(-1);

  switch (last) {
    case '1': 
      alert (`Ваша сумма в ${number} рубль успешно зачислена.`);
      break;
    case '2': 
    case '3': 
    case '4': 
      alert (`Ваша сумма в ${number} рубля успешно зачислена.`);
      break;
    case '0': 
    case '5': 
    case '6':
    case '7': 
    case '8': 
    case '9':
      alert (`Ваша сумма в ${number} рублей успешно зачислена.`);
      break;
    default:
      alert( 'Ошибка' );
  }; 

