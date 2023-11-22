console.log('hello world');
console.log('hello world');
console.log('hello world');

//adition substraction division multiplication exponencial modulus
//unary opeartors
let nr1 = 4;
nr1++;
console.log(nr1);//5
let nr2 = 4;
nr2--;
console.log(nr2);//3
//postfix unary operator nr++
//prefix unary operator ++nr

let nr = 2;
console.log(nr++); //2
console.log(nr); //3
let nr4 = 2;
console.log(++nr4);//3

/* Practice exercise 2.3
Write some code to calculate the hypotenuse of a triangle using the
Pythagorean theorem when given the values of the other two sides.
The theorem specifies that the relation between the sides of a right-
angled triangle is a2 + b2 = c2.*/

//assignment operator =

//comparison

//=== checks for the datatype and also the value
//==, ===, !=, !==, >, <, >=, <=
//logical operators we have and or not && || !

/*Chapter project
Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to
kilometers, and log the value in kilometers in the following format:
The distance of 130 kms is equal to 209.2142 miles
For reference, 1 mile equals 1.60934 kilometers.*/

/*
BMI calculator
Set values for height in inches and weight in pounds, then convert
the values to centimeters and kilos, outpuing the results to the
console:
1 inch is equal to 2.54 cm
2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to
weight (in kilos) divided by squared height (in meters). Output the
results to the console.
*/
 

//OBJECTS AND ARRAYS
// You can look at objects as a collection of properties and methods.
// Properties can be thought of as variables
let arr4 = [10];
let arr3 = new Array(10);
// if we use new array to create an array then it create as in the line above it w
//would create an empty array of 10 elements 
let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
//accesing elements starts at index 0
//what do you think this two lines would print? 
console.log(arr[3]);
console.log(arr[-1]);
//overwritting elemts we use the index to do so 
//if we create an array with const we can change the values but we canno t chnge the array it self
//the lenght property is there to give us the length of the Array.
let numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length); //6
console.log("numbers", numbers); //numbers [ 12, 24, 36, <2 empty items>, 48 ]

//aRRAY METHODS
//NOW METHODS IN JAVASCRIPT PERFORM AN ACTION ONCE THEY ARE CALLED
//push method is used to add an element at the end of an array

//the push method return the length of the new array

let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine")
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(lengthOfFavoriteFruits)
console.log(favoriteFruits);

//SPLICE METHOD id used to add elemts ata specific index of an array
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);
//splice takes 3 parameters the first parameter is  start index, 
//the second is the number of elemts we want to delete starting from the start index then the last is the elements we want to input.

//concat() method is used to join 2 arrays.
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7); //[ 1, 2, 3, 4, 5, 6 ]
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//deleting elmts
//POP method i used to remove elements and the end of an array

//we use shift to rmove elements from the start of an Array.apply
console.log(arr8.splice(1, 3)); //[ 1, 5, 6, 7, 8, 9 ]
console.log(arr8);
//we can also use delete but it is not a method
console.log(arr8.shift());

console.log(arr8.unshift(3)); //returns the length of the array
console.log(arr8);
//console.log(delete arr8[0]); //[ <1 empty item>, 6, 7, 8 ]
 //finding elements using the find
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2); //6 undefined
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);

let findIndex3 = arr8.indexOf(6, 2); //the second is to tell it the index at which it should start looking the number 6 in the array.
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog"); //4 because that is the last occurence of dog

//SORTING
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort(); //[ 'Alicia', 'Bert', 'Fatiha', 'James', 'Maria' ]]
//reverse method is there to reverse an array

let newArr = [];
newArr.push('milk', 'Bread', 'Apples')
console.log(newArr)
newArr.splice(1,1, 'Bananas', 'Egg')
console.log(newArr)
console.log(newArr.pop())
newArr.sort();
console.log(newArr)
let milk = newArr.find( e => e === 'milk');
console.log(newArr.indexOf(milk))

//multi dimensional arrays.
let arrOfArrays = [[1, 2, 3], 
                   [4, 5, 6], 
                   [7, 8, 9]];
let value = arrOfArrays[1][1]
console.log(value)
let value1 = arrOfArrays[0][1]
let value2 = arrOfArrays[2][2];
arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
//getting the middle element
let middleValue = arrOfArraysOfArrays[1][1][1];