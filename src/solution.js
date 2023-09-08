function checkEvenOrOdd(num){
  const result  = (num % 2 ==0)? "Even" : "Odd";
  return result;
  
                   
};
function PositiveorNegative(num){
  const sign = (num >0)? "Postive" :"Negative";
  return sign;
}


while(true){
  const num = parseFloat(prompt("Enter a number: "));

  if(!isNaN(num)){
      const res = checkEvenOrOdd(num);
      const sig = PositiveorNegative(num);
      alert("The number is " + (sig)+" "+(res));
  }
  else{
      alert("Enter Integer only")
  }

  

}