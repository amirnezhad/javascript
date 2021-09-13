const prompt = require('prompt-sync')();

function add(leftOperand, rightOperand) {
    let firstInput = parseInt(leftOperand);
    let secondInput = parseInt(rightOperand);
    //   let result = firstInput+ secondInput
    return firstInput + secondInput

}
// start:
let res = prompt("Enter first operand:\t");
let res2 = prompt("Enter second operand:\t");

let result = add(res, res2);
console.log(result)