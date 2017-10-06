function convertHTML(str) {
  // &colon;&rpar;
  var fuhao = {
    '>': '&gt;',
    '<': '&lt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&apos;'
  };
  var strarr = str.split('');
  var str2 = [];
  strarr.forEach(function(x) {
    if (fuhao.hasOwnProperty(x)) {
      str2.push(fuhao[x]);
    } else {
      str2.push(x);
    }
  });

  return str2.join('');
}

convertHTML("Dolce & Gabbana");
