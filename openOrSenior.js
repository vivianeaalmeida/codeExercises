function openOrSenior(data){
  
  let arrayResult = [];
  
  for(let i = 0; i < data.length; i++){
      
        if(data[i][0] >= 55 && data[i][1] > 7){
          arrayResult.push("Senior");
        } else {
          arrayResult.push("Open")
        }
      }
    
      return arrayResult;
}
  
  
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
