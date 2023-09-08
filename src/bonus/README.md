# Even or Odd Number Checker (Bonus Challenges)

This JavaScript program checks if a user-provided number is even or odd, as well as its sign (positive, negative, or zero).

## Function for Parity Checking

The code defines a function to determine if a number is even or odd:

### `checkEvenOrOdd(number)`

This function calculates the parity of a number and returns either "even" or "odd" based on the result.

```javascript
function checkEvenOrOdd(number) {
  const parity = ["even", "odd"];
  return parity[Math.abs(number) % 2];
}
```

## User Input and Validation

The program utilizes a `while` loop to continuously prompt the user for input until they decide to quit. It validates user input to ensure it's a valid integer number or the "quit" command.

```javascript
// Start an infinite loop to keep asking for user input
while (true) {
  userInput = prompt("Even or Odd? \nEnter a number (or type 'quit' to exit):");

  // Check if the user wants to quit
  if (userInput.toLowerCase() === "quit") {
    break; // Exit the loop if the user wants to quit
  }

  // Convert the user input to a number
  let number = parseFloat(userInput);

  // Check if the input is a valid number
  if (!isNaN(number) && Number.isInteger(number)) {
    // Valid input processing
  } else {
    // Display an error message for invalid input
    alert("Invalid input. Please enter a valid integer number or type 'quit' to exit.");
  }
}
```

## Calculation and Output

If the user provides a valid integer number, the program calculates and displays the following:

- Whether the number is "even" or "odd."
- Whether the number is "positive," "negative," or "zero."

```javascript
// Calculate even/odd and sign of the number
let result = checkEvenOrOdd(number);
let message = `The number ${number} is an ${result} number.`;

// Determine the sign of the number and add it to the message
const sign = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
message += ` It is ${sign}.`;

// Display the result in an alert box
alert(message);

// Display the result in the console
console.log(message);
```
