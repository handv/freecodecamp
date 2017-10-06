
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (var i=0;i<arr1.length;i++){
    var num = arr1[i];
    if (arr2.indexOf(num) == -1) {
      newArr.push(num);
    }
  }
  for (var i=0;i<arr2.length;i++){
    var num = arr2[i];
    if (arr1.indexOf(num) == -1) {
      newArr.push(num);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
