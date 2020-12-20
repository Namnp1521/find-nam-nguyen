export class Star {
  constructor(p5, x, y, r, s) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = s;
    this.opacity = 255;
  }

  show() {
    this.fall();
    this.p5.push();
    this.p5.fill(this.p5.color(255, 255, 255, this.opacity));
    this.p5.noStroke();
    this.p5.ellipse(this.x, this.y, this.r, this.r);
    this.p5.pop();
  }

  fall() {
    this.y += this.speed;
  }

  init(wScreen, hScreen) {
    this.y = -5;
    this.x = this.p5.random(wScreen);
    this.r = this.p5.random(5);
    this.speed = this.p5.random(10);
  }
}