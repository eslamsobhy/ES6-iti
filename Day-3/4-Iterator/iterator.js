// const obj = {
//   name: "Eslam",
//   age: 24,
//   address: "10th Of Ramdan City",
//   [Symbol.iterator]: function* () {
//     // yield this.name;
//     // yield this.age;
//     // yield this.address;
//     for (let prop in this) {
//       yield this[prop];
//     }
//   },
// };

// for (prop of obj) {
//   console.log(prop);
// }

const obj = {
  name: "Eslam Sobhii",
  age: 24,
  address: "10th Of Ramadan City",
  [Symbol.iterator]: function () {
    let self = this;
    let keys = Object.keys(self);
    let pointer = 0;
    return {
      next: function () {
        if (pointer < keys.length) {
          let key = keys[pointer++];
          return {
            // value: [key, self[key]],
            value: self[key],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

for (let prop of obj) {
  console.log(prop);
}

console.log(...obj);
