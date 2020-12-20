import { Star } from "./star";
import { Rock } from "./rock";

var w = window.innerWidth;
var h = window.innerHeight;

let starArr = [];
let rockAr = [];

export function setup(p5) {
  p5.createCanvas(w, h);

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
}
