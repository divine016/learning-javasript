//the key feature in on object oriented programming is to devide programs into smaller pieces and make each piece responsible in managing its own State 
// Properties that are part of the interface are called public. The others, which outside code should not be touching, are called private.
//underscore(_) is used at the beginnig of the property nameto indicate in JS that a property is private
//seperating interfaces from implementation is known as encpsulation

//methods are properties that hold a function values
//eg
//defining a method called spak that would says what the rabit says.
let rabbit ={};
rabbit.speak = function(line){
    console.log(`the rabbit says ${line}`)
};

rabbit.speak('i am well');
//the rabbit says i am well

//Usually a method needs to do something with the object it was called on. When a function is called as a method
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
  let whiteRabbit = {type: "white", speak};
  let hungryRabbit = {type: "hungry", speak};
  
  whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
  // → The white rabbit says 'Oh my ears and whiskers, how late it's getting!'
  hungryRabbit.speak("I could use a carrot right now.");
  // → The hungry rabbit says 'I could use a carrot right now.'

//for arrow functions is different lets take an example where we use the this keyword inside.
//we defined a dunction called normalize then its takes the coords and devide by the length
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
//here we have a methos called call that coords n length
//The call() method in JavaScript is a type of method that is used to write a function that can be used on different objects.
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]

//prototypes

//in js most objects have prototypes. a prototype is an object that is used as fallback source of properties

let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

//toString converts an object to a string

//objects have prototypes.  A prototype is another object that is used as a fallback source of properties
console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
//Object.getPrototypeOf returns the prototype of an object.

//Many objects don’t directly have Object.prototype as their prototype but instead have another object that provides a different set of default properties. Functions derive from Function.prototype, and arrays derive from Array.prototype.
console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true

//Object.create is used to create an object with a specific prototype
//deffining the prototype of an object
let protoRabbit = {
  //short hand of deffining a method. this create a property called speak and gives it a function as value
  speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
    
  }
}; 
let killerRabbit = Object.create(protoRabbit); //used to give a specific prototype to
killerRabbit.type = "killer"
killerRabbit.speak("deadddddd")

// → The killer rabbit says 'deadddddd'

//classes

//constructors
//if the new keyword is put in front of a function call then the function is treated as a constructor.

function Rabbit(type){
  this.type = type;
}

Rabbit.prototype.speak = function(line){
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let weirdRabbit = new Rabbit("weird");
// the names of constructors are capitalized so that they can easily be distinguished from other functions
//javascript classes are constructors with a prototype property.

//all objects automatically have a prototype. we can use Oject.create to specify the prototype we want to use.
//wheeas for constructors, they atomatically get a prototype which is an empty object and we can add properties to it.

//javascript classes are constructor functions with a constructor property.
//classes
//classes let us define a constructor and many types of methods on the same spot.
class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
  
  let killerRabbit = new Rabbit("killer");
  let blackRabbit = new Rabbit("black");

  console.log(killerRabbit.speak('amakamaaa'));
  //The killer rabbit says 'amakamaaa'
//map is a datastructure in javascirpt that associates keys with orhter values

//Map
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

//defining a map as done above is dangerous because it comes with an extra property toString
//d=so if we want tot define a map it is done as below.

let ages = new Map();
ages.set('Boriss', 22);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false



//set get and has are part of the interfaces of map.

// Polymorphic code can work with values of different shapes, as long as they support the interface it expects
//for/of loop is an eample of polymorphism

//Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

//defining the "toString" as a symbol.
const toStringSymbol = Symbol("toString");

//setting the prototype of the constant above as a function 
Array.prototype[toStringSymbol] = function(){
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

//t is possible to include symbol properties in object expressions and classes by using square brackets around the property name
let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope

//getters, setters and static
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size);
// → 73
console.log(varyingSize.size);
// → 49
