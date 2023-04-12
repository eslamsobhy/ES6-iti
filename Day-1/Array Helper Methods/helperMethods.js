let fruits = ["Apple", "Strawberry", "Banana", "Orange", "Mango"];

// a)
let isString = fruits.every((ele) => typeof ele === "string");
// console.log(isString);

// b)
let startsWithA = fruits.some((ele) => ele.toLowerCase().startsWith("a"));
// console.log(startsWithA);

// c)
let startsWithBorS = fruits.filter((ele) => {
  //   let lower = ele.toLowerCase();
  //   let startsWithB = lower.startsWith("b");
  //   let startsWithS = lower.startsWith("s");
  //   return startsWithB || startsWithS;
  return ele.toLowerCase().startsWith("b") || ele.toLowerCase().startsWith("s");
});
// console.log(startsWithBorS);

// d)
let newArr = fruits.map((ele) => `I Like ${ele}`);
// console.log(newArr);

// e)
newArr.forEach((ele) => console.log(ele));
