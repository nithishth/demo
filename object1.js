//  variable creation
// let cpu = 'to code';

//  object declaration
// cpu = {board:" motherboard", RAM: "DDR4", Core:"Intel" };//object literal
//     console.log("the parts in cpu......"+ cpu.board + "  "+ cpu.Core + " "+ cpu.RAM); 
    
    /* 
    *notes:
    *define object in javascript:
    *---> using an object literal.
    *-->using new keyword
    *-->using an object constructor
    
    */

    // cpu = {
    //     board:" motherboard",
    //      RAM: "DDR4",
    //      Core:"Intel",
    //      };


    // cpu = {};
    // cpu.board = "motherboard";
    // cpu.RAM = "DDR4";
    // cpu.Core = "Intel";

    // let cpu = new Object();
    // cpu.board = 'motherboard';
    // cpu.RAM = 'DDR4';
    // cpu.Core = 'Intel';

    //OBJECT PROPERTY ACCESSING
    
    //1ST FORMAT

    // console.log(cpu.board);
    // console.log(cpu.RAM);
    // console.log(cpu.Core);

    //2ND FORMAT

    // console.log(cpu["RAM"]+ " " + cpu["board"]);

    //ADDING OBJECT PROPERTIES

    // cpu.graphiccard= "Nvidia";
    // console.log(cpu.graphiccard);

//deleting object properties

//delete cpu["graphiccard"];
// console.log(cpu.graphiccard);

// nested object:
 cpu = {
     board:" motherboard",
          RAM: "DDR4",
          Core:"Intel",
          fullsetup:function() {
             return this.core + " " + this.RAM +" " + this.board;
          }
        
        //  system: {
        //     s1:"dell",
        //     s2: "HP",
        //     s3: "ROG"
        //  }
//};
// console.log(cpu.system.s1 + " " + cpu.system.s2 + " " + cpu.system.s3);
// console.log(cpu.system["s1"]);
//console.log(cpu.fullsetup());

/* 
*OBJECT CONSTRUCTOR FUNCTION
* ---> create many objects of same type
* ---> to craete object type use an object constructor
*--> name constructor function with first letter uppercase
*/

// //CONSTRUCTOR FUNCTION WITH SYSTEM OBJECT
// function System(board, RAM, Core, graphics){
//     this.board = board;
//     this.RAM = RAM;
//     this.Core = Core;
//     this.graphics = graphics;
    // this.fullsetup = function(){
    //     return this.board;
    // }
//}

// let cpu = new System("  Motherboard", "DDR4", "Intel", "Nvidia" );

// System.prototype.changeGraphics = function(graphicsname) {
//     this.graphics = graphicsname;
// }

// cpu.changeGraphics("AMD");

// console.log(cpu.board+ " "+cpu.Core+ " " + cpu.RAM +  " " +cpu.graphics );
// console.log(cpu.graphics);

/* 
*Javascript assceesors getters and setters
*--> lang() property used to get language property
*/


cpu = {
      board: "motherboard",
      RAM: "DDR4",
      Core: "Intel",
      get MB() {
          return this.board;
      }

};
console.log(cpu.MB);
//get=read
//set =write
};
console.log(cpu.MB);
//get=read
//set =write


// set property
cpu.mb= "AMD ryzen";

console.log(cpu.Core);

/**
 * arrow function
 */

let data=(a,b,c) => a*b*c;
console.log(data(7,2,4));

/**
 * arrow function with parameter
 */
let sap="";
sap=val =>"java +val;
console.log(sap("script"));