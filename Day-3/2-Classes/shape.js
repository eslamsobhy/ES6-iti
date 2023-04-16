export default class Shape {
  constructor(s) {
    this.side = s;
  }

  area() {
    return Math.pow(this.side, 2);
  }

  perimeter() {
    return this.side * 4;
  }
}
