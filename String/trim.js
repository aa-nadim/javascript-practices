//Trims whitespace from the beginning and end of the string. 
//Part of the ECMAScript 5 standard.

const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";