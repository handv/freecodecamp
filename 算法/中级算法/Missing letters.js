function fearNotLetter(str) {
  for (var i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++) {
    var char = String.fromCharCode(i);
    if (str.indexOf(char) == -1) {
      return char;
    }
  }
  return undefined;
}

fearNotLetter("abce");
