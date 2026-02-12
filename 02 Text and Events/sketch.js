// Project Title
// Your Name
// Feb 09
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Var
let textShade = 225;
let textScale = 15;
let bgColor= "grey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);
  // displayMouse();
  displayKeyboard();
}

function displayMouse(){
  textSize(textScale);
  fill(textShade);
  text(mouseX + ", " + mouseY, mouseX -25, mouseY + 35);
  text(mouseIsPressed + ", " + mouseButton, mouseX -15, mouseY - 10);
}

function mousePressed(){
  //this already exists in p5
  //so we dont need to call it
  textScale = int(random(5,100));
  textShade = int(random(0,255));
}

function displayKeyboard(){
  textSize(50);
  textAlign(CENTER, CENTER)
  let t = key + ", " + keyIsPressed + ", " + keyCode;
  text(t, windowWidth/2, windowHeight/2);
}

function keyPressed(){
  //same as mouse pressed
  bgColor = color(random(255), random(255), random(255)) 
}