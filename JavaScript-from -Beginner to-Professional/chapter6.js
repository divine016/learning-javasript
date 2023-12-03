function sayHello () {
    //let you = prompt("What's your name? ");
    //console.log("Hello", you + "!");
}

// variables containing functions

let varContainingFunction = function () {
    let varInFunction = "I'm in a function.";
    console.log("hello there " + varInFunction);
}
varContainingFunction();

//Practice exercise 6.1

function addNumbers(param1, param2) {
    return param1 + param2;
}

let var1 = 4;
let var2 = 3;
console.log(addNumbers(var1, var2));
addNumbers(3, 6);

//Practice exercise 6.2

let arr = ['running', 'jumping', 'singing', 'sleeping', 'matching'];
function askUser (){
    //let question = prompt('please enter a name');
    let number = Math.random() * 5;
    let question = 'matew';
    console.log(question + ' is ' + arr[Math.floor(number)]);
} 
askUser();

//Practice exercise 6.3 creating a basic calculator

let value1 = 3;
let value2 = 2;

let operator = '-';
function calculate(value1, value2, operator = '+'){
    if (operator == '+'){
        return value1 + value2;
    } else {
        return value1 - value2;
    }
}

calculate(value1, value2, operator );

//arrow functions rest parameter and spread operator

//general structure (param1, param2) => body of the function

//one parameter paran => { body }

//no parameter () => { body }

function doingStuff(x) {
    console.log(x);
}

let doingArrowStuff = x => console.log(x);
doingArrowStuff("Great!");

let addTwoNumber  = (x, y) => console.log(x+ y);
addTwoNumber(5, 6)

let sayHi = () => console.log('hi!');
sayHi();

const arr1 = ["squirrel", "alpaca", "buddy"]
arr1.forEach(e => console.log(e));

//spread operator

let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];
// ['JavaScript', 'is', 'so', 'much', 'fun', 'and', 'very', 'powerful']

function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
    }
    
let arr2 = [5, 9];
let arr3 = [6, 7];

addFourNumbers(...arr2, ...arr3); //which gives
addFourNumbers(5, 9, 6, 7); //27

//rest parameter

function someFunction(param1, ...param2) {
    console.log(param1, param2);
    }
someFunction("hi", "there!", "How are you?");

// output
//hi [ 'there!', 'How are you?' ]

let result = addTwoNumber(4, 5); // 9 because the function has a console.log in it
console.log(result); //underfined because there is no return statement.

//rewriting the function gives

function addFourNumbers (x, y) {
    return x + y;
}
// Practice exercise 6.4 modifying the calculator

let finalArr = [];
for (let i = 0; i < 10; i++) {
    let a = i * 5;
    let b = i * i;
    let result = calculate(a, b)
    //let result = (a, b) => {return a + b};
    finalArr.push(result);
    
}
console.log(finalArr)

//variable scope in functions.

//variables defined inside the function are not available outside the function too.
//with the returnstatemen the value of a variable can be caught and return outside the function. note that the key word here is return and value not the variable in ITS self.

function testAvailability () {
    let y = "I'll return";
    console.log("Available here:", y);
    return y;
}

let z = testAvailability();

console.log("Outside the function:", z);
console.log("Not available here:", y);

//output

//Available here: I'll return
//Outside the function: I'll return
//ReferenceError: y is not defined

//a block is defined by 2 curly braces(openning and closing) { } the let is block scoped while the var is function scoped.























