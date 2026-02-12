// Interactive tetris
// Kylee M
// Feb 11
//
// Try to make a tetris like scene
// blocks is the character
// use 1,2,3,4 to change bg color scheme
// 

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
  yPos = yPos + 50
  drawBlock(blockDrawn, xPos, yPos)

  //signature
  noStroke();
  fill(255, 255, 255)
  textSize(20)
  text("Kylee M", 25, 875)

}

function drawGameUI(){
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
   
  stroke(strokeColor[0], strokeColor[1], strokeColor[2]);
  strokeWeight(5);
  fill(bgColor[0], bgColor[1], bgColor[2])
  rectMode(CENTER);
  rect(width/2, height/2, 300, 800);
  rect(width/2 + width/3, height/9, 100, 100);
}

function drawBlock(blockType, xPos, yPos){

  if (blockType === "T"){
    fill(167, 66, 245);
    stroke(192, 110, 255);
    rectMode(CENTER);
    rect(xPos,yPos, 75, 25);
    rect(xPos,yPos + 12.5, 25, 50);
  }

  if(blockType === "line"){
    fill(99, 224, 255);
    stroke(59, 187, 219);
    rectMode(CENTER)
    rect(xPos, yPos, 150, 25)
  }

}

function keyPressed(){
  if (keyCode === 32){
    if (colorScheme >= 4) {
        colorScheme = 0
    }
    else{
        colorScheme++
    }
  }
  if(keyCode === 68){
    xPos = xPos + 25
  }
  if(keyCode === 65){
    xPos = xPos - 25
  }

}