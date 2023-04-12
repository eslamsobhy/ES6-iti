// receiving spreaded elements and gethering them in an array called arr: arr[1,2,3,4,5,6]
const maxMin = (...arr) => {
  let min = Math.min(...arr); // spreading
  let max = Math.max(...arr); // spreading
  return [min, max];
};

let elements = [1, 2, 3, 4, 5, 6];

// passing spreaded elements: 1, 2, 3, 4, 5, 6
console.log(maxMin(...elements));
