import Game from './game.js';

class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
  }

  start() {
    setInterval(() => {
      this.game.moveObjects(this.game.asteroids);
      this.game.draw(this.ctx);
    }, 5);
  }
}

export default GameView;