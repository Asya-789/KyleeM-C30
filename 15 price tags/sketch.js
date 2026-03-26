// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let items = [];
let currentProvince = "SK";


function setup() {
  createCanvas(windowWidth, windowHeight);
  item = {
    x: 0, y: 0,
    speed: 0,
    basePrice: 0,
    name: "item"
  }
  make_item();
}

function add_new_item(i){
  let t = item;
  t.x = random(0,width);
  t.y = random(0, height);
  t.speed = random(1,3);
  t.basePrice = random(10, 100);
  t.name = "item"+i;
  items.push(t);
}

function make_item(){
  for (let i = 0; i < 20; i++){
    add_new_item(i);
  }
}

function taxes(Province){
  if(Province = "SK"){
    return 1.11;
  }
  if(Province = "AB"){
    return 1.05;
  }
  if(Province = "ON"){
    return 1.13;
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 20; i++){
    priceTickers(items[i]);
  }
}

function priceTickers(item){
  rectMode(CENTER);
  fill(0);
  rect(item.x + 15, item.y - 5, 50, 25)
  fill(255)
  text(Math.round((item.basePrice * taxes(currentProvince)) * 100)/ 100, item.x, item.y)
}
