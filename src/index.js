import MovingObject from "./moving-objects.js";
import Asteroid from './asteroid.js';
import GameView from './game-view.js';
import Game from './game.js';


const canvas = document.getElementById("game-canvas");
canvas.width = Game.DIM_X;
canvas.height = Game.DIM_Y;
const ctx = canvas.getContext("2d");

// const game = new Game(ctx);
const gameView = new GameView(ctx);
gameView.start();
// const asteroid = new Asteroid({ pos: [30, 30] });

// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

// mo.draw(ctx);

// const hari = new Asteroid({ pos: [60, 60] });

// hari.draw(ctx);

window.MovingObject = MovingObject;


