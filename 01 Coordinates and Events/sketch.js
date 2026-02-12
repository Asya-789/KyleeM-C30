// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let circleX = width/2;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //
  //drawTwoCircle()
  //circle(circleX,height/2, 80) //read 26
  fiveCircles()
  movingCircle(-1)

}
console.log("much Wow")

function drawTwoCircle(){
  circle(circleX,height/3, 120)// read 29-30
  fill(180, 75, 20) //applies to all drawings even out of function
  stroke("#FFFFFF")
  circle(circleX,2*height/3, 120)
  //when things are drawn on top of each other 
  //the later ones in code are drawn on last and are on top
}

function fiveCircles(){
  stroke("#000000")
  circle(0,0, 100)
  circle(width,0, 100)
  circle(0,height, 100)
  circle(width,height, 100)
  circle(width/2, height/2, 100)
}
function movingCircle(speed){
  circle(circleX, height/3, 200)
  if (circleX > width && speed >= 0){
    circleX = 0
  }
  else if (circle < 0 && speed < 0){
    circleX = width
  }
  circleX= circleX + speed
}