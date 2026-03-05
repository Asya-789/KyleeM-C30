// Noise Terrain generator
// Kylee
// March 5 2026
//
// up and down arrows to change rectangle width

//terrain gen variables
let rectwidth = 2;
let noiseY;
let noiseTime = 1;
let noiseSpeed = 0.01;
let noisetSet = 1;

//flag variables
let highestPointY = 0;
let highestPointX = 0;

//average variables
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
  drawFlag();
  average();
}

function genTerrain() {
  //generates a noise graph to move to the left 
  noiseYArray = [];
  highestPointY = windowHeight;

  //draws a new set of terrain that spans the whole screen 
  //and shifts starting time over slightly to make it pan
  for (let i = 0; i <= windowWidth; i = i + rectwidth) {
    noiseY = map(noise(noiseTime), 0, 1, 0, windowHeight);
    noiseTime += noiseSpeed;
    rect(i, noiseY, rectwidth, windowHeight);

    //info saved for the flag function
    if (noiseY < highestPointY) {
      highestPointX = i;
      highestPointY = noiseY;
    }
    //info saved for average function
    noiseYArray.push(noiseY);
  }
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
  // changes rectangle width when up and down arrows are clicked
  if (keyCode == 38) {
    rectwidth++;
  }
  else if (keyCode == 40 && rectwidth != 1) {
    rectwidth--;
  }
}


function average() {
  //adds all levels of height then divide by length to average out height then
  //draw a red line showing the average
  for (let i = 0; i < noiseYArray.length; i++) {
    noiseYAverage += noiseYArray[i];
  }
  noiseYAverage = noiseYAverage / noiseYArray.length
  text(noiseYAverage, 20, 20)
  fill(255, 0, 0);
  rect(0, noiseYAverage, windowWidth, 5)
  fill(255)
}