// Cars
// Kylee
// Date

let cars = [];
let testCar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  testCar = new vehicle(0, 350, 1);
}

//done
function drawRoad() {
  background(120);
  fill(25)
  rect(width / 2, height / 2, width, 400)
  //lines
  fill(255, 255, 0)
  for (let i = 0; i < width; i += 40) {
    rect(i, height / 2, 20, 5)
  }
}

function draw() {
  drawRoad();
  testCar.action();
}

class vehicle {
  constructor(x, y, type) {
    this.x = x; this.y = y;
    this.type = type;
    this.speed = 1;
    this.c = [random(0, 255), random(0, 255), random(0, 255)]
    if(this.y > height/2){
      this.direction = 0; // move to right, under line
    }
    else{
      this.direction = 1;// move to left above line
    }
  }

  display() {
    //car
    if (this.type === 0) {
      fill(255)
      rect(this.x - 20, this.y,15,45)
      rect(this.x + 20, this.y,15,45)
      fill(this.c[0], this.c[1], this.c[2])
      rect(this.x, this.y, 75, 35)
    }
    //truck
    
    if(this.type === 1){
      if(this.direction === 0){
        fill(this.c[0], this.c[1], this.c[2])
        rect(this.x,this.y, 75, 40)
        rect(this.x + 35,this.y, 30, 45)
      }
      else if(this.direction === 1){
        fill(this.c[0], this.c[1], this.c[2])
        rect(this.x,this.y, 75, 40)
        rect(this.x - 35,this.y, 30, 45)
      }
    }
  }

  move() {
    if(this.direction === 0){
      this.x += this.speed
      if(this.x > width){
        this.x = 0;
      }
    }
    else{
      this.x -= this.speed
      if(this.x < 0){
        this.x = width;
      }
    }
  }

  changeColor() {

  }

  speedUp() {
    this.speed += 0.5;
  }
  speedDown() {
    this.speed -= 0.5;
  }

  action() {
    this.display();
    this.move();
  }
}