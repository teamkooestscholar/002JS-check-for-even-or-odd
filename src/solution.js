// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  const result =
    !Number.isInteger(number)
      ? "Error: Input is not an integer"
      : number === 0
      ? "Zero"
      : number > 0
      ? number % 2 === 0
        ? "Positive Even"
        : "Positive Odd"
      : number % 2 === 0
      ? "Negative Even"
      : "Negative Odd";

  return result;
}

function DetermineNumber() {
  const userInput = document.getElementById("userInput").value;
  const number = parseInt(userInput);
  const answer = checkEvenOrOdd(number);

  // Display the result
  document.getElementById('result').textContent = "The Result is: " + answer;
}

const button = document.getElementById("checkButton");
button.addEventListener("click", DetermineNumber);
