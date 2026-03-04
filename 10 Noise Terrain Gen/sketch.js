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
let noisetSet = 1;
let highestPointY = 0;
let highestPointX = 0;

let noiseYArray = [];
let noiseYAverage = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(5)
  noStroke()
}

function draw() {
  background(0);
  genTerrain();
}

function genTerrain() {
  //make a terrain that travels from side to side of screen and creates a panning like effect
  highestPointY = windowHeight;
  //basic one 
  for (let i = 0; i <= windowWidth; i = i + rectwidth) {
    noiseY = map(noise(noiseTime), 0, 1, 0, windowHeight);
    noiseTime += noiseSpeed;
    rect(i, noiseY, rectwidth, windowHeight);

    if (noiseY < highestPointY) {
      highestPointX = i;
      highestPointY = noiseY;
    }
    noiseYArray.push(noiseY);
  }
  drawFlag();
  average();
  noiseYArray = [];
  //for panning comment out to turn it off
  noisetSet += 0.1;
  noiseTime = noisetSet;
}

function drawFlag() {
  //draw flag at highest peak
  fill(150);
  rect(highestPointX, highestPointY, 3, -50);
  fill(0, 255, 0);
  rect(highestPointX + 3, highestPointY - 50, 30, 20);
  fill(255);
}

function keyPressed() {
  if (keyCode == 38) {
    rectwidth++;
  }
  else if (keyCode == 40 && rectwidth != 1) {
    rectwidth--;
  }
}

function average() {
  for(let i = 0; i <= noiseYArray.length; i++){
    noiseYAverage = noiseYAverage + noiseYArray[i];
  }
  noiseYAverage = noiseYAverage / noiseYArray.length
  text(noiseYArray.length, 20, 20)
  fill(255, 0, 0);
  rect(0, noiseYAverage, windowWidth, 5)
  fill(255)
}