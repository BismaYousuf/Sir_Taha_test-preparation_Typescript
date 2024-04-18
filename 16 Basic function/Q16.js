"use strict";
// ## Basic Functions Question:
// Define a function called `greet` that takes a parameter `name` and returns a greeting message including the 
// provided `name`. Then, call the `greet` function with the argument "John" and log the result to the console.
function greet() {
    let myName = "john";
    return myName;
}
let result = greet();
console.log(result);
// ## Function Return Value Question:
// Write a JavaScript function named `calculateArea` that takes two parameters: `length` and `width`, representing the 
// length and width of a rectangle respectively. The function should calculate the area of the rectangle and return the 
// result. 
// Provide an example of calling this function with values `5` for length and `3` for width, and then print the result.
function calculateArea(length, width) {
    let calculate = length + width;
    return calculate;
}
let totalResult = calculateArea(5, 3);
console.log(totalResult);
// ## Default Parameter Function Question:
// Create a JavaScript function named `greet` that accepts two parameters: `name` and `greeting`. The function should 
// return a greeting message using the provided `name` and `greeting`. If no `greeting` is provided, it should default to 
// `"Hello"`. 
// For example:
// - When `greet("John", "Good morning")` is called, it should return `"Good morning, John!"`.
// - When `greet("Jane")` is called, it should return `"Hello, Jane!"`.
function Greet(name, greeting = "Hello") {
    let myName = name + greeting;
    return myName;
}
let final = Greet("Hello");
console.log(`greet("John", "Good morning"`);
console.log(`greet("Jane")`);
// ## Rest Parameter Question:
// Explain the concept of a rest parameter in typescript. write a typeScript function named `friend` that accepts 
// any name of parameters and returns all name in array.
// For example:
// - If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
//at rest parameters we can add just parameter and add anything has no limit
function friend(...all) {
    let a = [...all];
    return a;
}
let resul = (friend('taha', 'Ahmed', 'Ali'));
console.log(resul);
// ## Spread Operator:
// Explain the concept of a spread operator in typescript. write a typeScript function named `friend` that accepts 
// any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. 
// make sure your orignal array should not be change.
// For example:
// - If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
//spread operator same as rest parameter but spread operator we use any where 
function myFriend(...all) {
    let a = [...all];
    console.log(a);
    let b = [...all];
    b.pop();
    return b;
}
let c = myFriend('taha', 'Ahmed', 'Ali');
console.log(c);
