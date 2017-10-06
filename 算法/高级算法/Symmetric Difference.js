
function sym(args) {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  var result = arr.reduce(function(x,y){
    return (x=diffArr(x,y));
  });
  return result;
}
function diffArr(args1,args2) {
  var x = args1,
      y = args2,
      result = [];
  for (var i = 0; i < x.length; i++) {
    var ele = x[i];
    if (y.indexOf(ele) == -1) {
      if(result.indexOf(ele) == -1) {//结果数组里也不能重复
         result.push(ele);
      }
    } else {
while(y.indexOf(ele) != -1) {
          y.splice(y.indexOf(ele),1);
        }    }
  }
  y.map(function(z) {
    if (result.indexOf(z) == -1) {
      result.push(z);
    }
  });
  return result;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
