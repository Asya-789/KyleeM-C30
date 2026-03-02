// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Ball, Ball2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  Ball = {//object notation
    x: 0, y: 50, size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(20), timeY: random(20), timeOff: 0.008
  }
  Ball2 = {//object notation
    x: 400, y: 500, size: 40,
    c: color(random(255), random(255), random(255)),
    timeX: random(20), timeY: random(20), timeOff: 0.008
  }
}

function moveBall(b) {
  // b -> ball type object

  //how to change x and y with noise
  let dx = noise(b.timeX);
  let dy = noise(b.timeY);
  dx = map(dx, 0, 1, 0, windowWidth);
  dy = map(dy, 0, 1, 0, windowHeight);

  //advance noise
  b.timeX += b.timeOff; b.timeY += b.timeOff;

  //update pos
  b.x = dx; b.y = dy;

  //constraints
  if(b.x < 0){
    b.x = width;
  }
  else if(b.x > width){
    b.x = 0;
  }
  if(b.y < 0){
    b.y = height;
  }
  else if(b.y > height){
    b.y = 0;
  }

  //making cicle
  fill(b.c)
  circle(b.x, b.y, b.size)
}

function draw() {
  moveBall(Ball);
  moveBall(Ball2);
}