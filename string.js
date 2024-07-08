/*let data1="java";
let data2='javascript "file"';
let data3="script 'data'";
  
console.log(data1+" "+data2+" "+data3);*/

let data1="javascript";
let data2=new String("javascript");
console.log(data1==data2);

// let data1 = "Java";
// let data2 = 'javascript "file"';
// let data3 = "script 'data'";

// //console.log(data1+" "+data2+" "+data3);
// console.log(data1.length);

//== operator
// let data1 = new String("javascript");
// let data2 = new String("javascript");
// console.log(data1==data2);

//string methods
/**
 * string length
 * string charAt()
 * string charcodeAt()
 * string at()
 * string.[]
 * string slice()
 * string substring()
 * string substr()
 * string toUpperCase()
 * string toLowerCase()
 * string concat()
 * string trim()
 * string trimStart()
 * string trimEnd()
 * string padStart()
 * string padEnd()
 * string repeat()
 * string replace()
 * string replaceAll()
 * string split()
 */

//string length
let sample1 ="      JAVASCRIPT INFO       ";
let sample2 = sample1.trim();
let sample3 = sample1.trimStart();
let sample4 = sample1.trimEnd();
let sample ="javascript";
let letter = sample.at(5);
let data = sample.slice(0, 6) //end-1
console.log(sample.length);
//string charAt()
console.log(sample.charAt(0));
//string charCodeAt()
console.log(sample.charCodeAt(0));
//string at()
console.log(letter);
//string slice()
console.log(data);
//string substring
console.log(sample.substring(1, 8));
//string toUpperCase()
console.log(sample.toUpperCase());
//string toLowerCase()
console.log(sample.toLowerCase());
//string trim
console.log(sample1.length);
console.log(sample2.length);
//string trimStart()
console.log(sample3.length);
//string trimEnd()
console.log(sample4.length);
//string 

