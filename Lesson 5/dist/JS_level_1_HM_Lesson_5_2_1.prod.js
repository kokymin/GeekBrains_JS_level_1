"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var c=r[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}var Product=function(){function t(e,r){_classCallCheck(this,t),this.name=e,this.price=r}return _createClass(t,[{key:"make25PercentDiscount",value:function(e){this.price=this.price-this.price/100*e}}]),t}(),cardProducts=[new Product("refrigerator",45e3),new Product("blender",5e3),new Product("coffee maker",5e3)];console.log(cardProducts);for(var _i=0,_cardProducts=cardProducts;_i<_cardProducts.length;_i++)(Product=_cardProducts[_i]).make25PercentDiscount(25);alert(cardProducts);