// *** 3 УРОК.
// ********************************************************
'use strict';

/* 3. */

// Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

//ВАРИАНТ с forEach
products.forEach(element => {
  element.price = element.price - element.price*0.15;
});

//Вывод в консоль построчно только стоимости
for (let i = 0; i < products.length; i++){
  console.log(`Цена со скидкой 15%. Позиция в массиве ${i}: ${products[i].price}`);
  }

//ВАРИАНТ с for
for (let i = 0; i < products.length; i++) {
  products[i].price = products[i].price - products[i].price*0.15;
}
console.log(products);

