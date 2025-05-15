class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
