function sum(a, b) {
  return a + b;
}

function multiply(a, b){
    return a*b;
} 

function subtract(a, b) {
  if(a>b) 
    return a-b;
  else 
    return b-a;
}

//function square(x) {
//  return x*x;
//}


module.exports = {
    sum, 
    multiply
};