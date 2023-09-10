// Function to check if a number is even or odd
// function checkEvenOrOdd(_) {
  // Put your code here
// }


// * Modify the function to handle non-integer inputs gracefully. Return an error message if the input is not an integer. **[+5 extra credit points]**

// * Implement the function without using conditional statements (if-else). **[+5 extra credit points]**

// * Extend the function to check if the input is a positive or negative even or odd number. **[+5 extra credit points]**

//npm intall prompt-sync is needed + this code below is needed to make the prompt() function work in codespaces
const prompt=require("prompt-sync")({sigint:true});



function checkEvenOrOdd(number) {

  //This uses an ternary operator 
  // it is an alternative to if else statements by making boolean arguments

  const result =
    !Number.isInteger(number)
      ? "Error: Input is not an integer" // the triple equal (===) means equal 
                                         //without type which means the type of value must be match the type of variable
      : number === 0
      ? "Zero"
      : number > 0
      ? number % 2 === 0
        ? "Positive Even"                //I decided to combine both the even odd and positive and negative checks
        : "Positive Odd"
      : number % 2 === 0
      ? "Negative Even"
      : "Negative Odd";

  return result;
 
}


const usernumber = prompt("Input a number ");

const number = parseInt(usernumber);


const answer = checkEvenOrOdd(number)


console.log('The Result is determined to be = ' + answer );






