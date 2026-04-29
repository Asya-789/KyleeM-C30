// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let textFile;
let imgFile, rows, cols, colorMap;

function preload(){
  textFile = loadStrings("assets/info.txt");
  imgFile = loadStrings("assets/colorImage.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = imgFile.length;
  cols = imgFile[0].length;

  colorMap = new Map([
    ["b", "black"],
    ["w", "white"],
    ["r", "red"],
    ["l", "brown"],
    ["p", "purple"]
  ])
}

function draw() {
  background(220);
  drawImage();
}

function processText(){
  print("SPLIT INTO WORDS");
  let splitwords = textFile[0].split(" ");
  print(splitwords);

  print("SPLIT INTO CHARACTERS");
  let splitChars = textFile[1].split("");
  print(splitChars);

  print("SPREAD INTO CHARACTERS")
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}

function drawImage(){
  let pixelSize = 50
  for (let y=0; y< rows;y++){
    let currentRow = imgFile[y];
    for (let x = 0; x< cols; x++){
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey))
      square(x*pixelSize,y*pixelSize, pixelSize)
    }
  }
}