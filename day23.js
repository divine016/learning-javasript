//writing a map function without mao
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
  for(let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this));
  }
    // Only change code above this line
    return newArray;
  };
[23, 65, 98, 5, 13].myMap(item => item * 2) //this would return each number *2
