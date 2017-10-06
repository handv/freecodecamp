function uniteUnique(arr) {
  for (var i = 1; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (arr.indexOf(arguments[i][j]) == -1) {
        arr.push(arguments[i][j]);
      }
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
