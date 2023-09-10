// Function to check if a number is even or odd
// function checkEvenOrOdd(_) {
  // Put your code here
// }


// * Modify the function to handle non-integer inputs gracefully. Return an error message if the input is not an integer. **[+5 extra credit points]**

// * Implement the function without using conditional statements (if-else). **[+5 extra credit points]**

// * Extend the function to check if the input is a positive or negative even or odd number. **[+5 extra credit points]**

//npm intall prompt-sync is needed + this code below is needed to make the prompt() function work in codespaces
const prompt=require("prompt-sync")({sigint:true});



// program to check if the number is even or odd
// take input from the user
const number = prompt("Input a number: ");

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";





//          /^: This symbol ^ is the start anchor, and it asserts that the regex pattern must match at the start of the string.

//          [-]?: This part of the pattern allows for an optional minus sign (-). The [-] specifies that either a hyphen or nothing should match.

//         \\d: This part matches a digit from 0 to 9. The \\ is used to escape the backslash, which is a special character in regular expressions.



function isNumber(value){
  return /^-?\\d/.test(value)
}


// display the result
console.log(`The number is ${result}.`);

console.log( "The input is a " + isNumber(number))





