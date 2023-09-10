 // Bonus Challenge 1
 const isInteger = typeof number === 'number' && Number.isInteger(number);

 // Bonus Challenge 2
 const results = ["Even", "Odd"];
 const index = (Math.abs(Math.floor(number)) % 2);
 const result = results[index];

 if (!isInteger) {
   return "Error:The number is not and integer";
 }

 // Bonus Challenge 3
 if (number === 0) {
   return "Zero";
 }

 return (result === "Even" ? "Even" : "Odd") + (Math.sign(number) === 1 ? " Positive" : " Negative");
}

// Test cases
console.log(checkEvenOrOdd(-24));       // "Positive Even"
console.log(checkEvenOrOdd(7));      // "Negative Odd"
console.log(checkEvenOrOdd(0));       // "Zero"
console.log(checkEvenOrOdd(2.7));     // "Error: Input is not an integer"
