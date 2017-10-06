function pairElement(str) {
  var result = [];
  var pairMap = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  for (var i = 0; i < str.length; i++) {
    result.push([str[i], pairMap[str[i]]]);
  }
  return result;
}

pairElement("GCG");
