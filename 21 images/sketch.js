// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let direction = 1; //1 is left and 0 is right

let pinImage = [];
let current = 0; //pinwheel state counter

async function loadAssets() {
  lionL = loadImage("assets/lion-left.png")
  lionR = loadImage("assets/lion-right.png")

  for (let i = 0; i <= 8; i++) {
    pinImage.push(loadImage("assets/pin-0" + i + ".png"))
  }
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER)
}

function draw() {
  background(220);
  pinWheel();
  lion();
}

function lion() {
  if (movedX > 0) {
    direction = 0;
  }
  else if (movedX < 0) {
    direction = 1;
  }

  if (direction === 0) {
    image(lionR, mouseX, mouseY)
  }
  else if (direction === 1) {
    image(lionL, mouseX, mouseY)
  }
}

function pinWheel() {
  image(pinImage[current], width / 2, height * 0.7)
  if (current === 8){
    current = 0;
  }
  else{
    current += 1
  }
}
