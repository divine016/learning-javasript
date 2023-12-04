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
//console.log("Not available here:", y);

//output

//Available here: I'll return
//Outside the function: I'll return
//ReferenceError: y is not defined

//a block is defined by 2 curly braces(openning and closing) { } the let is block scoped while the var is function scoped.
//variables declared with let cannot be used befor being defined even within the same block.
//when we use a variable before defining it we simply get undefined
//const is also block scope

//global scope
let globalVar = "Accessible everywhere!";
console.log("Outside function:", globalVar);
function creatingNewScope(x) {
console.log("Access to global vars inside function." , globalVar);
}
creatingNewScope("some parameter");
console.log("Still available:", globalVar);

//imediatly invoked function expressions it is anonymous ie doesnt have a name and self executing.

(function () {
    console.log("IIFE!");
}) ();                    // (); is to invoke the function created

//arrow functions
( () => {
    console.log("run right away");
} ) ();

//Practice exercise 6.5
let val = 1000;
( () => {
    let val = 500;           //local scope
    console.log(val);
} ) ();

let end = ( function () {
    let val = "Ferdinand";
    return val
} ) ();

console.log(val);
console.log(end);

( (param) => {
    console.log(`My name is ${val}`);
} ) ("Ferdinand");

function logRcursive (nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
        logRcursive (nr - 1);
    } else {
        console.log("done with recursive")
    }
    console.log("ended function:", nr)
}

logRcursive(3);

//Practice exercise 6.6

function factorial (number) {
    if (number == 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(3));

//nested funtions

function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
    }
}
    doOuterFunctionStuff(2);

//Practice exercise 6.7

let start = 10;
function countDown1(val) {
    console.log(val);
    if (val < 1) {
        return;
    }
    return countDown1(val - 1);
}

countDown1(start);

function countDown2(val) {
    console.log(val);
    if (val > 0) {
        val--;
        return countDown2(val);
    }
    return;
}
countDown2(start);

//anonymous function

//a function can be created without a name if it is being assigned to a variable.

let functionVariable = function () {
    console.log("Not so secret though.");
};

//Practice exercise 6.8
let func = function (arg) {
    console.log(arg);
}
func("i am a function in a variable");

//function callbacks
function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log("Inside doFlexibleStuffFunction.");
}
doFlexibleStuff(functionVariable)

let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
};
setTimeout(youGotThis, 1000);     ///get executed once after 1sec
// setInterval(youGotThis, 2000);   keeps executing every 2secs untill the program is killed

//Chapter 6 projects

/* Create a recursive function
Create a recursive function that counts up to 10. Invoke the function
with different start numbers as the arguments that are passed into
the function. The function should run until the value is greater than
10.*/

//solution
function recursive1(start) {
    if (start < 10){
        console.log(start);
        recursive1(start + 1);
    } 
        return;
}
recursive1(1);

/*Chapter projects
Create a recursive function
Create a recursive function that counts up to 10. Invoke the function
with different start numbers as the arguments that are passed into
the function. The function should run until the value is greater than
10.
Set timeout order
Use the arrow format to create functions that output the values one
and two to the console. Create a third function that outputs the value
three to the console, and then invokes the first two functions.
Create a fourth function that outputs the word four to the console
and also use setTimeout() to invoke the first function immediately
and then the third function.
What does your output look like in the console? Try to get the
console to output:
Four
Three
One
Two
One */

//solution

const one = () => {console.log("one")}
const two = () => {console.log("two")}
const three = () => {
    console.log("three") 
    one() 
    two()
}
const four = () => {
    console.log("four");
    setTimeout(one, 1000);
    three();
}






/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
















