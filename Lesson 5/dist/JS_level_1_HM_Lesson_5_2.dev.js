// *** 3 УРОК.
// ********************************************************
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('load', function () {
  console.log('все загружено');
}); // Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// конструктор Product, который принимает параметры name и price,
// сохраните их как свойства объекта. Также объекты типа Product
// должны иметь метод make25PercentDiscount, который будет уменьшать
// цену в объекте на 25%.
//ES5
// function Product (name, price){
//   this.name =  name;
//   this.price = price;
// }
// Product.prototype.make25PercentDiscount = function (discount){
//   this.price = this.price - (this.price / 100 * discount);
// }
// const cardProducts = [
//   new Product ('refrigerator', 45000),
//   new Product ('blender', 5000),
//   new Product ('coffee maker', 5000)];
// console.log(cardProducts);
// for (Product of cardProducts) {
//   Product.make25PercentDiscount(25);
// }
// console.log(cardProducts);
//ES6

var Product =
/*#__PURE__*/
function () {
  function Product(name, price) {
    _classCallCheck(this, Product);

    this.name = name;
    this.price = price;
  }

  _createClass(Product, [{
    key: "make25PercentDiscount",
    value: function make25PercentDiscount(discount) {
      this.price = this.price - this.price / 100 * discount;
    }
  }]);

  return Product;
}();

var cardProducts = [new Product('refrigerator', 45000), new Product('blender', 5000), new Product('coffee maker', 5000)];
console.log(cardProducts);

for (var _i = 0, _cardProducts = cardProducts; _i < _cardProducts.length; _i++) {
  Product = _cardProducts[_i];
  Product.make25PercentDiscount(25);
}

alert(cardProducts);