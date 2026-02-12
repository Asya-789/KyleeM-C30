// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let move = 0;
let Headsize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255)
  drawAlien(Headsize);
}

function drawAlien(Headsize){
  if (keyIsDown(65)){
    move = move - 20
  }
  if (keyIsDown(68)){
    move = move + 20
  }
  noStroke();
  fill(152, 255, 152);
  circle(windowWidth/2 + move, windowHeight/2, Headsize); //head
  rectMode(CENTER)
  rect(windowWidth/2 + move, windowHeight/2 + Headsize/4, Headsize, Headsize/2 ) // body
  rect(windowWidth/2 + Headsize/2 - Headsize/20 + move, windowHeight/2 + Headsize/1.7, Headsize/10, Headsize/2) // right leg
  rect(windowWidth/2 - Headsize/2 + Headsize/20 + move, windowHeight/2 + Headsize/1.7, Headsize/10, Headsize/2) // left leg
  fill(0,0,0)
  circle(windowWidth/2 - Headsize/3 + move, windowHeight/2, Headsize/15) //left eye
  circle(windowWidth/2 + Headsize/3 + move, windowHeight/2, Headsize/15) //right eye
  rect(windowWidth/2 + move, windowHeight/2 + Headsize/10, Headsize/1.7, Headsize/40) // mouth

  
}