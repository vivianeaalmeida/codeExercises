function sumMul(n,m){
  
  let sum = 0;
  
  if(n <= 0 || m <= 0 || n == undefined || m == undefined){
    return "INVALID";
  }
  
  for(let i = n; i < m; i++){
    if(i % n == 0){
      sum += i;
    }  
  }
    return sum;
}
