var totalBill = prompt('Total Bill:');
var paidCustomer = prompt('Paid by Customer:');
parseFloat(totalBill);
parseFloat(paidCustomer);

var returnMoney = (paidCustomer - totalBill).toFixed(2);
console.log('Total Bill = '+totalBill+'$\nPaid By Customer = '+paidCustomer+'$\nLeftover = '+returnMoney+'$');
returnMoney = parseFloat(returnMoney);
//100$ - 50$ - 20$ - 10$ - 5$ - 1$ - 0.5$ - 0.1$ - 0.05$ - 0.01$
var Cash = [100,50,20,10,5,1,0.5,0.05,0.01];
console.log('-------------------Please Return this Below Notes to Customer-----------------');
if(returnMoney > 0){
    if (returnMoney >= 100){
    var count100 = Math.floor((returnMoney/Cash[0]));
    returnMoney -= (parseFloat(count100*100)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('100$ : '+parseInt(count100));
    } 
    if (returnMoney >= 50){
    var count50 = Math.floor((returnMoney/Cash[1]));
    returnMoney -= (parseFloat(count50*50)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('50$ : '+parseInt(count50));
    }
    if (returnMoney >= 20){
    var count20 = Math.floor((returnMoney/Cash[2]));
    returnMoney -= (parseFloat(count20*20)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('20$ : '+parseInt(count20));
    }
    if (returnMoney >= 10){
    var count10 = Math.floor((returnMoney/Cash[3]));
    returnMoney -= (parseFloat(count10*10)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('10$ : '+parseInt(count10));
    }
    if (returnMoney >= 5){
    var count5 = Math.floor((returnMoney/Cash[4]));
    returnMoney -= (parseFloat(count5*5)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('5$ : '+parseInt(count5));
    }
    if (returnMoney >= 1){
    var count1 = Math.floor((returnMoney/Cash[5]));
    returnMoney -= (parseFloat(count1*1)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('1$ : '+parseInt(count1));
    }
    if (returnMoney >= 0.5){
    var count50cent = Math.floor((returnMoney/Cash[6]));
    returnMoney -= (parseFloat(count50cent*0.5)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('50C : '+parseInt(count50cent));
    }
    if (returnMoney >= 0.05){
    var count5cent = Math.floor((returnMoney/Cash[7]));
    returnMoney -= (parseFloat(count5cent*0.05)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('5C : '+parseInt(count5cent));
    }
    if (returnMoney >= 0.01){
    var count1cent = Math.floor((returnMoney/Cash[8]));
    returnMoney -= (parseFloat(count1cent*0.01)).toFixed(2);
    returnMoney = returnMoney.toFixed(2);
    console.log('1C : '+parseInt(count1cent));
    }
}
else{
    console.log('Not enough money paid by Customer');
};


