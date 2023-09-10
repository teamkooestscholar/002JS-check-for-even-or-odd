// Function to check if a number is even
function checkEvenOrOdd(num)
{
    return num % 2 === 0;
}
  
  // Function to determine if the input is even or odd or return an error message without using "if"
  function TestTheOddsEven(input) {
    // Use the ternary operator to check if input is not a number
    const result =
      typeof input === 'number' && !isNaN(input) && Number.isInteger(input)
        ? checkEvenOrOdd(input)
          ? input >= 0
            ? 'Positive Even'
            : 'Negative Even'
          : input >= 0
            ? 'Positive Odd'
            : 'Negative Odd'
        : 'Error: Please enter a valid integer';
  
    return result;
  }
  
    document.getElementById('evenOddForm').addEventListener('submit', function (e) 
    {
    e.preventDefault();
    const userInput = parseInt(document.getElementById('numberInput').value);
    const message = TestTheOddsEven(userInput);
    document.getElementById('result').textContent = message;});
