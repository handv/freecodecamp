function addTogether() {
  var num = arguments[0];
  if (typeof(num) != 'number') {
    return undefined;
  } else if (arguments.length == 2) {
    return typeof(arguments[1]) == 'number' ? num + arguments[1] : undefined;
  } else {
    var sumTwoAnd = function(y) {
      if (typeof(y) != 'number') {
        return undefined;
      }
      return num + y;
    };
    return sumTwoAnd;
  }
  return false;
}

addTogether(2)(3);
