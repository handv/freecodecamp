
function telephoneCheck(str) {
  //应该使用正则表达式
  /*
  ^1? 以1开头，或者没有1
  \s? 包含0到1个空格
  ((\d{3})|\d{3}) 括号里3个数字或者没有括号的3个数字
  (\s|-)? 0到1个空格或者-
  \d{4}$ 以4个数字结尾
   */
  var reg = /^1?\s?((\d{3})|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;
  return reg.test(str);
  /**
   * 比较low的方法
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  /*
  if(str.search(/[^ ()-\d]/) != -1) {
    return false;
  }
  if(str.indexOf('-') == 0) {
    return false;
  }
  if(str.indexOf('(') != -1 && (str.indexOf(')') == -1 || (str.indexOf(')') - str.indexOf('(')) >4)) {
    return false;
  }
  if(str.indexOf('(') == -1 && str.indexOf(')') != -1) {
    return false;
  }
  var strNum = str.replace(/\D/g,'');//去除非数字
  var numLength = strNum.length;
  var firstnum = parseInt(strNum[0]);

  if(numLength < 10 || numLength > 11) {
    return false;
  }
  if(numLength == 11 && firstnum != 1) {
    return false;
  }
  return true;
  */
}



telephoneCheck("1 555 555 55555");
