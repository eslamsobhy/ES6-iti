const obj = {
  name: "Eslam",
  age: 24,
  address: "10th Of Ramadan City",
};

const handler = {
  get: function (obj, prop) {
    if (!(prop in obj)) {
      throw `ERROR: the ${prop} property is not defined!`;
    }
    return obj[prop];
  },

  set: function (obj, prop, val) {
    if (!(prop in obj)) {
      throw `ERROR: You are trying to set a non-existing property - ${prop}`;
    }
    if (prop === "name" && val.length > 7) {
      throw "ERROR: The name can't have more than 7 characters!";
    }
    if (prop === "address" && isFinite(val)) {
      throw "ERROR: The address can't be a number";
    }
    if (prop === "age" && (isNaN(prop) || obj[prop] > 60 || obj[prop] < 25)) {
      throw "ERROR: The age must be a number between 25 and 60";
    }
    obj[prop] = val;
  },
};

const p = new Proxy(obj, handler);
// console.log(p.hamada);
// console.log(p.name);
// console.log(p.address);
// p.age = "30";
// console.log(p.age);

// p.name = "ahmed";
// p.address = "5th of abour";
// console.log(p.name);
// console.log(p.address);
p.salary = 9000;
console.log(p);
