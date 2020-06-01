'use strict';

var mover = {
  canPlayerMakeStep: function canPlayerMakeStep(nextPoint) {
    return nextPoint.x >= 0 && nextPoint.x < config.colsCount && nextPoint.y >= 0 && nextPoint.y < config.rowsCount;
  },
  getDirection: function getDirection() {
    var availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];

    while (true) {
      var direction = parseInt(prompt('Введите число (2, 4, 6 или 8, куда вы хотите переместиться, \'Отмена\' для выхода)', ''));

      if (isNaN(direction)) {
        return null;
      }

      if (!availableDirections.includes(direction)) {
        alert('Для перемещения необходимо введсти одно из числе 2, 4, 6 или 8.');
        continue;
      }

      return direction;
    }
  },
  getNextPosition: function getNextPosition(direction) {
    var nextPosition = {
      x: player.x,
      y: player.y
    };

    switch (direction) {
      case 1:
        nextPosition.x--;
        nextPosition.y++;
        break;

      case 2:
        nextPosition.y++;
        break;

      case 3:
        nextPosition.x++;
        nextPosition.y++;
        break;

      case 4:
        nextPosition.x--;
        break;

      case 6:
        nextPosition.x++;
        break;

      case 7:
        nextPosition.x--;
        nextPosition.y--;
        break;

      case 8:
        nextPosition.y--;
        break;

      case 9:
        nextPosition.x++;
        nextPosition.y--;
        break;
    }

    return nextPosition;
  }
};