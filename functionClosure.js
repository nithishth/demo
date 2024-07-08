//Global variable

datafunction();

function datafunction() {
    let x = 8;
    console.log(x * x);
}

//variable as global

let a = 10;
function sapFunction() {
    
}
console.log(a + a);
//counter using local variable

// let counter = 0;

// function add() {
//     counter += 1;
// }
// add();


// add();

// add();
// console.log("the counter is "+counter);

//nested function
console.log(add());

function add() {
    let counter =0;
    function plus() {
        counter += 1;
    }
    plus();
    return counter
}
