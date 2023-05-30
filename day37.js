//searches for the missen letter and returns it
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      //code of current character
      const charCode = str.charCodeAt(i);
  
      // if code of current character is not equal to first character + no of iteration
         //then a letter was skipped
      if (charCode !== str.charCodeAt(0) + i) {
        //if current character skipped past a character find previous character and return 
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
}
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays
function uniteUnique(arr) {
     // Creates an empty array to store our final result.
    let final = [];
    // Loop through the arguments object to truly make the program work with two or more arrays
    for(let i = 0; i < arguments.length; i++){
      let arrArgs = arguments[i];
    // Loops through the array at hand
      for(let j = 0; j< arrArgs.length; j++){
    //checks if value exist already
        if(final.indexOf(arrArgs[j]) < 0){
          final.push(arrArgs[j]);
        }
      }
    }
    return final;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// function that Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  convertHTML("Dolce & Gabbana");