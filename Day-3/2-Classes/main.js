import { Square } from "./square.js";
import { Rectangle } from "./rectangle.js";
import { Circle } from "./circle.js";

const sq = new Square(4);
const rect = new Rectangle(3, 6);
const cir = new Circle(5);

console.log(sq);
console.log(rect);
console.log(cir);
cir.toString();
