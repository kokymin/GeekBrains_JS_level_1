// *** 2 УРОК. Основные операторы JavaScript
// ********************************************************
'use strict';

/* 1. */

//1.1 результат: undefined. Т.к. переменная объявлена, но никакого значения ей не присвоено
let a =1, b = 1, c, d;
console.log(c);

//1.2 результат: 1. Т.к. постфиксная форма инкремента возвращает старое значение (до увеличения)
d = b++;
console.log(d);

//1.3 результат: 4. Т.к. префиксная форма возвращает новое значение, которое можно сразу использовать ++а = 2.
//Также инкремент имеет больший приоритет перед сложением, в данном примере выолняется первым.
c = 2+ ++a;
console.log(c);

//1.4 результат: 4. Т.к. в 1.2 b было увеличено на 1 и стало 2, постфиксная форма вернула это значение.
//Также инкремент имеет больший приоритет перед сложением, в данном примере выолняется первым.
d = 2 + b++;
alert (d);

//1.5 результат: 2. Т.к. в 1.3 а было увеличено на 1 (++а)
console.log(a);
//1.6 результат: 3. Т.к. в 1.2 и 1.4 b подверглась инкременту
console.log(b);