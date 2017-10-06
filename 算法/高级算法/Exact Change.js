
    function checkCashRegister(price, cash, cid) {
      var change;
      // Here is your change, ma'am.
      change = cash * 100 - price * 100;
      var cidObj = {};
      var sum = 0;
      for(var i = 0; i < cid.length; i++) {
        sum += cid[i][1];
      }
      if (change == sum * 100) {
        return "Closed";
      }
      for(i = 0; i < cid.length; i++) {
        switch(cid[i][0]) {
          case 'PENNY':
            var num = cid[i][1]/0.01;
            cidObj[0.01] = num;
            break;
          case 'NICKEL':
            num = Math.round(cid[i][1]/0.05);
            cidObj[0.05] = num;
            break;
          case 'DIME':
            num = cid[i][1]/0.1;
            cidObj[0.1] = num;
            break;
          case 'QUARTER':
            num = cid[i][1]/0.25;
            cidObj[0.25] = num;
            break;
          case 'ONE':
            num = cid[i][1]/1;
            cidObj[1] = num;
            break;
          case 'FIVE':
            num = cid[i][1]/5;
            cidObj[5] = num;
            break;
          case 'TEN':
            num = cid[i][1]/10;
            cidObj[10] = num;
            break;
          case 'TWENTY':
            num = cid[i][1]/20;
            cidObj[20] = num;
            break;
          case 'ONE HUNDRED':
            num = cid[i][1]/100;
            cidObj[100] = num;
            break;
        }
      }
    var changeArr = [];
    function extraChange(change,money,moneyStr){
      var num = Math.floor(change / money / 100);
      if (num > cidObj[money]) {
        num = cidObj[money];
      }
      cidObj[money] -= num;
      changeArr.push([moneyStr, num * money]);
      var extra = change - money * num * 100;
      return extra;
    }

    function getChange(change) {
      var num, extra;
      if (change >= 10000 && cidObj[100] > 0) {
        extra = extraChange(change,100,'ONE HUNDRED');
        getChange(extra,cidObj);
      } else if (change >= 2000 && cidObj[20] > 0) {
        extra = extraChange(change,20,'TWENTY');
        getChange(extra,cidObj);
      } else if (change >= 1000 && cidObj[10] > 0) {
        extra = extraChange(change,10,'TEN');
        getChange(extra,cidObj);
      } else if (change >= 500 && cidObj[5] > 0) {
        extra = extraChange(change,5,'FIVE');
        getChange(extra,cidObj);
      } else if (change >= 100 && cidObj[1] > 0) {
        extra = extraChange(change,1,'ONE');
        getChange(extra,cidObj);
      } else if (change >= 25 && cidObj[0.25] > 0) {
        extra = extraChange(change,0.25,'QUARTER');
        getChange(extra,cidObj);
      } else if (change >= 10 && cidObj[0.1] > 0) {
        extra = extraChange(change,0.1,'DIME');
        getChange(extra,cidObj);
      } else if (change >= 5 && cidObj[0.05] > 0) {
        extra = extraChange(change,0.05,'NICKEL');
        getChange(extra,cidObj);
      } else if (change >= 1 && cidObj[0.01] > 0) {
        extra = extraChange(change,0.01,'PENNY');
        getChange(extra,cidObj);
      } else if (change != 0) {
        changeArr = "Insufficient Funds";
      }
    }
      getChange(change,cidObj);
      return changeArr;
    }

    // Example cash-in-drawer array:
    // [["PENNY", 1.01],
    // ["NICKEL", 2.05],
    // ["DIME", 3.10],
    // ["QUARTER", 4.25],
    // ["ONE", 90.00],
    // ["FIVE", 55.00],
    // ["TEN", 20.00],
    // ["TWENTY", 60.00],
    // ["ONE HUNDRED", 100.00]]
  checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
