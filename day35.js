//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//explanation in my book
function destroyer(arr) {
    const elementsRemoved = []; //empty aray
    const args = Array.prototype.slice.call(arguments, 1) //removes the arguments in the function and return them as a new array
    for (let i = 0; i < arr.length; i++){
      let removeElement = false // element to be removed set as false
      for (let j = 0; j < args.length; j++){
        if(args[j] === arr[i]){
         removeElement = true ; // if both are equal then set it to true 
        }
      }
      if(!removeElement){
        elementsRemoved.push(arr[i]);//If the value at the current index is equal in both arrays, let removeElement to true remove it from arr If the value is not flagged for removal, add it the the filteredArray
      }
    }
    return elementsRemoved;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // return [1, 1]

  //function that taks two paramters and checks if the objext found in the second argument is found in the first and returns an array containing the lements found in second argument.
function whatIsInAName(collection, source) {
    const arr = [];
      for (let i = 0; i < collection.length; i++)
        {
        let found = true;
        for (const sourceProp in source) {
          if (collection[i][sourceProp] !== source[sourceProp]) {
            found = false;
            break;
          }
        }
        if (found) arr.push(collection[i]);
            }
      return arr;
}
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    return str
    .split(/\s|_|(?=[A-Z])/) //SPLITS IF IT MEETS A LOWER CASE A N UNDERSCORE AND IF IT S FOLLOE=WED BY A CAPITAL LETTER
    .join("-") // JOINS IT WITH A HIPPHE
    .toLowerCase() // THEN CONVERT TO LOWER CASE
    ;
  }
  
  console.log(spinalCase('This Is Spinal Tap'));