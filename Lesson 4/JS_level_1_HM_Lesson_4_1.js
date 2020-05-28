// *** 3 УРОК.
// ********************************************************
'use strict';

/* 1. */
let number = Number(prompt('Введите целое число от 0 до 999',''));
let result = {};
function digitsOfNumber(number){
  if (number <0 || number > 999 || !Number.isInteger(number)){
    console.log ('Вы ввели некорректное значение. Введите целое число от 0 до  999');
    return {};
  }
    return {
      units: number % 10,
      tens: Math.floor((number/10)%10),
      hundreds: Math.floor(number/100)
      }
};

// digitsOfNumber(number);
console.log(digitsOfNumber(number));

//Вариант с конструктором


function DigitsOfNumber(number){
  if (number <0 || number > 999 || !Number.isInteger(number)){
    console.log ('Некорректное значение. Введите целое число от 0 до  999');
    result = {};
  }
  this.units = number%10;
  this.tens = Math.floor((number/10)%10);
  this.hundreds = Math.floor(number/100);
};

const result = new DigitsOfNumber (Number(prompt('Введите целое число от 0 до 999')));
console.log(result);