// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//grid 6 x 5 

let grid = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;

function setup() {
  createCanvas(cols* tileSize, rows * tileSize);
  textAlign(CENTER);
  randomStart();
}

function randomStart(){
  //generates random set of numbers and anything above .5 is white square
  //else its black square
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      if(random(0,1)>0.5){
        grid[y][x] = 230
      }
      else{
        grid[y][x] = 50
      }
    }
  }
}

function draw() {
  background(220);
  renderGrid();
  fill(255)
  textSize(30);
  mouseOverlay(); 
  winCheck();
}

function renderGrid(){
  //interpret data from grid array and draw matrix into canvas
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor)
      square(x*tileSize, y *tileSize, tileSize)
    }
  }
}

function mousePressed(){
  if(mouseX < width && mouseY < height){
    let x = getCurrentX(); let y = getCurrentY();

    flip(x,y); // flip single if none of other modes available
    if(keyIsDown(32)){
    //flip square pattern if space is pressed down
      if(x+1 <=6){flip(x+1, y);}
      if(x+1 <=6 && y+1 <= 5){flip(x+1, y+1);}
      if(y+1 <= 5){flip(x,y+1);}
    }
    else if(!keyIsDown(SHIFT)){
    //flip cross pattern if shift and space is pressed down
      if(x-1 >= 0){flip(x-1, y);}
      if(x+1 <=6){flip(x+1, y);}
      if(y-1 >= 0){flip(x,y-1);}
      if(y+1 <= 5){flip(x,y+1);}
    }
  }
}

function getCurrentX(){
  //gets col position of mouse
  let constrainedX = constrain(mouseX, 0, width -1)
  return floor(constrainedX/ tileSize)
}
function getCurrentY(){
  //gets col position of mouse
  let constrainedY = constrain(mouseY, 0, height -1)
  return floor(constrainedY/ tileSize)
}

function flip(x,y){
  if(grid[y][x] === 50) {
    grid[y][x] = 230;
  }
  else {
    grid[y][x] = 50;
  }
}

function winCheck(){
  let isWinning = true;
  let previousTile = grid[0][0]
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      if(grid[y][x] === previousTile && isWinning === true){
        //checks if the grid's previous tile and current tile is the same, 
        // and if the chain of same colors has not broken yet
        previousTile = grid[y][x]
        isWinning = true;
      }
      else{isWinning = false;}
    }
  }
  if(isWinning === true){
    //when done checking all its says you won
    fill(0)
    text("you won",width/2,height/2,40);
  }
}

function mouseOverlay(){
  if(mouseX < width && mouseY < height){
    let x = getCurrentX(); let y = getCurrentY();
    fill(0,255,0,50)
    square(x*tileSize, y *tileSize, tileSize)
    if(keyIsDown(32)){
    //overlay if space is pressed
      if(x+1 <=6){square((x+1)*tileSize, y *tileSize, tileSize);}
      if(x+1 <=6 && y+1 <= 5){square((x+1)*tileSize, (y+1     ) *tileSize, tileSize);}
      if(y+1 <= 5){square(x*tileSize, (y+1) *tileSize, tileSize);}
    }  
  else if(!keyIsDown(SHIFT)){
    // overlay if shift is not pressed
      if(x-1 >= 0){square((x-1)*tileSize, y *tileSize, tileSize)}
      if(x+1 <=6){square((x+1)*tileSize, y *tileSize, tileSize)}
      if(y-1 >= 0){square(x*tileSize, (y-1) *tileSize, tileSize)}
      if(y+1 <= 5){square(x*tileSize, (y+1) *tileSize, tileSize)}
    }
  }
}