/***
 *  javascript function defined with function keyword
 * folowed by name by parameter
 * 
 * syntax:
 * function name(parameter1,parameter2,parameter3){
 * statement;
 * retuen variable_name;
 * }
 */

 let a=data1(4,7,9);
 console.log(a);

 function data1(x,y,z) {
    return x+y+z;
 }

 /**
  * note:
  * if the variable declared inside the function called
  * if declared outside means global scope
  */

 // local variable
 function example1(){
    let bikename ="r15";
    console.log(bikename);

 }
 example1();