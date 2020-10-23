console.log("LISKOV SUBSTITUTION PRINCIPLE");

/*
If a function takes a base time, it should equally be able to take a derived time
*/

class Rectangle {
  constructor(width, height) {
    (this.width = width), (this.height = height);
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `${this.width} x ${this.height}`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let rc = new Rectangle(2, 3);
console.log(rc.toString());
let sq = new Square(5);
console.log(sq.toString());
sq.width = 10;
console.log(sq.toString());
