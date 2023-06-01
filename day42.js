//Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
    //lets first seperate the string into an array
    let arrStr = str.split(" ");
    let decimal = []
    let word = []
    //convert each character in the array into decimal
    for(let i =0; i < arrStr.length; i++){
      decimal.push(parseInt(arrStr[i], 2));
    }
    //let now convert from decimal to letters
    for(let i = 0; i < decimal.length; i++){
      word.push(String.fromCharCode(decimal[i]));
    }
    return word.join('');
    
  }
  // wrote a function that checks if the second argument passed is truthy all true in the first argument which is an object
  function truthCheck(collection, pre) {
    //sets a counter to 0
    let counter = 0
    //goes throught each object in the array
    for(let i = 0; i < collection.length; i++){
      //checks if the value held by the 2nd argument passed at the truthCheck is true then increase the counter by one.
      if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
        counter ++;
      }
    }
    //verify if the counter is equal to the collection length.
   return counter == collection.length;
    //if the counter number is less than the collection length it means that there is one false value then it would increment the counter. 
  }
  //to make it look good lets first verify if pre is a property in the object

  function addTogether() {
    //the first and second are both arguments passsed int the function
    const [first, second] = arguments;
  //creating a function that would be returned id the length of the argument is one 
    function addSecond(second) {
        //checking if the argument is a number and suming the two arguments
      if (typeof (second) === "number") return first + second;
    }
  //checking the if the first one is a number
    if (typeof (first) === "number") {
        //if its a number but only one argument is given return a function to ask for the next
      if (arguments.length === 1) return addSecond;
      if (arguments.length === 2) return addSecond(second);
    }
  }
  //dont understand