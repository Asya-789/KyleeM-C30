// Nested Loops
// Kylee
// March 6

let bubbleSize = 20;
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
}

function draw() {
  background(50);
  drawBubble();
}



function drawBubble(){
  //through through our array and display
  //a bubble at each pos. 
  //possible delete, if mouse is close
  //loop by index bc we want to be able to delete
  for(let i = 0; i< bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x,b.y,bubbleSize);
    textAlign(CENTER,CENTER);
    let d = eDist(b.x,b.y,mouseX,mouseY);
   // text(d, b.x, b.y)
    //where in the array is b????
    //check if we are overtop of the current 
    //bubble, and then delete if so:
    if(d < bubbleSize/2){
      //to delete from array, use .splice()
      bubbles.splice(i, 1);
    } 
  }
}

function eDist(x1,y1,x2,y2){
  //calculate the straight-line distance
  let a = x1-x2;   let b = y1-y2;
  let c = sqrt(pow(a,2) + pow(b,2));
  return round(c);
  //return c.toFixed(1); //keep 1 dec. place
}
function populateArray(){
  //simple nested loop test to make
  //ordered pairs:
      
  for(let x = 0; x <= width; x+=bubbleSize){
    //x: 0, 30, 60, ... right edge
    for(let y = 0; y <= height; y+=bubbleSize){
    //  y:0, 30, 60, ... bottom edge
      let b = {x: x,   y: y};
      bubbles.push(b);
    }
  }
}