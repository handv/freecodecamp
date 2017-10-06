function steamrollArray(arr) {
  // I'm a steamroller, baby
  // 不允许使用全局变量，需要使用闭包理念才行。。。
  var arrtemp = [];
  (function shiftArr(arr) {
    var ele;
    while ((ele = arr.shift()) != undefined) {
      if (Array.isArray(ele)) {
        shiftArr(ele);
      } else {
        arrtemp.push(ele);
      }
    }
  })(arr);
  return arrtemp;
}

steamrollArray([1, {},
  [3, [
    [4]
  ]]
]);
