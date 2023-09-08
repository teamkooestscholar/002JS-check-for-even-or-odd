// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let userInput;

// Start an infinite loop to keep asking for user input
while (true) {
  userInput = prompt("Even or Odd? \nEnter a number (or type 'quit' to exit):");

  // Check if the user wants to quit
  if (userInput.toLowerCase() === "quit") {
    break; // Exit the loop if the user wants to quit
  }

  // Convert the user input to a number
  let number = parseInt(userInput);

  // Check if the input is a valid number
  if (!isNaN(number)) {
    let result = checkEvenOrOdd(number);
    let message = `The number ${number} is ${result}.`;

    // Display the result in an alert box
    alert(message);

    // Display the result in the console
    console.log(message);
  } else {
    // Display an error message for invalid input
    alert("Invalid input. Please enter a valid number or type 'quit' to exit.");
  }
}
