'use strict';

var renderer = {
  map: '',

  /**
   * Отображает игру в консоли.
   */
  render: function render() {
    for (var row = 0; row < config.rowsCount; row++) {
      for (var col = 0; col < config.colsCount; col++) {
        if (player.y === row && player.x === col) {
          this.map += '0 ';
        } else {
          this.map += 'x ';
        }
      }

      this.map += '\n';
    }

    console.log(this.map);
  },
  clear: function clear() {
    console.clear();
    this.map = '';
  }
};