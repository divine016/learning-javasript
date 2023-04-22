//This code demonstrates the pop and push method and spread method.
let array = ["place", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.pop()); //removes the last elemnt of an array
array.push(10);//adds the specified elemt at the last position and returns the length of the array
console.log(array);
let total =[...array, "person", "worked"]; copies the array "array" to the array total
console.log(total);
for(number of total){
     console.log(number);
}
///filter and include
let array1 = ["8am", "6am", "11am", "12pm", "7pm", "3pm"]
//this function takes an argument time and checks if it contains "am"
function morning(time) {
  return time.includes('am');
};
//this function takes an argument time and checks if it contains "pm"
function evening(time) {
  return time.includes('pm');
};
let amTimes = array1.filter(morning);//takes the morning function and filters all time that contains am
let pmTimes = array1.filter(evening);//takes the evening function and filters all time that contains pm
console.log('Day times: ' + amTimes);
console.log('Night times: ' + pmTimes);

//for each method 
let flightPrices = [390,260,308,345,313,357,238];
let max = flightPrices[0];
let min = flightPrices[0];
function compareToMaximum(value) {
  max = value > max ? value : max;
};
function compareToMinimum(value, ___) {
  min = value < min ? value : min;
};
console.log(flightPrices);
flightPrices.forEach(compareToMaximum); //takes FP and loops through it and passes the function COMPARETOMAXIMUM to it so as to get results.
flightPrices.forEach(compareToMinimum);//revers is true
___
console.log('Maximum: ' + max);
console.log('Minimum: ' + min);