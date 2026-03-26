// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width / 2, height / 2);
}

function draw() {
  background(0);
  myPlanet.display()
}

function mousePressed(){
  if(keyIsDown(SHIFT)){
    myPlanet = new Planet(width/2, height/2);
  }
  else{
  myPlanet.createMoon();
  }
}

class Planet {
  //constrution
  constructor(x, y) {
    this.x = x; this.y = y; this.s = 200;
    this.moons = [];
  }

  //class methods
  createMoon() {
    this.moons.push(new Moon());
  }

  display() {
    circle(this.x, this.y, this.s)

    for (let m of this.moons){
      m.update(this.x, this.y)
    }
  }
}

class Moon{
  constructor(){
    this.speed = random(0.1,0.5);
    this.angle = 0;
    this.radius = random(150, 500);
    this.s = random(10, 50);
    this.c = [random(0, 255),random(0, 255),random(0, 255)]
  }

  move(){
    this.angle += this.speed;
  }

  display(x,y){
    push();
    fill(this.c[0],this.c[1],this.c[2])
    translate(x,y);
    rotate(this.angle);
    circle(this.radius, 0, this.s);
    pop();
  }

  update(x,y){
    this.move()
    this.display(x,y);
  }
}
