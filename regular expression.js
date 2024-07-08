/*
* syntax;
* /pattern/modifier(s);
*/
let data = "browse openai.com";
let pattern = /openai.com/i;
let result = data.match(pattern);
    
    console.log(result);
/**
 * modified used
 * 1. /g-->perform a global match(find all)
 * 2. /i-->perform case-insensitive matching
 * 3. /m-->perform multiline matching
 */

/**
 * Brackets
 * [abc]--> find any charcter between the brackets
 * [^abc]-->find any character not between brackets
 * [0-9]-->find any charcter between the brackets(any digits)
 * [^0-9]-->find any charcter not between the brackets(not any digits)
 * (x|y)-->find any of the alternatives specified
 */
//  [abc]
let info = "javascript code with java name";
let pattern1 = /[a]/g;
let result1 = info.match(pattern1);

console.log(result1);

//[^abc]
 let info1 = "javascript language with initial as java name";
let pattern2 = /[^a]/g;
let result2 = info1.match(pattern2);

console.log(result2);

//[0-9]
let num = "9843997262";
let pattern3 = /[1-5]/g;
let result3 = num.match(pattern3);

console.log(result3);

//[^0-9]



