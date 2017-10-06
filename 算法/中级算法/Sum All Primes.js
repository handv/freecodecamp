function sumPrimes(num) {
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    if (isprimes(i)) {
      sum += i;
    }
  }

  return sum;
}

function isprimes(num) {
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
sumPrimes(10);
