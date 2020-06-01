// *** 3 УРОК.
// ********************************************************
'use strict';
/* 3. */
// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта.
// Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.
//ES5
// function my_initiation() {

var content2 = document.getElementsByTagName("div");
content2.innerHTML = "Совершенно новая информация";
console.log(content2); // };
// window.onload = my_initiation();
// var container = document.getElementsByClassName("container");
//   container.innerHTML = "Абра-кадабра!";

function Product(autor, text, date) {
  this.autor = autor;
  this.text = text;
  this.date = date;
}

Product.prototype.edit = function (value) {
  this.text = value;
};

var catalogUnit = new Product('Блок', 'Cтихи', '27.05.2020');
console.log(catalogUnit);
catalogUnit.edit('Поменяли на Драйзера');
console.log(catalogUnit);

function AttachedPost(autor, text, date) {
  Product.call(this, autor, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Product.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

var Post = new AttachedPost('Есенин', 'Cтихи', '27.05.2020');
Post.makeTextHighlighted();
alert(Post); //ES6
// class Product {
//   constructor (autor, text, date){
//   this.autor =  autor;
//   this.text = text;
//   this.date = date
// }
//   edit (value){
//     this.text = value;
//     }
// }
// const catalogUnit = new Product ('Блок', 'Cтихи', '27.05.2020');
// console.log(catalogUnit);
// catalogUnit.edit('Поменяли на Драйзера');
// console.log(catalogUnit);
// class AttachedPost extends Product{
//   constructor (autor, text, date){
//     super(autor, text, date);
//     this.highlighted = false;
//   }
//   makeTextHighlighted(){
//     this.highlighted = true;
//   }
// }
// const Post = new AttachedPost('Есенин', 'Cтихи', '27.05.2020');
// Post.makeTextHighlighted();
// console.log(Post);