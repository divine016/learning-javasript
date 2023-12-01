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
/*
let counter = 0;
let step = 2;
do {
    console.log(counter);
    counter += step;
} while(counter <= 100)
*/


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
let gridArr = [];
let numberOfCells = 64;
let counter2 = 0;
let row1;
for (let i = 0; i < numberOfCells + 1; i++){
    if (counter2 % 8 == 0){
        if (row1 != undefined){
            gridArr.push(row1);
        }
        row1 = [];
    }
    counter2++;
    let temp = counter2;
    row1.push(temp);

}
console.table(gridArr);

//continuation of chaptr 5

//for of loop
//we use for of loops to loops in an array

//syntax of a for of loop
/* 
let arr = [some arr];
for (let var of arr){
    //code to be executed
    //value of variableName gets updated every iteration
    // all values of the array will be variableName once
}
*/

//example
let arrNames = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let names of arrNames){
    console.log(names);
}

//practice 5.6
let incrementingArr = [];
for (let i = 0; i< 10; i++){
    incrementingArr.push(i);
}
console.log(incrementingArr);
for (let numb of incrementingArr){
    console.log(numb);
}

//loops and objects

//for in loops

/* The for in loop is
somewhat similar to the for of loop. Again here, we need to specify
a temporary name, also referred to as a key, to store each property
name in*/

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
    };
// let pig = car[make] what could make a property not print out due to the bracket sign
for (let prop in car){
    //console.log(prop);
    //console.log(car[prop]);
}

//practive 5.7
let obj = {
    food : 'rice',
    fruits : 'orange',
    color : 'black'
};
let arr = ['rice', 'drink', 'money'];
for (let prop in obj){
    console.log(prop);
    console.log(obj[prop]);
}

for (let prop in arr){
    console.log(prop);
}

//convrting object values to an array we use line below
//Object.keys(nameOfObject)
let arrKeys = Object.keys(obj);
console.log(arrKeys);

//looping over the names of an object of

for(let key of Object.keys(car)) {
    console.log(key);
}    

//looping over the values of an object
for(let key of Object.values(car)) {
    console.log(key);
    }

/*
More interesting is how to loop over both arrays at the same time
using the for of loop. In order to do so, we will have to use
Object.entries() .
*/
let arrEntries = Object.entries(car);
console.log(arrEntries)

for (const [key, value] of Object.entries(car)) {
    console.log(key, ":", value);
    }


    let cars = [
        {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
        },
        {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
        },
        {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
        },
        {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
        }
    ];
//use of break. ends the current loop that is it stops looking.
for (let i = 0; i < 10; i++){
    console.log(i);
    if( i === 4){
        break;
    }
}

for (let i = 0; i < cars.length; i++){
    if( cars[i].year >= 2021){
        if (cars[i].color === "black"){
            console.log("I have found my new car:", cars[i]);
            break;
        }
    }
}

//continue

/* continue can be used to
move on to the next iteration of the loop. It quits the current iteration
and moves back up to check the condition and start a new iteration. */

for (let car of cars){
    if(car.color !== "black"){
        continue;
    }
    if (car.year >= 2020) {
        console.log("we could get this one:", car);
    }
}

let v = 1;
while (v < 10) {
v++;
if ((v-1) % 2 === 0){
continue;
}
console.log(v-1);
}

// Practice exercise 5.8
let sentence =  "";
let skip = 5;
for (let i = 0; i < 10; i++){
    if (i == skip){
        break;
    }
    sentence += i;
}
console.log(sentence)

// labelled loops

// to label a loop we need to give the name of the loop then use :
// e.g 
// then we can now use this label to break out of an outer inside an insider loop.

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
]

//example

outerLoop:
for(let group of groups) {
    for (let name of group){
        if (name.startsWith('M')){
            console.log(name);
        }
        break outerLoop;

    }
}

//chaerter project

//question

/* Math multiplication table
In this project, you will create a math multiplication table using
loops. You can do this using your own creativity or by following
some of the following suggested steps:
1. Set up a blank array to contain the final multiplication table.
2. Set a value variable to specify how many values you want to
multiply with one another and show the results for.
3. Create an outer for loop to iterate through each row and a temp
array to store the row values. Each row will be an array of cells
that will be nested into the final table.
4. Add an inner for loop for the column values, which will push
the multiplied row and column values to the temp array.
5. Add the temporary row data that contains the calculated
solutions to the main array of the final table. The final result will
add a row of values for the calculations. */

//solution
let mulTable = [];
let value = 10;
for (i = 0; i <= 10; i++ ){
    let temArr = [];
    for (j = 0; j <= 10; j++ ){
        temArr.push(i * j )
    }
    mulTable.push(temArr)
}
console.table(mulTable);













/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */


























