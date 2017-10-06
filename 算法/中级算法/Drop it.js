function dropElements(arr, func) {
  // Drop them elements.
  var i = 0;
  var ele = arr[i];
  while (i < arr.length && !func(ele)) {
    i++;
    ele = arr[i];
  }
  return arr.slice(i);
}

dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
