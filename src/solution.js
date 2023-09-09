function checkNumber(input) {
  const result = isNaN(input)
    ? "Error: Not a valid number"
    : input % 2 === 0
    ? input >= 0
      ? "Positive Even"
      : "Negative Even"
    : input >= 0
    ? "Positive Odd"
    : "Negative Odd";

  return result;
}

// Example usage:
console.log(checkNumber(4));       // Positive Even
console.log(checkNumber(7));       // Positive Odd
console.log(checkNumber(-2));      // Negative Even
console.log(checkNumber(-9));      // Negative Odd
console.log(checkNumber("My Name is Jay Em")); // Error: Not a valid number
