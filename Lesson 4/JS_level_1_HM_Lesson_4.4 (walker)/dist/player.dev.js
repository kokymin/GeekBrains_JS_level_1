'use strict';

var player = {
  x: 0,
  y: 0,
  move: function move(nextPoint) {
    this.x = nextPoint.x;
    this.y = nextPoint.y;
  }
};