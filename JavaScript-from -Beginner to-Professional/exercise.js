// let myCar = {
//     weight:1000,
//     color: 'white',
//     type: 'toyota',
//     year: '2022'
// }

// myCar.color = 'red';
// console.log(myCar)
// myCar.wheels = 'bullet proof'
// let weight1 = myCar.weight;
// console.log(weight1);
// let company ={
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };
// console.log(company.address);

// let company1 = {
//     companyNmae :  'Elvis',
//     activities : ['sells', 'retails', 'buys'],
//     branches : [
//         {
//             street: "2nd street",
//             number: "123",
//             zipcode: "33116",
//             city: "Buea",
//             state: "south west"
//         },
//         {
//             street: "3nd street",
//             number: "456",
//             zipcode: "33116",
//             city: "yaounde",
//             state: "centre"
//         }
//     ],
//     yearOfCreation : 2020
// }
// let city = company1.branches[1].city;
// console.log(city)

//logic
let rain = true;
if (true){
    console.log("** Taking my umbrella when I need to go outside **");
} 
else{
    console.log("** I can leave my umbrella at home **");
}  


//if a number is a ultiple 3 we print fizz
//if the nmber is a multible of 5 we print buzz
//if the number is a multiple of 3 and 5 we print fizzbuzz
//if the neither a multiple of 3 or 5 we print the number

let arr2= []
//expression ? statementForTrue : thiPartIsGointToBeExecited

let age2 = 24
age2 < 18 ? console.log("denied") : console.log("allowed");

//finding the sum of naturals numbers that are multiples of 3 or 5 bellow 1000


let count = 0;
let arr1 = [];

for (let number = 3; number < 1000; number ++){
    if (number % 3 == 0 || number % 5 == 0){
    arr1.push(number)
    count += number 
    }
   
}
console.log(arr1)
console.log(count);

/*Collatz Conjecture
The Collatz conjecture in mathematics asks whether repeating two simple arithmetic operations will eventually transform every positive integer into one. It concerns sequences of integers in which each term is obtained from the previous term as follows:
if the previous term is even, the next term is one half of the previous term.
If the previous term is odd, the next term is 3 times the previous term plus 1.
The conjecture is that these sequences always reach 1, no matter which positive integer is chosen to start the sequence.
You are given an integer n and you should print to the console all the values that n takes throughout the Collatz Conjecture.*/
//solution
let n = 10;
let x;
console.log(n);
while (n != 1){
  if(n % 2 == 0){
    x = n / 2;
  } else {
    x = (n * 3) + 1;
  }
  n = x;
  console.log(n);
}

//the next solution problem is in the readme file. the image is named day2Ques2
let arr = [1, 2, 3, 3, 4, 4, 5, 6, 7];
let value = 3;
let output;
for (var i = 0; i < arr.length; i++) {
   if (arr[i] < value && arr[i+1] >= value) {
     output = i+1;
     console.log(`outpu :${output}`)
     i++;
  }
}

//hurdle jump
function hurdleJump (arr, value) {
  let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > value) {
        return false;
      } 
      count ++;
      if (count == arr.length){
        return true
      }
    }
}
console.log(hurdleJump([1,2,1], 1))