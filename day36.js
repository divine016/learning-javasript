//Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
    // Create variables to be used
    var word = "";
    var regex = /[aeiou]/gi;
  
    // Check if the first character is a vowel
    if (str[0].match(regex)) {
      word= str + "way";
    } else if (str.match(regex) === null) {
      // Check if the string contains only consonants
      word = str + "ay";
    } else {
      // Find how many consonants before the first vowel.
      var vowel = str.indexOf(str.match(regex)[0]);
  
      // Take the string from the first vowel to the last char
      // then add the consonants that were previously omitted and add the ending.
      word = str.substr(vowel) + str.substr(0, vowelIndice) + "ay";
    }
  
    return word;
  }

//Perform a search and replace on the sentence using the arguments provided and return the new sentence
function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
  }

  //Use indexOf() to find location of before in string.
//If first letter of before is capitalized, change first letter of after to uppercase.
//Replace before in the string with after.
//Return the new string. did not understand the whole of it

//DNA Pairing For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
function pairElement(str) {
  let smallEmpty = [];
  let small = [];
  let arr = str.split(/(?=[A-Z])/)
  for(let i = 0; i< arr.length; i++){
    if(str[i] == 'A'){
      small = [str[i], "T"]
      smallEmpty.push(small)
    }
    else if(str[i] == 'T'){
      small = [str[i], "A"]
      smallEmpty.push(small)
    }
    else if(str[i] == 'C'){
      // small.push(str[i]);
      // small.push('G');
       small = [str[i], "G"]
      smallEmpty.push(small)
    }
    else{
      // small.push(str[i]);
      // small.push('C');
      small = [str[i], "C"]
      smallEmpty.push(small)
    }
  }
 
  return smallEmpty;
}

console.log(pairElement("ATCGA"));