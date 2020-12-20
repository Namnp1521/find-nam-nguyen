import { Bullet } from "./bullet";
import {
  LEFT_ARROW,
  RIGHT_ARROW,
  DOWN_ARROW,
  UP_ARROW,
  SPACE,
} from "./constant";

export class Plane {
  constructor(p5, x, y, wScreen, hScreen) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.bulletArr = [];
    this.speed = 3;
    this.isFire = false;
    this.state = 1;
    this.curBullet = 50;
    this.creep = 0;
    this.isDie = false;
    this.wScreen = wScreen;
    this.hScreen = hScreen;
  }

  show() {
    // this.move();
    // this.fire();

    this.p5.push();
    this.p5.noFill();
    this.p5.strokeWeight(2);
    this.p5.stroke(this.p5.color(232, 249, 233));
    // dau
    this.p5.triangle(
      this.x - 5,
      this.y + 10,
      this.x,
      this.y,
      this.x + 5,
      this.y + 10
    );
    // than
    this.p5.rect(this.x - 5, this.y + 10, 10, 20);
    // canh
    this.p5.triangle(
      this.x - 10,
      this.y + 10,
      this.x - 5,
      this.y + 5,
      this.x - 5,
      this.y + 10
    );
    this.p5.triangle(
      this.x + 10,
      this.y + 10,
      this.x + 5,
      this.y + 5,
      this.x + 5,
      this.y + 10
    );

    if (this.state == DOWN_ARROW) {
      this.p5.triangle(
        this.x - 20,
        this.y + 25,
        this.x - 5,
        this.y + 15,
        this.x - 5,
        this.y + 20
      );
      this.p5.triangle(
        this.x + 20,
        this.y + 25,
        this.x + 5,
        this.y + 15,
        this.x + 5,
        this.y + 20
      );
    } else if (this.state == UP_ARROW) {
      this.p5.triangle(
        this.x - 10,
        this.y + 40,
        this.x - 5,
        this.y + 15,
        this.x - 5,
        this.y + 20
      );
      this.p5.triangle(
        this.x + 10,
        this.y + 40,
        this.x + 5,
        this.y + 15,
        this.x + 5,
        this.y + 20
      );
    } else {
      this.p5.triangle(
        this.x - 20,
        this.y + 30,
        this.x - 5,
        this.y + 15,
        this.x - 5,
        this.y + 20
      );
      this.p5.triangle(
        this.x + 20,
        this.y + 30,
        this.x + 5,
        this.y + 15,
        this.x + 5,
        this.y + 20
      );
    }

    // gun
    this.p5.triangle(
      this.x - 5,
      this.y + 30,
      this.x,
      this.y + 10,
      this.x + 5,
      this.y + 30
    );
    this.p5.triangle(
      this.x - 5,
      this.y + 30,
      this.x,
      this.y + 20,
      this.x + 5,
      this.y + 30
    );
    this.p5.pop();

    // lua duoi
    this.p5.push();
    this.p5.strokeWeight(2);
    // stroke("#ff0000");
    this.p5.fill(255);
    this.p5.beginShape();
    this.p5.vertex(this.x - 5, this.y + 30);
    this.p5.vertex(
      this.x - this.p5.random(5),
      this.y + 30 + this.p5.random(20)
    );
    this.p5.vertex(this.x + 5, this.y + 30);
    this.p5.endShape();
    this.p5.beginShape();
    this.p5.vertex(this.x + this.p5.random(5), this.y + 30);
    this.p5.vertex(
      this.x + this.p5.random(5),
      this.y + 30 + this.p5.random(20)
    );
    this.p5.endShape();
    this.p5.beginShape();
    this.p5.vertex(this.x + 5, this.y + 30);
    this.p5.vertex(
      this.x + this.p5.random(5),
      this.y + 30 + this.p5.random(20)
    );
    this.p5.vertex(this.x - 5, this.y + 30);
    this.p5.endShape();
    this.p5.pop();

    // fire
    for (let i = 0; i < this.bulletArr.length; i++) {
      this.bulletArr[i].show();
    }
  }

  move() {
    if (
      (this.p5.keyIsDown(UP_ARROW) && this.p5.keyIsDown(LEFT_ARROW)) ||
      (this.p5.keyIsDown(UP_ARROW) && this.p5.keyIsDown(RIGHT_ARROW)) ||
      (this.p5.keyIsDown(DOWN_ARROW) && this.p5.keyIsDown(RIGHT_ARROW)) ||
      (this.p5.keyIsDown(DOWN_ARROW) && this.p5.keyIsDown(LEFT_ARROW))
    ) {
    } else if (this.p5.keyIsDown(UP_ARROW)) {
      this.state = UP_ARROW;
      if (this.y - this.speed > 0) {
        this.y -= this.speed;
      }
    } else if (this.p5.keyIsDown(LEFT_ARROW)) {
      this.state = LEFT_ARROW;
      if (this.x - this.speed + 1.2 > 10) {
        this.x -= this.speed - 1.2;
      }
    } else if (this.p5.keyIsDown(DOWN_ARROW)) {
      this.state = DOWN_ARROW;
      if (this.y + this.speed - 1.5 < this.hScreen - 40) {
        this.y += this.speed - 1.5;
      }
    } else if (this.p5.keyIsDown(RIGHT_ARROW)) {
      this.state = RIGHT_ARROW;
      if (this.x + this.speed - 1.2 < this.wScreen - 10) {
        this.x += this.speed - 1.2;
      }
    } else {
      this.state = 1;
    }
  }

  fire() {
    if (this.p5.keyIsDown(SPACE)) {
      if (!this.isFire) {
        this.isFire = true;
        this.bulletArr.push(new Bullet(this.p5, this.x, this.y + 15));
      }
    } else {
      this.isFire = false;
    }
  }

  checkFire(rockArr) {
    for (let i = 0; i < rockArr.length; i++) {
      for (let j = 0; j < this.bulletArr.length; j++) {
        this.bulletArr[j].checkFireRock(rockArr[i]);
      }
    }
  }
}
