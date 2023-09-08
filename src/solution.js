// Function to check if a number is even or odd
const checkEvenOrOdd = (num) => {
  const isInteger = Number.isInteger(num);
  const number = isInteger ? (num % 2 === 0 ? "Even" : "Odd") : "";
  const aboveZero = num >= 0;
  const sign = isInteger ? ( aboveZero ? "positive" : "negative") : "";
  
  const result = isInteger ? `${num} is a ${sign} ${number} integer` : "Error: not an integer";
  
  alert(result);
}

const input = parseFloat(prompt('Enter a number: '));

checkEvenOrOdd(input);
