// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  const inInteger = Number.isInteger(number);
  const oddEven = inInteger && (number % 2 === 0) ? "Even" : inInteger ? "Odd" : "Error!!!";
  const pnInteger = inInteger && (number > 0) ? "positive" : inInteger && (number < 0) ? "negative" ;

  return `${pnInteger} ${oddEven}`;
}

console.log(checkEvenOrOdd(5)); // "positive Even"
console.log(checkEvenOrOdd(10)); // "positive Odd"
console.log(checkEvenOrOdd(-2)); // "negative Odd"
console.log(checkEvenOrOdd(-7)); // "negative Even"
console.log(checkEvenOrOdd(12.5)); // "Error!!!"
