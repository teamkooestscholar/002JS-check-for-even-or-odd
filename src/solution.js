// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  const inInteger = Number.isInteger(number);
  const oddEven = inInteger && (number % 2 === 0) ? "Even" : inInteger ? "Odd" : "Error: Input is not an integer";
  const pnInteger = inInteger && (number > 0) ? "positive" : inInteger && (number < 0) ? "negative" : inInteger ? "zero" : "";

  return `${pnInteger} ${oddEven}`;
}

// Input Here
console.log(checkEvenOrOdd(9)); // "positive Even"
console.log(checkEvenOrOdd(-8)); // "negative Odd"
console.log(checkEvenOrOdd(0)); // "zero Even"
console.log(checkEvenOrOdd(3.1)); // "Error: Input is not an integer"

//edit