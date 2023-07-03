/*the break stetement makes it possible to jump out of the loop
continue is similar to break but when a continue satement is encountered it jumps out of the current executing body and does the next body of iteretion.
if you have a statement that has many if elseif then we can use a switch to represent that.
the code below breaks out of a loop*/
//*current a variable that increments
//*a program that looks for a number that is greater thn 7 and divisible by 7
for(let current = 20; ; current+=1){
    if(current % 7 === 0){
        console.log(current);
        break;
    }
}//output:21

//if elseif statements
if (x == "value1") action1();
elseif (x == "value2") action2();
elseif (x == "value3") action3();
else defaultAction2();
//the syntax of a switch is as follows

switch(prompt("what is the weather like today?")){
    case "rainy":
        console.log("remember to bring your umbrella");
        break;
    case "sunny":
        console.log("Dress lightly");
        break;
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("unknown weather");
        break;
}

//chapter2 exercises
/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

//code
let symbol = ""; //you define the symbol to be an empty string
for (let i = 0; i < 7; i++){
  symbol += "#"; //each time the loop increments it adds # to it and print the current value of the symbol.
  console.log(symbol);
}

//problem 2
/*Write a program that uses console.log to print all the numbers from 1 to 100,
 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
 divisible by 5 (and not 3), print "Buzz" instead.
 When you have that working, modify your program to print "FizzBuzz" 
 for numbers that are divisible by both 3 and 5 
 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

//code
for (let i = 0; i <= 100; i++){
    if((i % 5 == 0) && (i % 3 == 0) ){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

//problem 3
/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:*/

//code

//this code can be modified by dib-ivng a variable known as the size where the user gets to input he six=ze of the chessboard
//alternative let size - 19
let final = "";

/* let height = prompt("please enter the height of the chess board");
let width = prompt("please enter the width of the chess board"); */
for (let i = 0; i < 8; i++){
	for (let j = 0; j < 8; j++){
    	if ((i+j) % 2 == 0){
         final += symbol
          
        }
    	else{
        	final += " "
        }
    }
  final += "\n"
}
console.log(final)
