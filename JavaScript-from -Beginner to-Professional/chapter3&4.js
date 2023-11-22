// Create an array containing three values: 1, 2, and 3.
// Nest the original array into a new array three times.
// Output the value 2 from one of the arrays into the console.

// Objects in javascript
let dog = { 
dogName: "JavaScript",
weight: 2.4,
color: "brown",
breed: "chihuahua",
age: 3,
burglarBiter: true
}

//how to acces object properties

// we could either use the dot or use the square brackets
let dogColor1 = dog["color"];
let dogColor = dog["color"]
console.log['dogColor']
//or
let dogColor2 = dog.color;

//updating an object
dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog)
//we can also work with variable to change the property values 
let variable = "age";
console.log(dog[variable]); 
/*Practice exercise 3.4
1. Create a new myCar object for a car. Add some properties,
including, but not limited to, make and model , and values for a
typical car or your car. Feel free to use booleans, strings, or
numbers.
2. Create a variable that can hold the string value color . This
variable containing a string value color can now be used to
reference the property name within myCar . Then, use the
variable within the square bracket notation to assign a new
value to the color property in myCar .
3. Use that same variable and assign a new property string value
to it, such as forSale . Use the bracket notation once again to
assign a new value to the forSale property to indicate whether
the car is available for purchase.
4. Output make and model into the console.
5. Output the value of forSale into the console*/

//objects and arrays

//objects in objects
//lets consider haveing a comapny and we want to have the details of that comapny

let company ={
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    yearOfEstablishment: 2021
};
//accesing a property on the object 
company.address.zipcode = "33117";
company["address"]["number"] = "100"

//the comapny might have many activities so we could replace the one activity by an array of activities.
company = { companyName: "Healthy Candy",
            activities: [ "food manufacturing",
              "improving kids' health",
              "manufacturing toys"],
            address: [{
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
          },
          {
            street: "1st West avenue",
            number: "5",
            zipcode: "75001",
            city: "Addison",
            state: "Texas"
          }],
            yearOfEstablishment: 2021
};

//to access the first city
console.log(company.address[0].street)

/* Practice exercise 3.5
1. Create an object named people that contains an empty array that
is called friends .
2. Create three variables, each containing an object, that contain
one of your friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console.
*/
/*project and inventory list 
In this project, you will implement a data structure for a product
catalog and create queries to retrieve data.
1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model,
cost, and quantity.
3. Add all three objects to the main array using an array method,
and then log the inventory array to the console.
4. Access the quantity element of your third item, and log it to the
console. Experiment by adding and accessing more elements
within your data structure
*/


/*Self-check quiz
1. Can you use const and update values within an array?
2. Which property in an array gives the number of items contained
in the array?
3. What is the output in the console?
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));
4. How do you replace the second element in an array myArr =
[1,3,5,6,8,9,15] with the value 4?
5. What is the output in the console?
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);
6. What is the output in the console?
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]).
*/

const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);

//logic statements.
//if else else if and switch statement tenary operators

//if *some condition is true*, then *a certain action will happen*, else
//*another action will happen*
//anything in the curly braces after the boolean would be transformed to boolean. ig true the code block following if statement is executed if false then the else statement is executed. the else statement is optional

let rain = true;
if(rain){
console.log("** Taking my umbrella when I need to go outside **");
} else {
console.log("** I can leave my umbrella at home **");
}

let hobby = "dancing";
if(hobby == "coding"){
console.log("** I love coding too! **");
} else {
console.log("** Can you teach me that? **");
}
//else if

/*
For example, take this statement, to determine what the ticket price
should be. If a person is younger than 3, then access is free, else if a
person is older than 3 and younger than 12, then access is 5 dollars,
else if a person is older than 12 and younger than 65, then access is
10 dollars, else if a person is 65 or older, then access is 7 dollars
*/

let cost = 0;
let message = '';
let age = 7;
if (age < 3){
    message = 'your age is lesser thank 3 years so you have a free entery'
} else if(age > 3 && age < 12){
    message = 'hey your ticket is 5$'
    cost = 5;
} else if (age > 12 && age < 65){
    message = 'hii your ticket fee is 10$'
    cost = 10
} else{
    message = 'tucket fee is 7$'
    cost = 7
}
console.log(message)
console.log('your total cost is ' + cost + '$')

/*
Practice exercise 4.2
1. Create a prompt to ask the user's age
2. Convert the response from the prompt to a number
3. Declare a message variable that you will use to hold the console
message for the user
4. If the input age is equal to or greater than 21, set the message
variable to confirm entry to a venue and the ability to purchase
alcohol
5. If the input age is equal to or greater than 19, set the message
variable to confirm entry to the venue but deny the purchase of
alcohol
6. Provide a default else statement to set the message variable to
deny entry if none are true
7. Output the response message variable to the console*/

//tenary operators
//expression ? statement for true : statement associated with false
//operand1? operand2:operand3
//if operand1 then operand2 else operand3

let age2 = 24
age < 18 ? console.log("denied") : console.log("allowed");
/*
practice exercie 4.3
 Create a Boolean value for an ID variable
2. Using a ternary operator, create a message variable that will
check whether their ID is valid and either allow a person into a
venue or not
3. Output the response to the console
*/

//switch statements.
//when evaluating more than 4 or five casses it is better to use a switch statement than to use an else if
//example
if ( activity = 'Get up' ){
  console.log( 'it is 6:30am' )
} else if ( activity  === "Breakfast" ){
  console.log( 'it is :00am' )
} else if( activity === "Drive to work" ) {
  console.log( "It is 8:00AM" );
  } else if( activity === "Lunch ") {
  console.log( "It is 12.00PM");
  } else if( activity === "Drive home ") {
  console.log( "It is 5:00PM" )
  } else if( activity === "Dinner ") {
  console.log( "It is 6:30PM" );
  }
//   switch(expression) {
//     case value1:
//       // code to be executed
//       break;
//     case value2:
//       // code to be executed
//       break;
//     case value-n:
//        // code to be executed   
//        break;
//     default:
//         // code to be executed when no cases match
//         break;
// }

/*
  You can read it in your head as follows: If the expression equals
value1 , do whatever code is specified for that case. If the expression
equals value2 , do whatever code is specified for that case, and so on.
*/
//rewriting the above code using switch gives
switch(activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot determine the current time.");
    break;
  }

//if we do not have a break then the orther cases would be executed too
//this would hapen from the point where it fonds a true value. Also switch staements checks bothe the datatype and the value

/*
Practice exercise 4.4
In this exercise, we'll create a Magic 8-Ball random answer generator:
1. Start by seing a variable that gets a random value assigned to
it. The value is assigned by generating a random number 0-5, for
6 possible results. You can increase this number as you add
more results.
2. Create a prompt that can get a string value input from a user
that you can repeat back in the final output.
3. Create 6 responses using the switch statement, each assigned to
a different value from the random number generator.
4. Create a variable to hold the end response, which should be a
sentence printed for the user. You can assign different string
values for each case, assigning new values depending on the
results from the random value.
5. Output the user's original question, plus the randomly selected
case response, to the console after the user enters their question*/

//Hint: to generate a random number we use Math.random() this would generate a number between 0 and 1 including 0 and excluding 1
//if you want a number betwwen 0 and 10 you multiply the number with 10 then you use Math.floor() to round down the number to the nearest int.


//projects.

/*
Chapter projects
1)                                                Evaluating a number game
Ask the user to enter a number and check whether it's greater than,
equal to, or less than a dynamic number value in your code. Output
the result to the user.
2)Friend checker game
Ask the user to enter a name, using the switch statement to return a
confirmation that the user is a friend if the name selected is known
in the case statements. You can add a default response that you don't
know the person if it's an unknown name. Output the result into the
console.
3)Rock Paper Scissors game
This is a game between a player and the computer, where both will
make a random selection of either Rock, Paper, or Scissors
(alternatively, you could create a version using real player input!).
Rock will beat out Scissors, Paper will beat out Rock, and Scissors
will beat out Paper. You can use JavaScript to create your own
version of this game, applying the logic with an if statement. Since
this project is a lile more difficult, here are some suggested steps:
1. Create an array that contains the variables Rock, Paper, and
Scissors.
2. Set up a variable that generates a random number 0-2 for the
player and then do the same for the computer's selection. The
number represents the index values in the array of the 3 items.
3. Create a variable to hold a response message to the user. This
can show the random results for the player and then also the
result for the computer of the matching item from the array.
4. Create a condition to handle the player and computer selections.
If both are the same, this results in a tie.
5. Use conditions to apply the game logic and return the correct
results. There are several ways to do this with the condition
statements, but you could check which player's index value is
bigger and assign the victory accordingly, with the exception of
Rock beating Scissors.
6. Add a new output message that shows the player selection
versus the computer selection and the result of the game.
*/

//loops
/**//**//**//**/


