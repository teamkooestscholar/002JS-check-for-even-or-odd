// 002 Function to check if a number is even or odd
function checkEvenOrOdd(integer){
  const result  = (integer % 2 ==0)? "Even" : "Odd";
  
  return result;           
};

function Positive_Negative(integer){
  const sign = (integer > 0)? "Postive" : "Negative";

  return sign;
}

while(true){
  const integer = parseFloat(prompt("Enter an integer: "));

  if(!isNaN(integer)){
      const res = checkEvenOrOdd(integer);
      const sig = Positive_Negative(integer);

      alert("The integer is " + (sig)+" "+(res));
  }
  else{
      alert("Error! Enter integer only!")
  }

}

