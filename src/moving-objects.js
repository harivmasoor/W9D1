class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;  // this line is new
}
  
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  
    move() {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
      this.pos = this.game.wrap(this.pos);
  }
  }

export default MovingObject;