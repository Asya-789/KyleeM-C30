// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function movingBall(){
  // using draw() loop, we can animate.
  cX += 5;
  if(cX > width) cX = 0; //wrap around
  circle(cX, 50, 25);
}

function circleLine(y, size){
  // use this function to draw a line of circles
  // y → number   height at which to draw the line
  // size → number   diameter of the circles
  let xEnd = width;   //90% position from left

  for(let x = 0; x < xEnd; x += size + 17){

    circle(x,y,size);
  }
}

function gradientBackground(){
  //create a gradient to use as a background
  let h = 2; //height of each rectangle

  //use a loop (doesn't have to be WHILE)
  //to draw vertical stack of rectangles
  
  let y = 0;
  noStroke();
  while (y < height){
    let value = map(y,0,height,0,255);
    fill(value,255-value,128 - value/2);
    rect(0, y, width, h);
    y += h;
  }

}

function circleLineVert(x, size){
  // use this function to draw a line of circles
  // y → number   height at which to draw the line
  // size → number   diameter of the circles
  let yEnd = height;   //90% position from left

  for(let y = 0; y < yEnd; y += size + 18){

    circle(x,y,size);
  }
}

function challenge(){
  for(let x1 = 0; x1 < width/20; x1 += 37){
    triangle(x1, 0, x1 + 37, 0, mouseX, mouseY)
  }
}

function draw() {
  background(220);
  challenge();
  circleLine(0, 20)
  circleLine(height, 20)
  circleLineVert(0, 20)
  circleLineVert(width, 20)
  //gradientBackground();
  //movingBall();
  //circleLine(height*0.35, 30);
  //circleLine(height/2, 50);
  //circleLine(height*0.65, 80);
}
