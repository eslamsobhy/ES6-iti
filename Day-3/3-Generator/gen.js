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

const gen1 = Fibonacci1(5);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
