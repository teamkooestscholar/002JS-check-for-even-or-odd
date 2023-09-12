// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
   
  const results = [
    ["Positive Even", "Positive Odd"],
    ["Negative Even", "Negative Odd"]
  ];

  const isInteger = Number.isInteger(number);
  const remainder = Math.abs(Math.floor(number) % 2);
  const sign = Math.sign(number);

  const output = isInteger ? results[sign < 0 ? 1 : 0][remainder] : "Error: Input is not an integer";

  return output;
}

console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(11));
console.log(checkEvenOrOdd(-12));
console.log(checkEvenOrOdd(-13.4));
console.log(checkEvenOrOdd("aintnumber"));