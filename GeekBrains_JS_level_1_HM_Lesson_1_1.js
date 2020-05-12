// *** 1 УРОК. Урок 1. Основы языка JavaScript
// ********************************************************
'use strict';

/* 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.*/

alert('Вводим значение градусов Цельсия выводим результат в Фаренгейтах. Жми!'); 
let calculateTf = function(Tc){ 
    fahrenheitTemperature = (9/5)*Tc+32;
    return fahrenheitTemperature;
};
let fahrenheitTemperature = prompt("Введи значение градусов по Цельсию: ","");
calculateTf(fahrenheitTemperature);
alert('Значение в Фаренгейтах: ' + fahrenheitTemperature.toFixed(2));

// *** Подскажите пожалуйста, почему не срабатывает условие if? По разному пробовала с NaN сравнить..

/*alert('Вводим значение градусов Цельсия выводим результат в Фаренгейтах. Жми!'); 
let calculateTf = function(Tc){
    if (Tc == Number.isNaN(Tc)){
        alert('Некорректный ввод!');
        fahrenheitTemperature = +prompt("Введите число","");
        calculateTf(fahrenheitTemperature);
}    else{
    fahrenheitTemperature = (9/5)*Tc+32;
    return fahrenheitTemperature;
    }
};
let fahrenheitTemperature = +prompt("Введи значение градусов по Цельсию: ","");
calculateTf(fahrenheitTemperature);
alert('Значение в Фаренгейтах: ' + fahrenheitTemperature.toFixed(2));*/