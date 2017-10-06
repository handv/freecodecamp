
function pairwise(arr, arg) {
  var sum = 0;
  for (var i = 0; i < arr.length && arr[i] != undefined; i++) {
    var sec = arg - arr[i];
    var secIndex = arr.indexOf(sec,i+1);
    if (secIndex != -1) {
      arr[i] = undefined;
      arr[secIndex] = undefined;
      sum += i + secIndex;
    }
  }
  return sum;
}

pairwise([1, 1, 1], 2);
