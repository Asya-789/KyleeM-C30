// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectwidth = 10;

let noiseY;
let noiseTime = 1;
let noiseSpeed = 0.01;

let genheightArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5)
  noStroke()
}

function draw() {
  background(0);
  genTerrain();
  drawFlag()
}

function genTerrain() {
  //make a terrain that travels from side to side of screen and creates a panning like effect

  //basic one 
  for (let i = 0; i <= windowWidth; i = i + rectwidth) {
    noiseY = map(noise(noiseTime), 0, 1, 0, windowHeight);
    genheightArray.push(noiseY);
    genheightArray.push(i);
    noiseTime -= noiseSpeed;
    rect(i, noiseY, rectwidth, windowHeight);
  
  }

}

function drawFlag() {
  //draw flag at highest peak
  fill(50);
  rect(genheightArray[highest + 1], genheightArray[highest]+ 10, 3, 10)
  fill(0, 255, 0)
}

function keyPressed() {
  if (keyCode == 38) {
    rectwidth++
  }
  else if (keyCode == 40 && rectwidth != 1) {
    rectwidth--
  }
}