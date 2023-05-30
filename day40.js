//palindrome checker that removes all non alphanumeric characters and checks if the reverse string is equal to the original str
function reverse(str){
    let reverse = ''
      for(let i = str.length -1; i >= 0; i--){
          reverse += str[i];
          console.log(reverse)
      }
       return reverse
  }
console.log(reverse('tree'))
function palindrome(str) {
    const strNew = str.toLowerCase().match(/[a-z0-9]/g);
    let compareStr = strNew.join('')
    let reverseStr = strNew.reverse().join('');
    
    if(compareStr === reverseStr){
     return true;
    } else{
    return false
        }  
  }
  console.log(palindrome("My age is 0, 0 si ega ym."));
//roman numeral converter
function convertToRoman(num) {
    const lookUp = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I:1
    }
    let accum ='';
    for(const key in lookUp){
      const keyValue = lookUp[key];
      while(keyValue <= num){
        num = num - keyValue;
        accum = accum + key 
      }
      console.log(key)
    }
   return accum;
  }