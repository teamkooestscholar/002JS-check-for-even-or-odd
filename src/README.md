# Even or Odd Number Checker

This JavaScript program checks whether a given number is even or odd based on user input.

## Function for Checking Even or Odd

The code defines a function called `checkEvenOrOdd` that takes a `number` as input and returns whether it's even or odd.

```javascript
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
```

## User Input and Loop

To interact with the program, we use a loop that continually asks the user for input until they choose to quit:

```javascript
let userInput;

// Start an infinite loop to keep asking for user input
while (true) {
  userInput = prompt("Even or Odd? \nEnter a number (or type 'quit' to exit):");

  // Check if the user wants to quit
  if (userInput.toLowerCase() === "quit") {
    break; // Exit the loop if the user wants to quit
  }
```

This program continuously checks if a number is even or odd and provides the result to the user. It also ensures that the user can exit the program at any time by typing 'quit'.

## User Input Validation and Result Display

This section of code is responsible for validating the user's input and displaying the result.

```javascript
// Convert the user input to a number
let number = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
  let result = checkEvenOrOdd(number); // Call the checkEvenOrOdd function
  let message = `The number ${number} is ${result}.`;

  // Display the result in an alert box
  alert(message);

  // Display the result in the console
  console.log(message);
} else {
  // Display an error message for invalid input
  alert("Invalid input. Please enter a valid number or type 'quit' to exit.");
}
```
