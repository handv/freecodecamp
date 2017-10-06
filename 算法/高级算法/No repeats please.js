//这个要好好学习
function permAlone(str1) {
  function permutations(str) {
    if (str.length < 2) {
      return str;
    }
    var arr = [];
    for(var i=0;i<str.length;i++) {
      var sub1 = str[i];
      var sub2 = str.slice(0,i) + str.slice(i+1);
      for(var perm of permutations(sub2)) {
        arr.push(sub1 + perm);
      }
    }
    return arr;
  }
  var arr = permutations(str1);
  var num = 0;

  for(var i = 0;i < arr.length; i++) {
    if(!/(\w)\1/.test(arr[i])) {
      num++;
    }
  }

  return num;
}

permAlone('a');
