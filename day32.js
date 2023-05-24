function urlSlug(title) {
    return title
      .split(" ")
      .filter(substr => substr !== "")
      .join("-")
      .toLowerCase();
  }
  console.log(urlSlug(" Winter Is  Coming"));

  //The every method works with arrays to check if every element passes a particular test
  // It returns a Boolean value - true if all values meet the criteria, false if not.
  function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function(curnumb){
      return curnumb > 0;
    })
  
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, 4, 5]));