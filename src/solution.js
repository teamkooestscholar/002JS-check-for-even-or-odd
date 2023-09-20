function checkEvenOrOdd(input) {
  const number = parseFloat(input);

  if (isNaN(number) || !Number.isInteger(number)) {
    return "Error: Input is not an integer";
  }

  if (number === 0) {
    return "Zero";
  }

  const isEven = ["Even", "Odd"][Math.abs(number) % 2];
  const sign = Math.sign(number) === 1 ? "Positive" : "Negative";

  return `The number is ${sign} ${isEven}`;
}

// Get user input and call the function
const userInput = prompt("Enter a number:");
const result = checkEvenOrOdd(userInput);
alert(result);

