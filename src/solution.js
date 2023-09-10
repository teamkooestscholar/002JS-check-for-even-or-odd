const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function getUserInput() {
  rl.question("Enter a number to check if even or odd: ", (input) => {
    const parsedInput = parseInt(input);

    const result = checkEvenOrOdd(parsedInput);
    console.log(result);

    if (!Number.isInteger(parsedInput)) {
      getUserInput(); // Prompt for input again if it's not an integer
    } else {
      rl.close();
    }
  });
}

getUserInput();
