document.addEventListener('DOMContentLoaded', function () {
  const numberForm = document.getElementById('numberForm');
  const numberInput = document.getElementById('numberInput');
  const resultElement = document.getElementById('result');

  numberForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = numberInput.value;
    const result = checkEvenOrOdd(userInput);
    resultElement.textContent = result;
  });

  function checkEvenOrOdd(num) {
    const parsedNum = parseInt(num);

    const isInteger = Number.isInteger(parsedNum);
    const sign = parsedNum < 0 ? 'Negative' : 'Positive';
    const isEven = parsedNum % 2 === 0;

    const result = isInteger
      ? `${sign} ${isEven ? 'Even' : 'Odd'} Number`
      : 'Error: Input is not an integer';

    return result;
  }
});
