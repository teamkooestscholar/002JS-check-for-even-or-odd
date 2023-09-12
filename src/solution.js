// Function to check if a number is even or odd
var number = parseInt(prompt("Enter a number to check if it's even or odd: "))
  // Put your code here
function checkEvenOrOdd(number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return "Error: Please enter a valid integer.";
  }
  
  const parity = (Math.floor(Math.abs(number)) % 2 === 0) ? "Even" : "Odd";
  const int = (Math.sign(number) === 1) ? "positive" : (Math.sign(number) === -1) ? "negative" : "zero";

   return `The number is an ${parity} ${int} number.`;
}

const result = checkEvenOrOdd(number);

console.log(result);
