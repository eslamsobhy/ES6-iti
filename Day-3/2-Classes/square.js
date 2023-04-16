import Shape from "./shape.js";

// where the output will appear
const container = document.querySelector(".container");

export class Square extends Shape {
  constructor(s) {
    super(s);
  }

  toString() {
    container.innerHTML =
      "<b>Side:</b> " +
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
