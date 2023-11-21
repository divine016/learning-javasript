//there are different types of loops while loops do while loops for loops 
//for in loops for of loops


//while loops: as long as the expresion equates true a certain block of code is executed.

let i = 0;
while(i < 10){
    console.log(i);
    i += 2;
}

//searching for a value in an array

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
if (someArray[0] === "Divine") {
    console.log("Found her!");
    notFound = false;
} else {
    someArray.shift();   
}
if(someArray.length == 0)
console.log("not Found her!");
}
//printing out the fibonacci sequence of length 25 into an array
let number = 0
let number2 = 1
let temporary;
let fibonacciArr = []
while(fibonacciArr.length < 25){
    fibonacciArr.push(number) 
    temporary = number + number2;
    number = number2
    number2 = temporary
}
console.log(fibonacciArr)

//practice exercise the guessing game. guessing a number to see if its right or wrong.
let randnumb = Math.random() * 5;
let rounded = Math.floor(randnumb)
console.log(rounded)
let trackingVar = false;

// while(!trackingVar){
//     //let usr = prompt('PLEASE ENTER A NUMBER between 1 and 5');
//     usr = Number(usr)
//     if (usr === rounded) {
//         trackingVar = true;
//         console.log('you guessed right');
//     } else{
//         console.log('please try again');
//     }
// }

//do while loops
//it need to be executed atleast once.
// do {
//     // code to be executed if the condition is true
//     } while (condition);
//exerciese
//In this exercise, we will create a basic counter that will increase a
//dynamic variable by a consistent step value, up to an upper limit.

let counter = 0;
let step = 2;
do {
    console.log(counter);
    counter += step;
} while(counter <= 100)

//for loops
//for (initialize variable; condition; statement) {
    // code to be executed
//  }

//pratice exercise 5.3

let myWork = [];
for(let i = 0; i <= 10; i++){
    let stat = i % 2?true:false;
    let obj = {
        name: `Lesson ${i}`, status: stat
    }
    myWork.push(obj)
}
console.log(myWork)

//nested loops
let arrOfArrays = [];
for (let i = 0; i < 3; i++){
arrOfArrays.push([]);
for (let j = 0; j < 7; j++) {
arrOfArrays[i].push(j);
}
}
console.table(arrOfArrays);

//creating a tabular data
let myTable = [];
let row = 5
let col = 9
let counter1 = 0;
for(let i=0; i<row; i++){
    let tempTable = [];
    for(let j=0; j<col;j++){
        counter1 += 1;
        tempTable.push(counter1);
    }
    myTable.push(tempTable)
}
console.table(myTable)


//loops and arrays
//the stattsWith methos checks if a string starts witj a particular letter or phrase.

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i ++){
if(names[i].startsWith("M")){
delete names[i];
continue;
}
names[i] = "hello " + names[i];
}
console.log(names);

//outputttt

// [
// 'hello Chantal',
// 'hello John',
// <1 empty item>,
// 'hello Bobbi',
// 'hello Jair'
// ]

//pratice exercise 5.5