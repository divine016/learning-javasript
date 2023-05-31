//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
const arr = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function rot13(str) {
  //created accumulator
  let word = '';
  
  //loop through the string
  for(let i = 0; i < str.length; i++){ 
    if(arr.includes(str[i]) === false){
      word += str[i];
    }
    else{
      const index = arr.findIndex((c) => c == str[i])
      word += arr[index + 13] || arr[index - 13];
    }
}
  return word;
}

console.log(rot13("SERR PBQR PNZC")); //give FREE CODE CAMP

//telephone number validator
function checkNumber (str) {
    var regexEpr = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]\d{4}$/
    return regexEpr.test(str)
}

//cash register
