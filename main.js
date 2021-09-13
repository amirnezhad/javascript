const prompt = require('prompt-sync')();

function add(leftOperand, rightOperand) {
    let firstInput = parseInt(leftOperand);
    let secondInput = parseInt(rightOperand);
    //   let result = firstInput+ secondInput
    return firstInput + secondInput

}

function sub(leftOperand, rightOperand) {
    let firstInput = parseInt(leftOperand);
    let secondInput = parseInt(rightOperand);
    //   let result = firstInput+ secondInput
    return firstInput - secondInput

}
// start:
let operation;
let question = prompt("+ or -?\t")
switch (question) {
    case "+":
        operation = add;
        break;

    case "-":
        operation = sub;
        break;

    default:
        console.log('error')


}
if (operation) {
    let res = prompt("Enter first operand:\t");
    let res2 = prompt("Enter second operand:\t");

    let result = operation(res, res2);
    console.log(result)
}
console.log('bye')