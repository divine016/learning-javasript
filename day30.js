//The function should return a new array containing 
//the squares of only the positive integers (decimal numbers are not integers) 
//when an array of real numbers is passed to it
const squareList = arr => {
    // Only change code below this line
    return arr.filter(num => num > 0 && num % parseInt(num) === 0).map(num => (num * num));
    // Only change code above this line
  };
  
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
//the answers is [25, 9] 

//sort
//The sort method sorts the elements of an array according to the callback function.

For example:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
//output would be [1, 2, 3, 4, 5]\

//exercise
function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort(function(a, b){
      return a === b? 0: a < b? -1: 1;
    })
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
 
  return [].concat(arr).sort(function(a, b){
   return a === b? 0: a < b? -1: 1
  })

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));