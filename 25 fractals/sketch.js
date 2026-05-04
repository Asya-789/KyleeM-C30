// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
}

function draw() {
  background(220);
  //centerCircle(width/2, height/2, 100);
  //fractalCircle(width/2, height/2, 500);
  luckySquare(width/2, height/2, width/2)
}

function centerCircle(x,y,d){
  if(d > 5){
    circle(x,y,d)
    centerCircle(x,y,d* 0.9)
  }
}
function fractalCircle(x,y,d){
  if(d > 1){
    circle(x,y,d)
    fractalCircle(x - d/2, y, d* 0.5)
    fractalCircle(x + d/2, y, d* 0.5)
    //fractalCircle(x, y - d/2, d* 0.5)
    fractalCircle(x, y + d/2,  d* 0.5)
  }
}
function luckySquare(x,y,s){
  if(s > 5){
    square(x,y,s)
    luckySquare(x-s/2, y-s/2, s*0.45);
    luckySquare(x+s/2, y-s/2, s*0.45);
    luckySquare(x-s/2, y+s/2, s*0.45);
    luckySquare(x+s/2, y+s/2, s*0.45);
  }
}