
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var arr2 = arr.map(function(x){
      var ele = {};
      ele.name = x.name;
      ele.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(x.avgAlt + earthRadius,3) / GM));
      return ele;
  });
  return arr2;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
