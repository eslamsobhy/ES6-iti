import Shape from "./shape.js";

// where the output will appear
const container = document.querySelector(".container");

export class Circle extends Shape {
  constructor(r) {
    super(r);
  }

  area() {
    return (Math.PI * Math.pow(this.side, 2)).toFixed(2);
  }

  perimeter() {
    return (2 * Math.PI * this.side).toFixed(2);
  }

  toString() {
    container.innerHTML =
      "<b>Radius:</b> " +
      this.side +
      "<br />" +
      "<b>Area:</b> " +
      this.area() +
      "<br />" +
      "<b>Perimeter:</b> " +
      this.perimeter() +
      "<br />";
  }
}
