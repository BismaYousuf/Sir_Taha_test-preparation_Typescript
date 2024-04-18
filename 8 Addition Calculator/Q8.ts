// ## Calculator

// - make addition calculator with the help of inquirer and 2 numbers.

import inquirer from "inquirer";

let answer = await inquirer.prompt({
    type : "number", 
    name : "answer1",
    message : "enter your first number"
})
let answer2 = await inquirer.prompt({
    type : "number",
    name : "answer2",
    message : "enter your second number"
})
let total = answer.answer1 + answer2.answer2
console.log(total);

