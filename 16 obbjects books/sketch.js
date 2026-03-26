// Project Title
// Date

let myBook;
let myBook2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150)
  myBook = new Book("Harry Potter", 12311231123112, "JK Rowling", "hardcover", "750", 10);
  myBook2 = new Book("Lord of The rings", 6789123456798, "I dont remember", "leather", "850", 85);
  myBook.display();
  myBook2.display();
}

function draw() {
}

class Book{
  constructor(title, isbn, author, cover, pages, x, pickedUp){
    this.title = title;
    this.isbn = isbn;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    this.x = x;
    this.pickedUp = false;
  }

  display(){
    textAlign(CENTER, CENTER);
    textSize(20)
    switch(this.cover){
      case"softcover": 
        fill(250, 200, 155); break;
      case"hardcover": 
        fill(200, 155, 200); break;
      case"leather": 
        fill(200, 155, 155); break;
    }

    rect(this.x, 400, this.pages/10, random(-150, -200));
    fill(255);
    text(this.title[0],this.x + this.pages/20, 300);
  }

  pickUp(){

  }
}
