class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calArea() {
      return this.width * this.height;
    }
  
    calPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
const rectangle = new Rectangle(15, 10);
const area = rectangle.calArea();
const perimeter = rectangle.calPerimeter();

console.log(`Rectangle Area: ${area}`);
console.log(`Rectangle Perimeter: ${perimeter}`);
  