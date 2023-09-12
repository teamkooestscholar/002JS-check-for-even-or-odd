// Function to check if a number is even or odd
function checkEvenOrOdd() {
  const number = prompt("Enter a number:");
  
  if (isNaN(number)) {
    alert("Please enter a valid number.");
  } else {
    if (number % 2 === 0) {
      alert(`${number} is even.`);
    } else {
      alert(`${number} is odd.`);
    }
  }
}

checkEvenOrOdd();
