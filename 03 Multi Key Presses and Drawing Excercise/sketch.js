// Project Title
// Your Name
// Feb 10
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  checkMulti()
}

function checkMulti(){
  let a = keyIsDown(65);
  let b = keyIsDown(66);
  let c = keyIsDown(67);
  let str = "a: " + a + " b: " + b + " c: " + c
  textSize(30);
  text(str,300,100);
}