const obj = {
  name: "Eslam",
  age: 24,
  address: "10th Of Ramdan City",
  [Symbol.iterator]: function* () {
    yield this.name;
    yield this.age;
    yield this.address;
  },
};

for (prop of obj) {
  console.log(prop);
}
