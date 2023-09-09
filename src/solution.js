function checkEvenOrOdd(number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return 'Error: Input is not an integer';
  }

  if (number === 0) {
    return 'Zero is neither even nor odd';
  } else if (number % 2 === 0) {
    if (number > 0) {
      return 'Positive Even';
    } else {
      return 'Negative Even';
    }
  } else {
    if (number > 0) {
      return 'Positive Odd';
    } else {
      return 'Negative Odd';
    }
  }
}


console.log(checkEvenOrOdd(-10));
