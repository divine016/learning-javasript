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
  