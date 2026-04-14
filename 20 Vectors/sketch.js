// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    for(let i = 0; i < 10 ; i++){
    objects.push(new Ball(mouseX, mouseY))
    }
  }
  for(let o of objects){
    if(keyIsDown(32)){
      
    }
    else{
      frameRate(60)                                                                                                             
    }
    o.move();                                                                            
    o.display();
   // o.calcMouse();
  }
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(5,-5), random(-5, 5));
    this.force = createVector(0, 0.05);

  }

  move(){
    this.vel.add(this.force);
    this.vel.limit(20)
    this.pos.add(this.vel)

    /*
    if(this.pos.x < 0|| this.pos.x > width){
      this.vel.x *= -0.8;
    }
    if(this.pos.y < 0|| this.pos.y > height){
      this.vel.y *= -0.8;
    }
      */
  }

  calcMouse(){
    this.force = createVector(mouseX, mouseY);
    this.force.sub(this.pos);
    this.force.normalize();
    this.force.mult(4);

  }

  display(){
    fill(random(0,255), random(0,255), random(0,255))
    circle(this.pos.x,this.pos.y, random(10, 50))

    /*
    stroke(255, 0,0)
    line(width/2,0,this.pos.x,this.pos.y)

    let endx = this.pos.x +this.vel.x
    let endy = this.pos.y + this.vel.y

    stroke(0, 0,255)
    line(this.pos.x,this.pos.y, endx, endy)
    */
  }
}