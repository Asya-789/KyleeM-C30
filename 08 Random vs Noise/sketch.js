// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let d1, d2;
let minSize = 100; let maxSize = 500;
let x1, x2, y1, y2;

//variable for noise

let noiseTime = 5;
let noiseSpeed = 0.01;
let colorNoise, colorNoise2, colorNoise3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width / 2
  x2 = width / 2
  y1 = height / 3
  y2 = 2 * height / 3
  //frameRate(5);
}

function draw() {
  background(0);
  //randomSeed(100);
  //    ^ has same starting point so random is consistently starting the same sequence
  //stars();
  //randomCircle();
  noiseCircle();
}

function stars() {
  //use random to generate 100 stars
  noStroke();
  for (let i = 0; i <= 10000; i++) {
    fill(random(155, 255));
    let x = random(0, width);
    let y = random(0, height);
    circle(x, y, 5);
  }
}

function randomCircle() {
  //random and erratic circle using random
  noStroke();
  d1 = random(minSize, maxSize)
  fill(120, 120, 255)
  circle(x1, y1, d1)
}

function noiseCircle() {
  //random and smooth circle using noise
  d2 = map(noise(noiseTime), 0, 1, minSize, maxSize);

  x2 = map(noise(noiseTime + 5), 0, 1, 0, width)
  y2 = map(noise(noiseTime - 5), 0, 1, 0, height)

  colorNoise = map(noise(noiseTime + 10), 0, 1, 0, 255)
  colorNoise2 = map(noise(noiseTime + 20), 0, 1, 0, 255)
  colorNoise3 = map(noise(noiseTime + 30), 0, 1, 0, 255)

  fill(colorNoise, colorNoise2, colorNoise3)

  noiseTime = noiseTime + noiseSpeed

  circle(x2, y2, d2)
}