function sumFibs(num) {
  var i = 0;
  var sum = 0;
  var fib = Fib(i);
  while (fib <= num) {
    if (fib % 2 == 1) {
      sum += fib;
    }
    i++;
    fib = Fib(i);
  }

  return sum;
}

function Fib(num) {
  var sum = 0;
  var a = 1,
    b = 1;
  if (num < 2) {
    return 1;
  }
  for (var i = 2; i <= num; i++) {
    sum = a + b;
    b = a;
    a = sum;
  }
  return sum;
}
sumFibs(75025);
