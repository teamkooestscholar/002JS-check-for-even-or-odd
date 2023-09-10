document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('checkButton');
    const resultElement = document.getElementById('result');
  
    checkButton.addEventListener('click', function () {
      const userInput = document.getElementById('userInput').value;
      const number = parseFloat(userInput);
  
      function checkEvenOrOdd(number) {
        const isInteger = typeof number === 'number' && Number.isInteger(number);
        const parity = ["Even", "Odd"];
        const signs = ["Positive", "Negative"];
        const isEven = Math.abs(Math.floor(number) % 2) === 0;
        const sign = Math.sign(number);
  
        const isNotInteger = !isInteger ? "ERROR: Input is not an integer" : "";
        const parityIndex = isEven ? 0 : 1;
        const signIndex = sign === 1 ? 0 : 1;
  
        return isNotInteger || `${signs[signIndex]} ${parity[parityIndex]}`;
      }
  
      const result = isNaN(number) ? "Please enter a valid number." : checkEvenOrOdd(number);
      resultElement.textContent = result;
    });
  });
  
