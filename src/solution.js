// Function to check if a number is even or odd
function checkEvenOrOdd(inputNumber) {
  const result = (inputNumber % 2 === 0) ? "Even" : "Odd";
  return result;
}

function checkPositiveOrNegative(inputNumber) {
  const sign = (inputNumber > 0) ? "Positive" : "Negative";
  return sign;
}

while (true) {
  const userNumber = parseFloat(prompt("Enter a number: "));

  if (!isNaN(userNumber)) {
    const evenOrOddResult = checkEvenOrOdd(userNumber);
    const positiveOrNegativeResult = checkPositiveOrNegative(userNumber);

    alert("The number is " + positiveOrNegativeResult + " " + evenOrOddResult);
  } else {
    alert("Please enter a valid number.");
  }
}
 

