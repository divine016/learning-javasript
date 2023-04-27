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


