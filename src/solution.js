const readline = require('readline');

// Function to check if a number is even or odd (same function as before)
function evenOrOddExtended(input) {
  const num = Number(input);
  const isInteger = !isNaN(num) && Number.isInteger(num);
  const parity = ["Even", "Odd"][(Math.floor(Math.abs(num) / 2) % 2)];
  const sign = ["Positive", "Negative"][Math.sign(num) === -1 ? 1 : 0];
  return isInteger ? `${sign} ${parity}` : "Error: Input is not an integer";
}

// Create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input and process it
rl.question("Please enter an integer: ", (userInput) => {
  const result = evenOrOddExtended(userInput);
  console.log(result);
  rl.close();
});
