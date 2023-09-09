// Use HTML Live Server for User Input
function method1EvenOrOdd(n) {
  if (Number.isInteger(n) === true) {
    check = n % 2;
    if (check === 0) {
      if (n > 0) {
        return "Positive Even Number";
      }
      else if (n < 0) {
        return "Negative Even Number";
      }
      else {
        return "Zero Even Number";
      }
    }
    else {
      if (n > 0) {
        return "Positive Odd Number";
      }
      else {
        return "Negative Odd Number";
      }
    }
  }
  else {
    return "Non-integer";
  }
}

function method2EvenOrOdd(n) {
  while (Number.isInteger(n) === false) {
    return "Non-integer";
  }
  check = n % 2;
  while (check === 0) {
    while (n > 0) {
      return "Positive Even Number";
    }
    while (n < 0) {
      return "Negative Even Number";
    }
    while (n === 0) {
      return "Zero Even Number";
    }
  }
  while (check !== 0) {
    while (n > 0) {
      return "Positive Odd Number";
    }
    while (n !== 0) {
      return "Negative Odd Number";
    }
  }
}

function checkNumberMethod1() {
  const inputElement = document.getElementById("numberInput");
  const number = parseFloat(inputElement.value);
  const resultElement = document.getElementById("resultMethod1");
  resultElement.textContent = `Method 1: ${number} is a ${method1EvenOrOdd(number)}`;
}

function checkNumberMethod2() {
  const inputElement = document.getElementById("numberInput");
  const number = parseFloat(inputElement.value);
  const resultElement = document.getElementById("resultMethod2");
  resultElement.textContent = `Method 2: ${number} is a ${method2EvenOrOdd(number)}`;
}