function checkEvenOrOdd(input) {
  // Check if the input is a number
  const errorMessage = (typeof input !== 'number' || isNaN(input)) ? 'Error: Input is not a valid number' : '';

  
  const integerInput = Math.floor(input); //makes sure that the input of the user is an integer

 
  const sign = Math.sign(integerInput);
  const signMessage = (sign === 1) ? 'Positive' : (sign === -1) ? 'Negative' : 'Zero';  // Determine whether the number is positive, negative, or zero

  const isEven = (Math.abs(integerInput) & 1) === 0;
  const parityMessage = isEven ? 'Even' : 'Odd';

  const result = errorMessage || `${integerInput} is ${signMessage} ${parityMessage}`;
  return result;
}

// Prompt the user for input
const userInputString = prompt('Enter an integer:');
const userInput = parseFloat(userInputString);

const result = checkEvenOrOdd(userInput);
console.log(result || 'Error: Invalid input. Please enter a number.');
