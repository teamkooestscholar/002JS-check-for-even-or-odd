function checkNumberType() {
  const userInput = prompt("Please enter an integer:");
  const num = parseFloat(userInput);

  const isInteger = typeof num === 'number' && isFinite(num) && Math.floor(num) === num;

  if (!isInteger) {
    alert("Error! not an integer");
    return;
  }

  const isEven = Math.abs(num % 2) === 0;
  const isPositive = Math.sign(num) === 1;

  if (isEven && isPositive) {
    alert("Positive Even");
  } else if (isEven && !isPositive) {
    alert("Negative Even");
  } else if (!isEven && isPositive) {
    alert("Positive Odd");
  } else {
    alert("Negative Odd");
  }
}

// Call the function to get user input and display the result
checkNumberType();
