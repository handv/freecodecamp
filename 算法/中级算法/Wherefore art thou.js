function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = Object.keys(source);

  var arr2 = [];
  for (var i = 0; i < collection.length; i++) {
    var x = collection[i];
    var k = 0;
    for (var j = 0; j < arr.length; j++) {
      if (!x.hasOwnProperty(arr[j])) {
        break;
      } else if (x[arr[j]] == source[arr[j]]) {
        k++;
      }
    }
    if (k == arr.length) {
      arr2.push(x);
    }
  }
  // Only change code above this line
  return arr2;
}

whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
});
