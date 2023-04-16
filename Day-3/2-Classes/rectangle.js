import Shape from "./shape.js";

// where the output will appear
const container = document.querySelector(".container");

export class Rectangle extends Shape {
  constructor(w, h) {
    super(w);
    this.height = h;
  }

  area() {
    return this.side * this.height;
  }

  perimeter() {
    return (this.side + this.height) * 2;
  }

  toString() {
    container.innerHTML =
      "<b>Width:</b> " +
      this.side +
      "<br />" +
      "<b>Height:</b> " +
      this.height +
      "<br />" +
      "<b>Area:</b> " +
      this.area() +
      "<br />" +
      "<b>Perimeter:</b> " +
      this.perimeter() +
      "<br />";
  }
}
