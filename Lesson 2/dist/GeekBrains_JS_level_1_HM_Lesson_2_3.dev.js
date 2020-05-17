// *** 2 УРОК.
// ********************************************************
'use strict';
/* 3. */

var a = +prompt('Введите первое число', '');
var b = +prompt('Введите второе число', '');
var c = a >= 0 && b >= 0 ? a - b : a < 0 && b < 0 ? a * b : a * b < 0 ? a - b : 'Ошибка, неопознанное значение!';
alert(c); // второй вариант через логическое ИЛИ: 

/*let a = +prompt ('Введите первое число','');
let b = +prompt ('Введите второе число','');

let check1 = function (a,b) {
  if (a >= 0 && b >= 0) return a - b;
}
let check2 = function (a,b) {
  if (a < 0 && b < 0) return a * b;
}
let check3 = function (a,b) {
  if (a * b <0) return a - b;
}
let name = alert( check1(a,b) || check2(a,b) || check3(a,b) || "Ошибка, неопознанное значение!");*/