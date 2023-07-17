import MovingObject from "./moving-objects.js";
import { randomVec } from "./util.js";

class Asteroid extends MovingObject {
  static COLOR = '#808080';  // Default color
  static RADIUS = 25;        // Default radius

  constructor(options = {}) {
    options.color = Asteroid.COLOR;          // Default color
    options.radius = Asteroid.RADIUS;        // Default radius
    options.vel = randomVec(Math.random());  // Random speed

    super(options);  // Pass the options object to the parent class constructor
  }
}

export default Asteroid;


