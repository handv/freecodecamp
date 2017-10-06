function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (before[0].toLowerCase() != before[0]) {
    after = after[0].toUpperCase() + after.substring(1);
  }
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
