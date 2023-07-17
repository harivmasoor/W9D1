import Asteroid from './asteroid.js';

class Game {
  static DIM_X = 800;
  static DIM_Y = 600;
  static NUM_ASTEROIDS = 10;

  constructor() {
    this.asteroids = [];
    this.addAsteroids();
  }

  addAsteroids() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        const asteroid = new Asteroid({ pos: this.randomPosition(), game: this });
      this.asteroids.push(asteroid);
    }
  }

  randomPosition() {
    const x = Math.floor(Math.random() * Game.DIM_X);
    const y = Math.floor(Math.random() * Game.DIM_Y);
    return [x, y];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(asteroid => asteroid.draw(ctx));
  }

  moveObjects() {
    this.asteroids.forEach(asteroid => asteroid.move());
  }
  wrap(pos) {
    let wrappedPos = [0, 0];
    wrappedPos[0] = (pos[0] + Game.DIM_X) % Game.DIM_X;
    wrappedPos[1] = (pos[1] + Game.DIM_Y) % Game.DIM_Y;
    return wrappedPos;
}
}

export default Game;