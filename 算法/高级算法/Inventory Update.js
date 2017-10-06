function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var arr1Key = getIndexArr(arr1, 0),
        arr1Value = getIndexArr(arr1, 1),
        arr2Key = getIndexArr(arr2, 0),
        arr2Value = getIndexArr(arr2, 1);
    for (var i = 0; i < arr2Value.length; i++) {
      var ele = arr2Value[i];
      if (arr1Value.indexOf(ele) == -1) {
        arr1Value.push(ele);
        arr1Key.push(arr2Key[i]);
      } else {
        var index = arr1Value.indexOf(ele);
        arr1Key[index] = arr1Key[index] + arr2Key[i];
      }
    }
    arr1 = [];
    //复制数组，这样子操作，不会影响原数组
    var arrValue = arr1Value.concat().sort();
    for (i = 0; i < arrValue.length; i++) {
      var value2 = arrValue[i];
      var key2 = arr1Key[arr1Value.indexOf(value2)];
      var arrTemp = [];
      arrTemp.push(key2);
      arrTemp.push(value2);
      arr1.push(arrTemp);
    }
    return arr1;

    /*
    可以用这种排序算法
    return arr1.sort(function(a, b) {
      return a[1] > b[1] ? 1 : -1;
    });
    */
  }

  function getIndexArr(arr, index) {
    var arrTemp = [];
    for (var i = 0; i < arr.length; i++) {
      arrTemp.push(arr[i][index]);
    }
    return arrTemp;
  }
  // Example inventory lists


  updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) ;
