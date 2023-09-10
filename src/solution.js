// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  }
  
  // Prompt the user for input
  const userInput = prompt('Enter a number:');
  
  // Convert the user input to a number
  const number = parseInt(userInput);
  
  // Check if the input is a valid number
  if (!isNaN(number)) {
    const result = checkEvenOrOdd(number);
    console.log(`${number} is ${result}.`);
  } else {
    console.log('Please enter a valid number.');
  }
  
