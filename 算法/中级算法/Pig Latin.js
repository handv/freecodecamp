function translatePigLatin(str) {
  var yelements = ['a', 'e', 'i', 'o', 'u'];
  var felements = ['th', 'gl'];
  var char = str[0];
  if (felements.indexOf(str.substr(0, 2)) != -1) {
    str = str.substring(2) + str.substr(0, 2) + 'ay';
  } else if (yelements.indexOf(char) == -1) {
    str = str.substring(1) + char + 'ay';
  } else {
    str += 'way';
  }
  return str;
}

translatePigLatin("consonant");
