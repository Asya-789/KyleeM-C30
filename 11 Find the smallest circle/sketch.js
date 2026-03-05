// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numCircles = 5;
let Circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeCircles()
}

function draw() {
  background(220);
  renderCircles();
}

function makeCircles() {
  for (let i = 0; i <= numCircles; i++) {
    let x_ = random(0, width);
    let y_ = random(0, height);
    let s_ = random(2, 150);
    let c = { x:x_, y:y_, s:s_ }
    Circles.push(c)
  }
}
function renderCircles(){
  let smallest = Infinity;
  let smallestY = 0;
  let smallestX = 0;
  for (let c of Circles){
    noFill();
    if (c.s < smallest){
      smallest = c.s
      smallestX = c.x
      smallestY = c.y
    }
    circle(c.x,c.y,c.s);
  }
  fill(255, 0,0)
  circle(smallestX,smallestY, smallest)
}