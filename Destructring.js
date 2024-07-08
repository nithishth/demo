/**
 * Destructuring for unpack object to variable
 * syntax;
 * let {data1, data2} = objectname;
 * 
 * Destructuring for unpack array and other iterables
 * syntax:
 * let [data1, data2] = objectname;
 */

//object destructuring

const laptop = {
    RAM : "DDR5",
    graphics : "nvidia",
    SSD: 512  
};

let {RAM,Graphics} = laptop;
console.log(RAM+" "+Graphics);

//string destructuring
let data = "JavaScript";

let [a1, a2 ,a3, a4, a5] = data;

console.log(a2);

//array destructuring
const electronics = ["Aurdino", "Gas sensor", "PH sensor", "Raspberr pi"];

// let [data1, data2] = electronics;
let [data1,,,data2] = electronics; //array skipped values

console.log(data1+" "+data2);

// destructuring array position values
const bike = ["TVS","HONDA", "KTM", "JAVA"];

const {[2]:bike1,[3]:bike2} = bike;

console.log(bike1+ " "+bike2);

// array destructuring rest properties
const num = [10, 20, 30, 40, 50, 60, 70, 80];

const [a,b, ...rest] = num;

console.log("a is" + a,"b is" + b,"the rest is"+ rest);

//Map destructuring
const code = new Map ([
     ["JAVA", 30000],
     ["JavaScript-Python", 35000]
]);

let sap = "";
for(const [key, values] of code) {
    sap  += " "+key+ "is" + values;
}
console.log(sap);

//Swaping variables
let course1 = "FSD";
let course2 = "DADS";

[course1,course2] =[course2, course1];

console.log(course1+" "+course2);

