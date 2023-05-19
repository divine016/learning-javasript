//using regular expressions and also the split method to split string in to an array of that string
function splitify(str) {
    // Only change code below this line
      return str.split(/\W/);
  
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));

  function sentensify(str) {
    // Only change code below this line
    let arr = str.split(/\W/)
    return arr.join(' ')
  
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));