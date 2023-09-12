// Define a function to determine whether a number is even or odd
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even"; // Return 'Even' if the number is even
  } else {
    return "Odd";  // Return 'Odd' if the number is odd
  }
}

let userInput; // Declare a variable to store user input

// Start an infinite loop to repeatedly ask for user input
while (true) {
  userInput = prompt("Please enter a number (or type 'quit' to exit):"); // Prompt the user for input

  // Check if the user wants to exit the loop
  if (userInput.toLowerCase() === "quit") {
    break; // Exit the loop if the user wants to quit
  }

  // Convert the user's input to a numerical value
  let number = parseInt(userInput);

  // Check if the input is a valid number
  if (!isNaN(number)) {
    let result = checkEvenOrOdd(number); // Determine if the number is even or odd
    let message = `The number ${number} is ${result}.`; // Create a message with the result

    // Show the result in a popup alert
    alert(message);

    // Display the result in the console
    console.log(message);
  } else {
    // Display an error message for invalid input
    alert("Invalid input. Please enter a valid number or type 'quit' to exit.");
  }
}