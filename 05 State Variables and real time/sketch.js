// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapeState = 0; // 0 = circle 1 = square 
                    // 2 = triangle 3 = starburst
let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function draw() {
  background(220);
  drawShape();
  manageTime();
}

function drawShape(){
  //draws a shape based on the shapeState variable
  let x = width/2;
  let y = height/2;
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 100);
      break;
    case 1:
      square(width/2, height/2, 100);
      break;
    case 2:
      triangle(x - 50, y + 50, x + 50, y+ 50, x, y - 50);
      break;
    case 3:
      for(let i = 0; i < 30; i++){
        let x2 = random(x-width/2, x+ width/2);
        let y2 = random(y-height/2, y+height/2);
        line(x,y,x2,y2);
      }
      break;
  }
}

function manageTime(){
  let elapsedTime = millis() - startTime;
  if (elapsedTime > 1000){
    if ( shapeState === 3){
       shapeState = 0;
    }
    else{
      shapeState++;
    }
    startTime = millis();
  }
}