function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/_|-/g, ' ');
  var strtemp = str[0].toLowerCase();
  for (var i = 1; i < str.length; i++) {
    var char = str[i];
    if (char.toUpperCase() == char) {
      strtemp += ' ' + char.toLowerCase();
    } else {
      strtemp += char;
    }
  }
  str = strtemp.replace(/\s+/g, '-');
  //var arr = strtemp.split(/ -_/);
  //str = arr.join('-').toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');
