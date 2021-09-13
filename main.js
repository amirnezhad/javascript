const prompt = require('prompt-sync')();

let res = prompt("Enter first operand:\t");
let res2 = prompt("Enter second operand:\t");
let Num1 = parseInt(res);
let Num2 = parseInt(res2);
let sum = Num1 + Num2;
console.log("the sum is:" + sum);

// function sum(a, b) {
//     return a + b
// }
// console.log(sum(8, 4));