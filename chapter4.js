//numbers strings and booleans are the roots datastructures are built from.

//the binary operation "in" when apliead to a string and an objects teels you whether the string is found in the object.
//Object.keys returns an array of string displaying the keys found in an object.

//example
const obj = {
	y: 0,
    z: 12
};
console.log(Object.keys(obj));
//["y", "z"]

//Object.assign gives all the properties of an object to another.

//example
let objA = {a : 1, b : 2};
Object.assign(objA, {b: 3, c:4})
console.log|(objA);
// {a: 1, b: 3, c: 4}

//corelation is either positive or negative.
//if positive then if you know one then you must know the other negative means if one is increasing the other is reducing.
//values isually ranges from -1 - 1

//serializing data means converting it  to a dlat descrition. a popular way to do that is called JSON. which mean javascript object notation.
//it is a similar way of writing objects and arrays in js.

//representation of JSON format
{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}

//usage of parse and stringify

let objB = {squirrel: false, event: ['work', 'weekend']}
let string = JSON.stringify(objB);

console.log(string);
//→ {"squirrel":false,"events":["work", "weekend"]}

console.log(JSON.parse(string).events);
//→ ["work", "weekend"]

//EXERCISE
//WRITE A FUNCTION THAT GIVE THE RAMGE OF TWO NUMBERS INCLUDING THOSE NUMBERS
function range(start, end){
    let array = [];
      if (start < end){
        for (let i = start; i <= end; i++){
        array.push(i);
      }
      return array;
    }else{
      for(let i = start; i >= end; i--) array.push(i);
      return array;
    }
}

//MODIFY THE RANGE FUNCTION SUCH THAT IF A STEP IS GIVEN THEN IT USES THE STEP IF NOT IF GIVES THE NORMAL RANGE

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }

//write a function that sums up all the numbers in an array
function sum(array){
	let sum = 0;
  for (let i = 0; i < array.length; i++){
  	sum += array[i];
  }
  return sum;
}

//reverse an array
function reverseArray(arr){
    let newArr = [...arr]
    let array = [];
      for(let i = newArr.length -1; i >= 0; i--){
         array.push(arr[i]);
       }
    return array;
  }

//return a list
function arrayToList(arr){
    let obj = {}; //empty object
    let size = arr.length; //determine the size of the array
      
    for(let i = 0; i <= size - 1; i++){
      left = arr.slice(1);
      let lSize = left.length

      //console.log(lSize)
        obj.value = arr[i] // the values should be equal to the elemnt at the first position
             if (lSize == 0) {
               obj.rest = null
             } else{
               obj.rest = arrayToList(left);
             }
    
      return obj;
    }
  }
  
  console.log(arrayToList([10, 20, 30]))
  //{ value: 20, rest: { value: 30, rest: null } } }
