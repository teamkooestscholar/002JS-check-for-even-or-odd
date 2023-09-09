// Function to check if a number is even or odd
function checkEvenOrOdd(input) {
  const result = new Map([
    [true, new Map([[true, "Even and Positive"], [false, "Even and Negative"]])],
    [false, new Map([[true, "Odd and Positive"], [false, "Odd and Negative"]])]
  ]);

  const isInteger = !isNaN(input) && Number.isInteger(input);

  return isInteger
    ? result.get(input % 2 === 0).get(input > 0) || "Even"
    : "Try again. Enter an integer.";
}

let input;
do {
  input = prompt("Enter a number to check if even or odd:");
  input = parseInt(input);

  const result = checkEvenOrOdd(input);
  alert(result);
} while (!Number.isInteger(input));
