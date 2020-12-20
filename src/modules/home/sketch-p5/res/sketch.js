import { Plane } from "./plane";
import { Star } from "./star";
import { Rock } from "./rock";

var w = window.innerWidth;
var h = window.innerHeight;

let plane;
let starArr = [];
let rockAr = [];
let xGuide = w - 50;
let yGuide = h - 50;
let curKeyBoard = 0;

export function setup(p5) {
  p5.createCanvas(w, h);

  plane = new Plane(p5, 50, h - 50, w, h);
  for (let i = 0; i < 100; i++) {
    let star = new Star(p5, p5.random(w), p5.random(h), p5.random(5), p5.random(10));
    starArr.push(star);
  }

  for (let i = 0; i < 25; i++) {
    let rock = new Rock(p5, w, h);
    rockAr.push(rock);
  }
}

export function draw(p5) {
  p5.background(0);
  p5.frameRate(60);

  // guide
  p5.push();
  p5.noFill();
  p5.strokeWeight(2);
  p5.stroke(255);
  p5.pop();

  // game
  plane.move();
  plane.fire();
  plane.show();

  for (let i = 0; i < starArr.length; i++) {
    let star = starArr[i];
    if (star.y > h) {
      star.init(w, h);
    } else {
      star.show();
    }
  }

  for (let i = 0; i < rockAr.length; i++) {
    rockAr[i].fall();
    rockAr[i].show();
  }

  plane.checkFire(rockAr);
}

export function keyPressed(p5) {
  curKeyBoard = p5.keyCode;
}
