// *** 3 УРОК.
// ********************************************************
'use strict';

/* 1. */

// С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно,
//чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число

let remainderDivision = null;

for (let i = 0; i <= 10; i++){
    remainderDivision = i % 2;

    if ( i == 0) {
      console.log (`${i}  - это ноль`) 
         
    } else if (remainderDivision == 0) {
      console.log (`${i}  - это четное число`)    

    } else if (remainderDivision != 0) {
      console.log (`${i}  - это нечетное число`)    
    }      
}


