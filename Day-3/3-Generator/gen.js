function* Fibonacci1(num) {
  let fib1 = 0;
  let fib2 = 1;
  for (let i = 0; i < num; i++) {
    let curFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = curFib;
    yield curFib;
  }
}

function* Fibonacci2(max) {
  let fib1 = 0;
  let fib2 = 1;
  let curFib = 1;
  while (curFib <= max) {
    fib1 = fib2;
    fib2 = curFib;
    yield curFib;
    curFib = fib1 + fib2;
  }
}

// Testing the first generator
const gen1 = Fibonacci1(5);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

// Testing the second generator
const gen2 = Fibonacci2(12);
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
