// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //transformations reset at start of draw
  background(255);
  drawBasicGrid(220);

  //transformation one: TRANSLATION
  //add push()  pop()

  /*
  push();
  translate(200, 140);
  drawBasicGrid(120);
  rectangleRed(0, 0);
  rectangleBlue(-60, -40);

  translate(100, 300);
  drawBasicGrid(220);
  rectangleBlue(0, 0);

  pop();
  rectangleRed(0, 0);

  */

  //transformation two: SCALE
  /*
  translate(windowWidth/2, windowHeight/2);
  let s = map(mouseX, 0, width, 0.1, 10);
  scale(s);
  drawBasicGrid(120);
  rectMode(CENTER);
  rectangleBlue(0,0);
  */

  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  /*
  translate(windowWidth/2, windowHeight/2);
  angleMode(DEGREES);
  rotate(frameCount);
  drawBasicGrid(0);
  face(0,0);
  */


  //Combinations of Transformations

  let n = 20
  angleMode(DEGREES);
  translate(200,200);
  rotate(frameCount)
  circle(0,0,150)
  for(let i = 0; i < n; i++){
    line(0,0,75,0)
    rotate(360/n)
  }

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x, y);
  ellipseMode(CENTER);
  fill(200, 200, 0);
  stroke(0);
  ellipse(0, 0, 80, 80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25, 0, 10, 10);
  ellipse(25, 0, 10, 10);
  strokeWeight(5);
  line(-30, -10, 30, -10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 40, 40);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 40, 40);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5, 0, 5, 0);
  line(0, 5, 0, -5);
  strokeWeight(1);
}