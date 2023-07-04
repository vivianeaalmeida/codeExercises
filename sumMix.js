function sumMix(x){
let sum = 0;
let newArray = [];
let inteiro = 0;
  
    for(let i = 0; i < x.length; i++){
      inteiro = parseInt(x[i]);
      newArray.push(inteiro);
    }

    for(let i = 0; i < newArray.length; i++){
      sum += newArray[i];
    }

    return sum;
  }

/*
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}


best practice:
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

*/


