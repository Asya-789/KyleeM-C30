// image manipulation
// Kylee Manucot  
// April 27

let img;
let myVideo

function preload() {
  img = loadImage("assets/chip.jpg")
}

function setup() {
  //createCanvas(img.width, img.height);
  createCanvas(640, 480);
  pixelDensity(1);

  //myVideo = createCapture(VIDEO);
  //myVideo.hide();
}

function draw() {

  //image(img, 0, 0);
  image(img, 0, 0);
  loadPixels();
  //boost()
  //greyscale();
  //background(0);
  //textImage();

  //majority();
  removeGreen();
  colorPalette();
  mirror();
  updatePixels();
}


//helper functions
function setPixelOneD(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixel(x, y, r, g, b) {
  let index = (y * width + x) * 4;
  setPixelOneD(index, r, g, b)
}

function averageValues(x, y) {
  let index = (y * width + x) * 4;
  let r = pixels[index];
  let g = pixels[index + 1];
  let b = pixels[index + 2];
  return (r + g + b) / 3;
}

//excercise 1
function majority() {
  for (let i = 0; i < pixels.length; i += 4) {
    let r, g, b;
    if (pixels[i] >= pixels[i + 1] && pixels[i] >= pixels[i + 2]) {
      r = 255;
      g = 0;
      b = 0;
    }
    else if (pixels[i + 1] >= pixels[i] && pixels[i + 1] >= pixels[i + 2]) {
      r = 0;
      g = 255;
      b = 0;
    }
    else if (pixels[i + 2] >= pixels[i] && pixels[i + 2] >= pixels[i + 1]) {
      r = 0;
      g = 0;
      b = 255;
    }
    setPixelOneD(i, r, g, b);
  }
}

//excercise 2
function removeGreen() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (x >= img.width / 2) {
        let index = (y * width + x) * 4;
        let r = pixels[index];
        let g = 0;
        let b = pixels[index + 2];
        setPixel(x, y, r, g, b);
      }

    }
  }
}

//excercise 3
function colorPalette() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let avg = averageValues(x, y)
      if (avg > 205) {
        setPixel(x, y, 170, 230, 220);
      }
      else if (avg > 155) {
        setPixel(x, y, 105, 150, 210);
      }
      else if (avg > 105) {
        setPixel(x, y, 120, 180, 60);
      }
      else if (avg > 55) {
        setPixel(x, y, 130, 30, 130);
      }
      else {
        setPixel(x, y, 90, 10, 50);
      }
    }
  }
}

//excercise 4
function mirror(){
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (y * width + -x) * 4;
      let r = pixels[index ];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      setPixel(x, y, r, g, b);

    }
  }
}

//demo stuff
function boost() {
  let boostAmount = map(mouseX, 0, width, -255, 255);
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i] + boostAmount;
    let g = pixels[i + 1] + boostAmount;
    let b = pixels[i + 2] + boostAmount;
    setPixelOneD(i, r, g, b);
  }
}

function greyscale() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let avg = averageValues(x, y);
      setPixel(x, y, avg, avg, avg)
    }
  }
}



function textImage() {
  fill(255);
  let scaleAmount = 10;
  textSize(scaleAmount);

  for (let x = 0; x < width; x += scaleAmount) {
    for (let y = 0; y < height; y += scaleAmount) {
      let avg = averageValues(x, y)
      if (avg > 240) {
        text("@", x, y);
      }
      else if (avg > 230) {
        text("#", x, y);
      }
      else if (avg > 180) {
        text("&", x, y);
      }
      else if (avg > 160) {
        text("%", x, y);
      }
      else if (avg > 100) {
        text("=", x, y);
      }
      else if (avg > 80) {
        text(";", x, y);
      }
      else if (avg > 60) {
        text('"', x, y);
      }
      else if (avg > 30) {
        text(".", x, y);
      }
    }
  }
}