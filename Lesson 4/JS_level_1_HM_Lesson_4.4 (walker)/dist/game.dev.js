'use strict';

var game = {
  /**
   * Запускает игру
   */
  run: function run() {
    while (true) {
      //Получаем направление от игрока.
      var direction = mover.getDirection();

      if (direction === null) {
        console.log('Игра окончена');
        return;
      }

      var nextPoint = mover.getNextPosition(direction);

      if (mover.canPlayerMakeStep(nextPoint)) {
        renderer.clear();
        player.move(nextPoint);
        renderer.render();
      }
    }
  },
  //Этот метод выполняется при открытии страницы
  init: function init() {
    console.log('Ваше положение на поле в виде о.');
    renderer.render();
    console.log('Чтобы начать иру набрите game.run() и нажмите Enter.');
  }
};
game.init();