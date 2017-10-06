
function sumAll(arr) {
  var min = arr[0]>arr[1]?arr[1]:arr[0];
  var max = arr[0]<arr[1]?arr[1]:arr[0];
  var arr2 = [];
  for(var i =min;i<=max;i++){
    arr2.push(i);
  }
  var sum = arr2.reduce(function(x,y){
    return x+y;
  });
  return sum;
}

sumAll([1, 4]);
