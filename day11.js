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
    let mapping = {}; //defines an empty obj
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
}

//code that checks if a string is in the right sequence

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