'use strict';

/* 2. */
// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// конструктор Product, который принимает параметры name и price,
// сохраните их как свойства объекта. Также объекты типа Product
// должны иметь метод make25PercentDiscount, который будет уменьшать
// цену в объекте на 25%.

//ES5

function Product (name, price){
  this.name =  name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function (discount){
  this.price = this.price - (this.price / 100 * discount);
}

const cardProducts = [
  new Product ('refrigerator', 45000),
  new Product ('blender', 5000),
  new Product ('coffee maker', 5000)];

console.log(cardProducts);

for (Product of cardProducts) {
  Product.make25PercentDiscount(25);
}
console.log(cardProducts);
