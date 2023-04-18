//using objects
const person ={
    name: ["bob", "chery"],
    age: 32,
    bio(){
        console.log("my name is "+ this.name);
    }
};
function  myName(property){
    console.log(person.property);
}
myName(name)
//setting obj members
// you can update a property like this
person.age = 43;
you can also create new members
person.farewell = function(){
    console.log("Bye everybody!");
};
//learned from grasshoper
var climbMountain ={
	food : ["chocolate", "peanuts", "apple", "orange", "cokies", "pineaple", "biscuits"],
	equipments : ["rope", "compass", "map", "boots"],
	clothing : "shoes"
};
for (var food in  climbMountain.food){
	console.log(food)
}
