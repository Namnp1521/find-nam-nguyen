const TYPE = {
  SQUA: 0,
  TRI: 1,
  CIR: 2
}

export class Rock {
  constructor(p5, wScreen, hScreen) {
    this.p5 = p5;
    this.y = this.p5.random(-300, 0);
    this.x = this.p5.random(wScreen);
    this.v = this.p5.random(1, 3);
    this.r = this.p5.random(10, 20);
    this.die = false;
    this.orient = 0;
    this.type = this.p5.floor(this.p5.random(3));
    this.wScreen = wScreen;
    this.hScreen = hScreen;
  }

  show() {
    // this.fall();

    if (!this.die) {
      this.p5.push();
      this.p5.rotate(this.orient);
      this.p5.noFill();
      this.p5.strokeWeight(2);
      this.p5.stroke(255);
      switch (this.type) {
        case TYPE.SQUA:
          this.p5.stroke(this.p5.color(186, 241, 161));
          this.p5.rect(this.x, this.y, this.r, this.r, 3);
          break;
        case TYPE.TRI:
          this.p5.stroke(this.p5.color(157, 227, 208));
          this.p5.triangle(this.x, this.y,
                   this.x + this.r, this.y,
                   this.x + this.r/2, this.y + this.r*this.p5.sqrt(3)/2);
          break;
        case TYPE.CIR:
          this.p5.stroke(this.p5.color(246, 136, 187));
          this.p5.circle(this.x, this.y, this.r/2);
          break;
        default:
          this.p5.stroke(this.p5.color(186, 241, 161));
          this.p5.rect(this.x, this.y, this.r, this.r, 3);
          break;
      }
      this.p5.pop();
    }
  }

  fall() {
    this.y += this.v;

    if (this.y > this.hScreen) {
      this.die = false;
      this.y = -100;
      this.x = this.p5.random(this.wScreen);
      this.v = this.p5.random(1, 3);
      this.r = this.p5.random(10, 20);
      // this.orient = PI / random(10);
      this.type = this.p5.floor(this.p5.random(3));
    }
  }
}