//ternary operators
var classe = 4;
var number = 3;
if classe > number? print("class is greater and is equal to " + classe) : print("number is bigger and is equal to "+ number)
//console.log logs the argument the console window 
//functions
//Function declarations save a block of code that can be used whenever the function’s name is called
let wallet = 50;
function inYen(dollars, ___) {
  let yen = dollars * 113;
  return yen;
};
function inBaht(dollars, ___) {
  let baht = dollars * 33;
  return baht;
};
console.log(wallet + ' US dollars is:');
console.log(inYen(wallet) + ' Japanese yen');
console.log(inBaht(wallet) + ' Thai baht');

function larger(a, b, ___) {
    return a > b ? a : b;
  };
  function maximum(array, ___) {
    let max = 0;
    for (let num of array) {
      max = larger(max, num);
      ___
    }
    return max;
  };
  console.log(list);
  console.log(maximum(list));

 
 //Recursion Replacement
  function updateAllNames(string, oldPart, newPart, ___) {
    if (string.includes(oldPart) === false) {
      return string;
    }
    string = string.replace(oldPart, newPart);
    return updateAllNames(string, oldPart, newPart);
    ___
  };
  console.log(travelDocument);
  console.log(updateAllNames(travelDocument, 'grasshoper', 'grasshopper'));
  

  //asistant
  function myAssistant(time, callbackFunction, ___) {
    console.log('I am your personal assistant, and I am happy to help with your request');
    callbackFunction(time, ___);
  };
  myAssistant('6pm', recordShow);
  myAssistant('8pm', setAlarm);
  myAssistant('10pm', turnOffLight);