let animal = {
    ___: ___
  };
  animal['name'] = 'Aleksandr Poochkin';
  animal['species'] = 'Dog';
  animal['age'] = 2;
 
//updating an obj
let obj = {};
function objstr(obj, string){
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];//accesing each letter in the string
        obj[letter] = i; //updating the properties of the obj
    }
    for (let property in obj) {
        console.log(property + ': ' + obj[property]);
    }
}
//comparing two strings
function longer(a, b, ___) {
    if (a.length < b.length) {
      return b;
    }
    return a;
  };
  console.log(longer('signify', 'significant'));
//function for multiplication
let width = 30 = height;
function totalPixels(w, h, ___) {
    return w * h;
  };
  console.log(width + ' by ' + height);
  console.log(totalPixels(width, height));

//a function that takes an array of obj and returns the names  of student who need a ticket if their age is greater than 12
function namesOfStudent(arr){
    for(var elmt of arr){
        if(elmt["age"] > 12){
            console.log(elmt["name"])
        }
    }
}

//code to return the last letter of a string
function lastLetter(str, ___) {
    let lastCharacter = str.length - 1;
    return str[lastCharacter];
  };
  console.log(randomWord);
  console.log(lastLetter(randomWord));

//code that checks if a word fits a particular space and that also checks if a word at a certain position is correct
//first check if the word fits the space
// check if the letter at a certain position id equal to the position of the letter in the word
function(space, word){
    if(space.length !== word.length){
        return false;
    }
    for(let i = 0; i<space.length; i++){
        if(space[i] !== "-" && space[i] !== word[i]){
            return false;
        }
        return true;
    }
}


//challenge


//Write a function that takes a string (stringSequence) and an array of strings (dictionary).
//The function should return the longest string in dictionary that is a subsequence of stringSequence.
function(arr){
    let longestWord = ""
    for(let i = 0; i<arr.length; i++){
        if(array[i].length > longestWord.length){
            longestWord = array[i];
        }
    }
    return longestWord;
}

//code that transforms a string into an object
function mapString(string){
    let mapping = {}; //desfines an empty obj
    for (let i = 0; i < string.length; i++){
        let letter = string[i]
        if(mapping[letter]){
            mapping[letter].push(i); //if letter already exist in mapping then push the index to the of the letter to the array 
        }
        else{
            mapping[letter] = [i]; //create the property and the value
        }
    }
}

// code to check if a letter in a word is found as a property in an object
function compareLetters(word, object, ___) {
    for (var element of word) {
      if (object[element]) {
        if (map[letter]) {
            minIndex = findNextIndex(map[letter], minIndex);
            if (minIndex === false) {
              return false;
            }
      } else {
        return false;
      }
    }
    return true;;
}

//code that checks if a string is in the right sequence
//dont really understand this code
function findNextIndex(array, minIndex, ___) {
    for (var element of array) {
      if (element >= minIndex) {
        return element + 1;
      }
    }
    return false;
  };

  //code that 
  function isSubsequence(word, map, ___) {
    let minIndex = 0;
    for (let letter of word) {
      if (map[letter]) {
        minIndex = findNextIndex(map[letter], minIndex, ___);
        if (minIndex === false) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  };
  console.log(isSubsequence(dictionaryWord, mappedString));

  
  //final
  //algo
  //The function takes a string (stringSequence) and an array of strings (dictionary).
  //The function creates a local variable to store an empty array.

//This array will eventually store all of the strings that are a subsequence.
function longestMatch(string, dictionary, ___) {
    let arr = [
      ___
    ];
    let map = mapString(string, ___);
    for (var element of dictionary) {
      if (isSubsequence(element, map, ___)) {
        arr.push(element);
      }
    }
    return longestWord(arr, ___);
  };