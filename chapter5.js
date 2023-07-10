//higher other functions are filter and map
//how the filter function works internally 
let array = [{
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "rtl",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
  },                
  {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
  },
  {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
  }];

//filter method
function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
  }
  
  console.log(filter(array, script => script.living));
//answer
  //[{
// name:	"Coptic"
// ranges:	[[994, 1008], [11392, 11508], …]
// direction:	"ltr"
// year:	-200
// living:	true
// link:	"https://en.wikipedia.org/wiki/Coptic_alphabet"
// }]

//that is how rhe filter function works 
//now shorter version
console.log(array.filter(s => s.direction == 'rtl'))

//map method
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
      mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = array.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
//answer
//['coptic']

///reduce method
//function that takes 3 parameters
function reduce(array, combine, start){
    let current = start; // current is equal start
    //for each each element in the array it should combine both the current and the element. the combine would be passed to the dfunction
    for (let element of array){
        current = combine(current, element);
    }
    return current; //return the final combination
}

console.log(reduce[1, 2, 3, 4], (a, b) => a + b, 0)
//10

console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// → 10

//exercise1
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));
//[1, 2, 3, 4, 5, 6]

//exercise2
// Your code here.
function loop(value, test, update, body){
	for(let i = value;test(i); i = update(i)){
    	body(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//exercise3
function every(array, test) {
    // Your code here.
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(test(array[i])) count +=1;
      else count =count;
    }
    if(count === array.length)return true; 
    else return false;
  }
  
  function every2(array, predicate) {
  
    return !array.some(element => !predicate(element));
  }
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  //exercise 4 didnt understand so heres the solution
  function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl