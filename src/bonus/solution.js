// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  const parity = ["even", "odd"];
  return parity[Math.abs(number) % 2]; // Determine parity using array indexing
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
  let number = parseFloat(userInput);

  // Check if the input is a valid number
  if (!isNaN(number) && Number.isInteger(number)) {
    let result = checkEvenOrOdd(number);
    let message = `The number ${number} is an ${result} number.`;

    // Determine the sign of the number and add it to the message
    const sign = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
    message += ` It is ${sign}.`;

    // Display the result in an alert box
    alert(message);

    // Display the result in the console
    console.log(message);
  } else {
    // Display an error message for invalid input
    alert("Invalid input. Please enter a valid integer number or type 'quit' to exit.");
  }
}
