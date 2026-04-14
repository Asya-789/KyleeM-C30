// Cars cars cars
// Kylee
// April 14
// shift left + click to spawn cas in top lane, left click to spawn cars in bottom lane
// space to switch light to red

//instead of having 2 different arrays for cars i have detection built into class to sort into top and bottom lane

let cars = [];
let light = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for(let i = 0; i< 20; i++){
    //spawn 20 cars initially
    cars.push(new vehicle(random(0, width), random(height/2 - 185, height/2 + 185), random(0,1)));
  }
}

//done
function drawRoad() {
  background(120);
  fill(25)
  rect(width / 2, height / 2, width, 400) 

  fill(255, 255, 0)
  for (let i = 0; i < width; i += 40) {
    rect(i, height / 2, 20, 5)// yellow lines
  }
}

function draw() {
  drawRoad();
  for(let object of cars){
    object.action();
  }
}

function mousePressed(){
  //spawn more cars when clicked
  if(keyIsDown(16)){
    cars.push(new vehicle(random(0, width), random(height/2 - 185, height/2), random(0,1)));
  }
  else {
    cars.push(new vehicle(random(0, width), random(height/2, height/2 + 185), random(0,1)));
  }
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
    if (this.type <= 0.5) {
      fill(255)
      rect(this.x - 20, this.y,15,45)
      rect(this.x + 20, this.y,15,45)
      fill(this.c[0], this.c[1], this.c[2])
      rect(this.x, this.y, 75, 35)
    }
    //truck
    
    if(this.type > 0.5){
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
      this.x += this.speed //moves vehicle forward dependent on speed set
      if(this.x > width){
        this.x = 0; // resets position back when end reached
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
    this.c = [random(0, 255), random(0, 255), random(0, 255)]
  }

  speedUp() {
    this.speed += 0.5;
  }
  speedDown() {
    this.speed -= 0.5;
  }

  lightOn(){
    //when space is held stops movement
    if(keyIsDown(32)){
      light = true;
      fill(255, 0, 0)
    }
    else {
      light = false;
      fill(0, 255, 0)
    }
    circle(width/2, 100,100)
  }

  action() {
    let chance = random(0,100);
    this.lightOn();
    this.display();
    if(light === false){
      this.move();
    }
    //chance to for each car to speed up and slow down
    if(chance >= 99 && this.speed >= 0.6){ 
      this.speedDown();// cant slow down into negatives
    }
    else if(chance <= 1){
      this.speedUp();
    }
    else if(chance >= 49 && chance <= 50 && light === false){
      this.changeColor();
    }
  }
}