function solution(str){
   let result = [];
  
  for (let i = 0; i < str.length; i += 2) {
    let pair = str[i];
   
    if (str[i + 1]) {
      pair += str[i + 1];
    } 
    else {
      pair += '_';
    }
    
    result.push(pair);
  }
  return result;
}