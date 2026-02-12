// Interactive tetris
// Kylee M
// Feb 11
//
// Try to make a tetris like scene
// blocks is the character
// use space to change bg color scheme
// use 1-7 to switch block type

let blockDrawn = "T";
let colorScheme = 0;
let yPos = 100;
let xPos = 300;

function setup() {
  createCanvas(600, 900);
}

function draw() {
  //background
  drawGameUI();

  //Character
  //constantly moves player down and reset when at bottom
  if (yPos >= 800){
    yPos = 100
  }
  else{
    yPos++
  }
  drawBlock(blockDrawn, xPos, yPos)

  //signature
  noStroke();
  fill(255, 255, 255)
  textSize(20)
  text("Kylee M", 25, 875)
}

function drawGameUI(){
  // sets background to black and white by default
  // and when space is pressed it changes color scheme
  let bgColor = [46, 46, 46];
  let strokeColor = [255, 255, 255];

  if(colorScheme === 1){
    bgColor = [28, 74, 22];
    strokeColor = [185, 232, 179];
    background(28, 74, 22);
  }
  else if(colorScheme === 2){
    bgColor = [145, 44, 67];
    strokeColor = [230, 16, 65] ;
    background(145, 44, 67);
  }
  else if(colorScheme === 3){
    bgColor = [153, 61, 136];
    strokeColor = [219, 29, 184];
    background(153, 61, 136);
  }
  else if(colorScheme === 4){
    bgColor = [194, 121, 70];
    strokeColor = [245, 122, 34];
    background(194, 121, 70);
  }
  else {
    bgColor = [46, 46, 46];
    strokeColor = [255, 255, 255];
    background(46, 46, 46);
  }
   
  //adjusts the colors of bg according to chosen color scheme, and draws boxes
  stroke(strokeColor[0], strokeColor[1], strokeColor[2]);
  strokeWeight(5);
  fill(bgColor[0], bgColor[1], bgColor[2])
  rectMode(CENTER);
  rect(width/2, height/2, 300, 800);
  rect(width/2 + width/3, height/9, 100, 100);
}

function drawBlock(blockType, xPos, yPos){
  //detects what type of block to draw and where to draw at
  
  if (blockType === "T"){
    fill(167, 66, 245);
    stroke(192, 110, 255);
    rectMode(CENTER);
    rect(xPos,yPos, 75, 25);
    rect(xPos,yPos + 12.5, 25, 50);
  }
  else if(blockType === "Line"){
    fill(99, 224, 255);
    stroke(59, 187, 219);
    rectMode(CENTER)
    rect(xPos, yPos, 150, 25);
  }
  else if(blockType === "Square"){
    fill (250, 224, 25);
    stroke (235, 216, 75);
    rectMode (CENTER);
    rect(xPos,yPos, 50, 50);
  }
  else if(blockType === "J"){
    fill (255, 0, 255);
    stroke (181, 36, 181);
    rectMode (CENTER);
    rect(xPos, yPos, 25, 75);
    rect(xPos - 12.5, yPos + 32.5, 50,25);
  }
  else if(blockType === "L"){
    fill (247, 140, 10);
    stroke (207, 132, 41);
    rectMode (CENTER);
    rect(xPos, yPos, 25, 75);
    rect(xPos + 12.5, yPos + 32.5, 50,25);
  }
  else if(blockType === "S"){
    fill (255, 0, 0);
    stroke (184, 40, 40);
    rectMode (CENTER);
    rect(xPos + 12.5, yPos, 50, 25);
    rect(xPos - 12.5, yPos + 25, 50, 25);
  }
  else if(blockType === "Z"){
    fill (58, 222, 47);
    stroke (62, 166, 55);
    rectMode (CENTER);
    rect(xPos - 12.5, yPos, 50, 25);
    rect(xPos + 12.5, yPos + 25, 50, 25);
  }
}

function keyPressed(){
  //checks for space to change bg color scheme
  // a and d to move block left and right
  if (keyCode === 32){
    if (colorScheme >= 4) {
        colorScheme = 0
    }
    else{
        colorScheme++
    }
  }
  // a and d for movement
  if(keyCode === 68 && xPos <= 375){
    xPos = xPos + 25
  }
  else if(keyCode === 65 && xPos >= 225){
    xPos = xPos - 25
  }

  //1 - 7 for blocks
  if(keyCode === 49){
    blockDrawn = "T"
  }
  else if(keyCode === 50){
    blockDrawn = "Square"
  }
  else if(keyCode === 51){
    blockDrawn = "Z"
  }
  else if(keyCode === 52){
    blockDrawn = "S"
  }
  else if(keyCode === 53){
    blockDrawn = "L"
  }
  else if(keyCode === 54){
    blockDrawn = "J"
  }
  else if(keyCode === 55){
    blockDrawn = "Line"
  }
}