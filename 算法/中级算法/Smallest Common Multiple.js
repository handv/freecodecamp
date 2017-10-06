function smallestCommons(arr) {
  var min = arr[0] < arr[1] ? arr[0] : arr[1];
  var max = arr[0] > arr[1] ? arr[0] : arr[1];
  var mul = 1;
  for (var j = min; j <= max; j++) {
    mul *= j;
  }
  for (var i = max; i <= mul;) {
    var index = i;
    if (isCommons(index, min, max)) {
      return index;
    }
    i += max;
  }
  return i;
}

function isCommons(mul, min, max) {
  for (var j = min; j <= max; j++) {
    if (mul % j != 0) {
      return false;
    }
  }
  return true;
}

//算法：利用最大公约数求两整数的最小公倍数
function twoSmallestCommonMultiple(a, b) {
  var c = mostCommonDivisor(a, b);
  return a * b / c;
}
//算法：辗转相减法求两个整数的最大公约数
function mostCommonDivisor(a, b) {
  var c = Math.min(a, b);
  a = Math.max(a, b);
  b = c;
  if (b === 0) {
    return alert("error,please input a number bigger than zero");
  }
  c = a - b;
  while (c > 0) {
    a = Math.max(b, c);
    b = Math.min(b, c);
    c = a - b;
  }
  return b;
}

function smallestCommonMultiple(arr) {
  if (arr.length < 2) {
    return arr[0];
  }
  var a = 0;
  var result = arr.reduce(function(acc, val) {
    return twoSmallestCommonMultiple(acc, val);
  }, 1);
  return result;
}
smallestCommons([1, 13]);
