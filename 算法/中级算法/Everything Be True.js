function truthCheck(collection, pre) {
  // Is everyone being true?
  //forEach不能中断循环
  for (var x of collection) {
    var xkeys = Object.keys(x);
    if (xkeys.indexOf(pre) == -1) {
      return false;
    }
    if (!Boolean(x[pre])) {
      return false;
    }
  }
  return true;
}

truthCheck([{
  "user": "Tinky-Winky",
  "sex": "male"
}, {
  "user": "Dipsy",
  "sex": "male"
}, {
  "user": "Laa-Laa",
}, {
  "user": "Po",
  "sex": "female"
}], "sex");
