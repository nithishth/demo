// sequence control//
function dataDisplay(data1) {
    console.log(data1);
 }

 function firstData() {
    dataDisplay("info to display");
 }
 function secondData() {
    dataDisplay("thanks&regard");
 }

 firstData();
 secondData();

 //callback function//
 function bike (sap) {
    console.log(sap);
 }
 function Bikecalculate(num1,num2,mycallback) {
    let sum = num1 + num2;
    mycallback(sum);
 }
 Bikecalculate(5,6,bike);

 //promises//
 function movie(sap1) {
    console.log(sap1);
 }

 let myPromises = new Promise(function(myResolve,myReject) {
    let y = 0;

    if(y == 0) {
        myResolve("Accepted");
 )else {}
    }
 });