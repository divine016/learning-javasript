//need to include stuff from ubuntu.

//using recursion to define the power code
function power(base, exponent){
    if(exponent == 1){
        return base;
    }
    return base * power(base, exponent - 1);
} 
//the issue with recursion is that it is slow

// A function that returns the smallest of two numbers
function min(x, y){
	if(x > y){
    	return y;
    }else{
    	return x
    }
}

console.log(min(10, 1));
// → 0
console.log(min(5, -10));
// → -10

//this code is to determine if a number is even or odd. find the discription of the code in the readme file

function isEven(numb){
	if(numb == 0){
    	return true;
    }
  	else if(numb == 1){
    	return false;
    }
    else if(numb < 0){
    	return isEven(-numb);
    } else{
    	return isEven(numb -2);
    }
  
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-3));
// false

//exercise 3

//this code is to first count the number of Bs in a  string then the second is to 
//count any symbol choosen by the user in the string

function countBs(str){
    let count = 0;
      for(let i = 0; i < str.length; i++){
          if(str[i] == 'B'){
              count ++;
          }
      }
    return count;
  }
  
  function countChar(str, symbol){
    let count = 0;
      for(let i = 0; i < str.length; i++){
          if(str[i] == symbol){
              count ++;
          }
      }
    return count;
  }
  console.log(countBs("BBBBBC"));
  // → 2
  console.log(countChar("kakkerlak", "a"));
  // → 4