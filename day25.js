//using the slice method and the spread operator to copy all elements in an array to a new one and slice the array
function sliceArray(anim, beginSlice, endSlice) {

  const arr = [...anim];
  const newarr = arr.slice(beginSlice, endSlice)
  return newarr;
  

  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3)
  //this would return dog and tiger

  //using the slice instead of splice would remove the error of array nutation
  //concatinating a string
  function nonMutatingPush(original, newItem) {
    
    return original.concat(newItem);
  
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);
  //this would return [1, 2, 3, 4, 5]