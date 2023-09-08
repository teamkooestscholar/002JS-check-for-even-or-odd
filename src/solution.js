function EvorOdd(num){
  const result  = (num % 2 ==0)? "Even" : "Odd";
  return result;               
};

function PstvrNgtv(num){
  const sgn = (num >0)? "Postive" :"Negative";
  return sgn;
}

while(true){
  const numm = parseFloat(prompt("Enter a number: "));

  if(!isNaN(numm)){
      const rslt = EvorOdd(numm);
      const sgnn = PstvrNgtv(numm);
      alert("The number is " + (sgnn)+" "+(rslt));
  }
  else{
      alert("Enter Integer only");
  }
}