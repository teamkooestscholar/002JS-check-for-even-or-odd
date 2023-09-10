function checkNumber(num) {
  const parsedNum = parseInt(num);

  if (isNaN(parsedNum)) {
    return 'Error: Input is not a number';
  }

  const isInteger = Number.isInteger(parsedNum);
  const sign = parsedNum < 0 ? 'negative' : 'positive';
  const isEven = parsedNum % 2 === 0;

  const result = isInteger
    ? `${sign} ${isEven ? 'even' : 'odd'} number`
    : 'Error: Input is not an integer';

  return result;
}

const userInput = prompt('Enter a number:');

if (userInput !== null) {
  const result = checkNumber(userInput);
  alert(result);
}